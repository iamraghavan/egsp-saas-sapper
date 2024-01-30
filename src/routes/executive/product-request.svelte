<script>
    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    import { getUserInfo } from '../../utils/userDetails';
    import { writable } from 'svelte/store';
    import Swal from 'sweetalert2';
    import toastr from "toastr";
    import Push from 'push.js';
  




  
    let { name } = getUserInfo();
  console.log(name);  

 



  
  let storeManagerUser = writable([]);

  let store_assigned_to = "";


  
  
  onMount(async () => {
    try {
      // Fetch store managers from the server
      const response = await fetch('https://nirvaagam-backend.onrender.com/store-managers');
      const data = await response.json();

      // Update the store with fetched store managers
      storeManagerUser.set(data);

    } catch (error) {
      console.error('Error fetching store managers:', error);
    }
  });
  
let product_name = "";
let quantity = "";
let created_by = name;

  

const handleSubmit = async () => {
    const isConfirmed = await Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to create a product request?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => result.isConfirmed);

    if (isConfirmed) {
      // Generate a unique product request ID on the client side
      const productRequestId = 'EGSPRQID' + Math.floor(10000 + Math.random() * 90000);

      console.log('Product request created:', { product_name, created_by, store_assigned_to, productRequestId });

      // Send data to the server (replace with actual API endpoint)
      const response = await fetch('https://nirvaagam-backend.onrender.com/product-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name, created_by, store_assigned_to, productRequestId }),
      });

      if (response.ok) {
        // Reset form fields
        product_name = '';
 
        created_by = '';
        store_assigned_to = '';

        Swal.fire({
          icon: 'success',
          title: 'Product Request Created!',
          text: 'Your product request has been created successfully.',
          timer: 3000,
          showConfirmButton: false,
        });

        // Redirect to the desired page after a delay
        setTimeout(() => {
          goto('/executive');
        }, 3000);
      } else {
        console.error('Error creating product request:', response.statusText);
        Swal.fire({
          icon: 'error',
          title: response.statusText,
          text: 'Something went wrong!',
        });
      }
    }
  };


  </script>
  
 

  
    
  
  <div class="hp-main-layout-content">
      <div class="row mb-32 gy-32">
          
          <div class="col-12">
              <div class="card">
                  <div class="card-body">
                      <div class="row justify-content-between">
                          <div class="col pe-md-32 pe-md-120">
                              <h4>Create Product Request Ticket</h4>
  
                            
                          </div>
  
                        
  
                          <div class="col-12 mt-16">
                            <form on:submit|preventDefault={handleSubmit}>
                              <div class="mb-24">
                                  <label for="title" class="form-label">Product Details</label>
 <textarea class="form-control" id="title" bind:value={product_name} required></textarea>
                              </div>

                             
                              
                      
                             
                            
                      
                            
                      
                              <div class="mb-24">
                                  <label for="title" class="form-label">Ticket Created By</label>
                                  <input class="form-control" type="text" id="title" bind:value={name} required disabled />
                              </div>
                      
                              <div class="mb-24">
                                  <label for="assigned_to">Store Assigned To:</label>
                                  <select id="assigned_to" bind:value={store_assigned_to} class="form-control select-container" required>
                                    {#each $storeManagerUser as user (user.id)} 
                                    <option value={user.id}>{user.name}</option>
                                  {/each}
                                  </select>
                              </div>
                      
                              <button type="submit" class="btn btn-primary">Create Ticket</button>
                          </form>
                          </div>
  
                          
                      </div>
                  </div>
              </div>
          </div>
  
    
  
         
      </div>
  </div>
  
  
  