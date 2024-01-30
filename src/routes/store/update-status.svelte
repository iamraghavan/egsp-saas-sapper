<script>
    import { onMount, tick } from 'svelte';
    import Swal from 'sweetalert2';
    import { writable } from 'svelte/store';



    let tickets = [];
  
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://nirvaagam-backend.onrender.com/get-product-status');
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
   
    } else {
      // User clicked "No" or closed the dialog
      Swal.fire('Cancelled', 'The ticket remains open', 'info');
    }
  }

  async function updateTicketStatus(ticketId, newStatus) {
    try {
      const response = await fetch(`https://nirvaagam-backend.onrender.com/product-request-update/${ticketId}`, {
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
                                    <th>Product Request ID</th>
                        
                                    <th>Status</th>
                                   
                                    <th>Assigned By</th>


                                    <th>Update Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {#each tickets as ticket, index (ticket.id)}
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>{ticket.product_request_id}</td>
                        
                                    <td>
                                        {#if ticket.status === 'closed'}
                                          <div class="badge bg-danger-4 hp-bg-dark-danger text-danger border-danger">Product Delivered</div>
                                        {:else if ticket.status === 'open'}
                                          <div class="badge bg-success-4 hp-bg-dark-success text-success border-success">Open</div>
                                        {/if}
                                      </td>
                                      
                                   
                                    <td>{ticket.created_by}</td>
                                   
                                    <td>
                                        <!-- Print icon -->
                                        <button class="btn btn-primary" on:click={() => handleStatus(ticket.product_request_id)} class:disabled={ticket.status === 'closed'}>
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
