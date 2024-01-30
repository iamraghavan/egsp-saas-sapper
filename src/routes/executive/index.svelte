<script>
   
  import ExControllerCards from '../../components/ExControllerCards.svelte';
  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import { isLoggedIn } from '../../utils/auth';
  import ExStatistics from '../../components/ExStatistics.svelte';

  onMount(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const { role } = JSON.parse(loggedInUser);
      goto(`/${role.toLowerCase()}`);
    }

    // If the user is not logged in, redirect to login page
    if (!isLoggedIn()) {
      goto('/');
    }
  });

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

  </script>
  

<div class="hp-main-layout-content">
  <div class="row mb-32 g-32">
      <div class="col flex-grow-1 overflow-hidden">
          <div class="row g-32">
              <div class="col-12">
                  <h1 class="hp-mb-0">Dashboard</h1>
              </div>

              <ExControllerCards/>

             <ExStatistics/>

              

             <div class="col-12">
              <div class="hp-contact-card mb-32">
                  <div class="card-body px-0">
                      <div class="table-responsive">
                          <table class="table align-middle table-hover table-bordered-primary">
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th>Product Request ID</th>
                                      <th>Product Details</th>
                                      <th>Status</th>
                                     
                                      <th>Assigned By</th>
                                     
                                  </tr>
                              </thead>
  
                              <tbody>
                                  {#each tickets as ticket, index (ticket.id)}
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{ticket.product_request_id}</td>
                                      <td>{ticket.product_name}</td>
                                      <td>
                                          {#if ticket.status === 'closed'}
                                            <div class="badge bg-danger-4 hp-bg-dark-danger text-danger border-danger">Product Delivered</div>
                                          {:else if ticket.status === 'open'}
                                            <div class="badge bg-success-4 hp-bg-dark-success text-success border-success">Open</div>
                                          {/if}
                                        </td>
                                        
                                     
                                      <td>{ticket.created_by}</td>
                                     
                                  
                                    
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

      <div class="hp-flex-none w-auto hp-dashboard-line px-0 col">
          <div class="hp-bg-black-40 hp-bg-dark-80 h-100 mx-24" style="width: 1px;"></div>
      </div>


      
     
  </div>
</div>