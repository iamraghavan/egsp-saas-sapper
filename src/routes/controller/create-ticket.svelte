<script>
    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    import { getUserInfo } from '../../utils/userDetails'; // Adjust the path based on your project structure
    import { writable } from 'svelte/store';
    import Swal from 'sweetalert2';
    let { name } = getUserInfo();
  
    let title = '';
    let description = '';
    let created_by = null;
    let assigned_to = null;
  
    // Simulated list of users (you should fetch this from your API)
    const executiveUsers = writable([]);

  onMount(async () => {
    // Fetch executive users from the server
    const response = await fetch('https://nirvaagam-backend.onrender.com/executive-users');
    const data = await response.json();

    // Update the store with fetched executive users
    executiveUsers.set(data);
  });
  
  const handleSubmit = async () => {
    // Generate ticket ID (EGSTID + random 5 numbers)
    const ticketId = 'EGSTID' + Math.floor(10000 + Math.random() * 90000);

    // Perform actions on form submission, like sending data to the server
    console.log('Ticket created:', { title, description, created_by, assigned_to, ticketId });

    // Send data to the server (replace with actual API endpoint)
    const response = await fetch('https://nirvaagam-backend.onrender.com/create-ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, created_by, assigned_to, ticketId }),
    });

    if (response.ok) {
      // Reset form fields if needed
      title = '';
      description = '';
      created_by = null;
      assigned_to = null;

      // Show success SweetAlert message
      Swal.fire({
        icon: 'success',
        title: 'Ticket Created!',
        text: 'Your ticket has been created successfully.',
        timer: 3000, // Set the timer for 2 seconds
      showConfirmButton: false,
      });

      setTimeout(() =>{ 
        goto('/');
      }, 3000)
      
  
    } else {
      console.error('Error creating ticket:', response.statusText);
      Swal.fire({
        icon: 'error',
        title: response.statusText,
        text: 'Something went wrong!',
      });
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
                            <h4>Create Ticket</h4>

                          
                        </div>

                      

                        <div class="col-12 mt-16">
                            <form on:submit|preventDefault={handleSubmit}>
                                <div class="mb-24">
                                    <label for="title" class="form-label">Title</label>
                                    <input class="form-control" type="text" id="title" bind:value={title} required />
                                    
                                </div>

                                <div class="mb-24">
                                    <label for="description"class="form-label">Description</label>
                                    <textarea id="description" bind:value={description} class="form-control" />
                                </div>


                                <div class="mb-24">
                                    <label for="title" class="form-label">Ticket Created By</label>
                                    <input class="form-control" type="text" id="title" bind:value={name} required disabled />

                                </div>

                                <div class="mb-24">
                                  
  <label for="assigned_to"> Executive Assigned To:</label>
  <select id="assigned_to" bind:value={assigned_to} class="form-control" required>
    {#each $executiveUsers as user (user.id)}
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