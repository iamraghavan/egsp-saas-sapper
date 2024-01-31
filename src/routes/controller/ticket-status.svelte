<script>
    import { onMount, tick } from 'svelte';
    import Swal from 'sweetalert2';
    import { writable } from 'svelte/store';




    // Import your database instance
    let executiveUsers = writable([]);
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
      const response = await fetch('https://nirvaagam-backend.onrender.com/executive-users');
      const data = await response.json();
  
      // Update the store with fetched executive users
      executiveUsers.set(data);
    });
  
    // Function to get the user name based on user ID
    function getUserName(userId) {
      const user = $executiveUsers.find((user) => user.id === userId);
      return user ? user.name : 'Unknown User';
    }
  
    const getTicketDetails = (ticketId) => {
      // Implement the function to get ticket details based on ticketId
      return tickets.find((ticket) => ticket.ticket_id === ticketId);
    };
  
    const handleDelete = async (ticketId) => {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this Ticket!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });
  
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://nirvaagam-backend.onrender.com/delete-ticket/${ticketId}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            await fetchTickets();
            Swal.fire({
              title: 'Deleted!',
              text: 'The Ticket has been deleted.',
              icon: 'success',
            });
          } else {
            throw new Error('Failed to delete Ticket');
          }
        } catch (error) {
          console.error('Error deleting Ticket:', error.message);
          Swal.fire({
            title: 'Error',
            text: 'Failed to delete Ticket. Please try again or contact support.',
            icon: 'error',
          });
        }
      }
    };
  
   
    let selectedTicketId = null; // Track the selected ticket ID
  let isTicketDetailsVisible = false; // Reactive variable to control visibility
 // Track the selected ticket ID

const handlePrint = async (ticketId) => {
  const ticketDetails = getTicketDetails(ticketId);

  if (!ticketDetails) {
    alert('Ticket details not found');
    return;
  }

  // Update the selected ticket ID
  selectedTicketId = ticketId;

  // Wait for the ticket details to be updated in the DOM
  await Promise.resolve();

  // Print the specific ticket details div
  printTicketDetails();
};

const printTicketDetails = () => {
  const printWindow = window.open('', '_blank');

  printWindow.document.write('<html><head><title>Ticket Details</title>');
  printWindow.document.write('</head><body>');

  const ticketDetailsDiv = document.getElementById(`ticket-details-${selectedTicketId}`);
  
  if (ticketDetailsDiv) {
    printWindow.document.write(ticketDetailsDiv.innerHTML);
  }

  printWindow.document.write('</body></html>');
  printWindow.document.close();

  printWindow.print();
};








  </script>

{#each tickets as ticket (ticket.id)}
<div style="display: none;">
<body style="font-family: Arial, sans-serif; margin: 50px;" id={`ticket-details-${ticket.ticket_id}`}>

    <div id="header" style="text-align: center; margin-bottom: 20px;">
        <img src="/Logo.png" alt="Company Logo" style="max-width: 100px; max-height: 100px;">
      
    </div>

    <div id="ticket-details" style="border: 1px solid #ddd; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #333;">Ticket Status: {ticket.status} </h3>
    <p style="margin: 10px 0; color: #555;">Ticket ID: {ticket.ticket_id}</p>
    <p style="margin: 10px 0; color: #555;">Title: {ticket.title}</p>
    <p style="margin: 10px 0; color: #555;">Description : {ticket.description}</p>
    <p style="margin: 10px 0; color: #555;">Status : {ticket.status}</p>
    <p style="margin: 10px 0; color: #555;">Priority : {ticket.priority}</p>
    <p style="margin: 10px 0; color: #555;">Due Date : {ticket.due_date}</p>
    <p style="margin: 10px 0; color: #555;">Block / Building : {ticket.location}</p>
    <p style="margin: 10px 0; color: #555;">Assign To : {getUserName(ticket.assigned_to)}</p>
    </div>

    <!-- Placeholder for pre-default content -->
    
    <div id="signature" style="margin-top: 50px; padding: 20px">
        <p>Best Regards,</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/waggy-tails-8d2ab.appspot.com/o/raghavansignature.png?alt=media&token=4ffe400c-9ef4-4f6f-aa81-7f0f5361ea2f" alt="Your Signature" style="max-width: 150px;">
        <p>Raghavan</p>
        <p>Developer, EGSP Groups</p>
    </div>

</body>
</div>
{/each}



  <!-- Separate div for each ticket details with a unique ID -->
  <div >
    
  </div>



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
                                    <th>Assign To</th>
                               
                                    <th>Delete</th>
                                    <th>Print</th>
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
                                    <td>{ticket.assigned_to}</td>
                                   
                                    <td>
                                      <!-- Delete icon -->
                                      <button class="btn btn-danger" on:click={() => handleDelete(ticket.ticket_id)}>
                                        <i class="bi bi-trash"></i>
                                   
                                      </button>
                                    </td>
                                    <td>
                                      <!-- Print icon -->
                                      <button class="btn btn-secondary" on:click={() => handlePrint(ticket.ticket_id)}>
                                        <i class="bi bi-printer"></i>
                                
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
