<script>
    import { onMount, tick } from 'svelte';
    import Swal from 'sweetalert2';
    import { writable } from 'svelte/store';


    import { goto } from '@sapper/app';

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
  
  
  
    // Function to get the user name based on user ID
 
  
    const getTicketDetails = (ticketId) => {
      // Implement the function to get ticket details based on ticketId
      return tickets.find((ticket) => ticket.product_request_id === ticketId);
    };
  
   
  
    function viewDetails(ticketId) {
  // Generate a random slug (replace with your logic to create a unique identifier)
  const slug = ticketId;

  // Navigate to the dynamic route with the generated slug as a URL parameter
  goto(`/store/${slug}`, { state: { value: slug } });
}


    let selectedTicketId = null; // Track the selected ticket ID
  

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
    <body style="font-family: Arial, sans-serif; margin: 50px;" id={`ticket-details-${ticket.product_request_id}`}>

        <div id="header" style="text-align: center; margin-bottom: 20px;">
            <img src="/Logo.png" alt="Company Logo" style="max-width: 100px; max-height: 100px;">
        </div>
    
        <div id="ticket-details" style="border: 1px solid #ddd; padding: 20px; margin-bottom: 20px;">
            <table style="width:100%; color: #555; border-collapse: collapse;">
                <tr>
                    <th style="text-align: left; padding: 15px;">Ticket Status</th>
                    <td style="padding: 15px;">{ticket.status}</td>
                </tr>
                <tr>
                    <th style="text-align: left; padding: 15px;">Product Request ID</th>
                    <td style="padding: 15px;">{ticket.product_request_id}</td>
                </tr>
                <tr>
                    <th style="text-align: left; padding: 15px;">Product Details</th>
                    <td style="padding: 15px;">{ticket.product_name}</td>
                </tr>
                <tr>
                    <th style="text-align: left; padding: 15px;">Status</th>
                    <td style="padding: 15px;">{ticket.status}</td>
                </tr>
                <tr>
                    <th style="text-align: left; padding: 15px;">Product Request Created By</th>
                    <td style="padding: 15px;">{ticket.created_by}</td>
                </tr>
            </table>
        </div>
    
        <button type="button" onclick="window.print();" style="margin-top: 20px; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Download PDF</button>
    
        <div id="signature" style="margin-top: 50px; padding: 20px;">
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
                                    <th>Product Request ID</th>
                        
                                    <th>Status</th>
                                   
                                    <th>Assigned By</th>

                                    <th>Print Details</th>

                                    <th>View Product Details</th>
                                   
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
                                        <button class="btn btn-secondary" on:click={() => handlePrint(ticket.product_request_id)}>
                                          <i class="bi bi-printer"></i>
                                  
                                        </button>
                                      </td>

                                      <td>
                                        <!-- Print icon -->
                                        <button class="btn btn-secondary" on:click={() => viewDetails(ticket.product_request_id)}>
                                         
                                            <span>view</span>
                                  
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
