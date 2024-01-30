<script>
    import { onMount, tick } from 'svelte';
    import Swal from 'sweetalert2';
    import { writable } from 'svelte/store';




    let controllerexecutiveUsers = writable([]);
    let tickets = [];
  
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://nirvaagam-backend.onrender.com/get-ticket');
        if (response.ok) {
          tickets = await response.json();
        } else {
          console.error('Failed to fetch tickets:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tickets:', error.message);
      }
    };
  
    onMount(fetchTickets);
  
    onMount(async () => {
      // Fetch executive users from the server
      const response = await fetch('https://localhost:4000/as-executive-users');
      const data = await response.json();
  
      // Update the store with fetched executive users
      controllerexecutiveUsers.set(data);
    });
  
  
  



    async function handleStatus(ticketId) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to complete this ticket?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, complete it!',
      cancelButtonText: 'No, keep it open'
    });

    if (result.isConfirmed) {
      // User clicked "Yes", update the status to 'closed' in the database
      await updateTicketStatus(ticketId, 'closed');
      // Trigger the handlePrint function after updating the status
      handlePrint();
    } else {
      // User clicked "No" or closed the dialog
      Swal.fire('Cancelled', 'The ticket remains open', 'info');
    }
  }

  async function updateTicketStatus(ticketId, newStatus) {
    try {
      const response = await fetch(`https://nirvaagam-backend.onrender.com/update-ticket-status/${ticketId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newStatus })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }



      // Assuming you want to return some data from the backend
      const data = await response.json();
      Swal.fire({
      icon: 'success',
      title: 'Ticket status updated successfully',
      showConfirmButton: false,
      timer: 2000  // 2 seconds
    });

    // Refresh the data after 2 seconds
    setTimeout(() => {
      fetchTickets();  // Assuming you have a function named fetchTickets for data fetching
    }, 2000);


      return data;
    } catch (error) {
      console.error('Error updating ticket status:', error);
      throw error; // You might want to handle the error accordingly
    }
  }


  // Update the ticket status in the server

 











  </script>







<div class="hp-main-layout-content">
    <div class="row mb-32 gy-32">
        

        <div class="col-12">
            <h1 class="hp-mb-0">Tickets Data</h1>
        </div>

        <div class="col-12">
            <div class="hp-contact-card mb-32">
                <div class="card-body px-0">
                    <div class="table-responsive">
                        <table class="table align-middle table-hover table-bordered-primary">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Ticket ID</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Due Date</th>
                                    <th>Block / Building</th>
                                    <th>Assigned By</th>
                                    <th>Update Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {#each tickets as ticket, index (ticket.id)}
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>{ticket.ticket_id}</td>
                                    <td>{ticket.title}</td>
                                    <td>
                                        {#if ticket.status === 'closed'}
                                          <div class="badge bg-danger-4 hp-bg-dark-danger text-danger border-danger">Closed</div>
                                        {:else if ticket.status === 'open'}
                                          <div class="badge bg-success-4 hp-bg-dark-success text-success border-success">Open</div>
                                        {/if}
                                      </td>
                                      
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.due_date}</td>
                                    <td>{ticket.location}</td>
                                    <td>{ticket.created_by}</td>
                                   
                                
                                    <td>
                                      <!-- Print icon -->
                                      <button class="btn btn-primary" on:click={() => handleStatus(ticket.ticket_id)}>
                                       <span>Update Status</span>
                                      </button>
                                    
                                    </td>
                                  </tr>
                                {/each}
                              </tbody>
                              
                        </table>
                    </div>

                    
                </div>
            </div>
        </div>


        
    </div>

  

 

</div>
