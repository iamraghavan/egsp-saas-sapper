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

  let title = '';
  let description = '';
  let created_by = name;
  let assigned_to = '';
  let priority = '';
  let due_date = '';
  let location = '';
  let executiveUsers = writable([]);


  onMount(async () => {
    // Fetch executive users from the server
    const response = await fetch('https://nirvaagam-backend.onrender.com/executive-users');
    const data = await response.json();

    // Update the store with fetched executive users
    executiveUsers.set(data);
    
  });

  const handleSubmit = async () => {

    if (!title || !description || !assigned_to || !priority || !due_date || !location) {
      
toastr.error("Please fill all the fields");
      return;
     
    }

  const isConfirmed = await Swal.fire({
    title: 'Confirmation',
    text: 'Are you sure you want to create a ticket?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => result.isConfirmed);

  if (isConfirmed) {
    const ticketId = 'EGSTID' + Math.floor(10000 + Math.random() * 90000);

    console.log('Ticket created:', { title, description, created_by, assigned_to, priority, due_date, location, ticketId });

    // Send data to the server (replace with actual API endpoint)
    const response = await fetch('https://nirvaagam-backend.onrender.com/create-ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, name, assigned_to, priority, due_date, location, ticketId }),
    });

    if (response.ok) {
      // Reset form fields if needed
      title = '';
      description = '';
      assigned_to = '';
      priority = '';
      due_date = '';
      location = '';

      // Show success SweetAlert message
      Swal.fire({
        icon: 'success',
        title: 'Ticket Created!',
        text: 'Your ticket has been created successfully.',
        timer: 3000,
        showConfirmButton: false,
      });

      Push.create('Ticket Created!', {
          body: 'Your ticket has been created successfully.',
          icon: '/noti.png', // Replace with the path to your notification icon
          timeout: 10000, // Close the notification after 5 seconds
          onClick: function () {
            // Handle click event
            goto('/controller/ticket-status');
            this.close();
          },
        });



      setTimeout(() => {
        goto('/controller/ticket-status');
      }, 3000);
    } else {
      console.error('Error creating ticket:', response.statusText);
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
                            <h4>Create Ticket</h4>

                          
                        </div>

                      

                        <div class="col-12 mt-16">
                          <form on:submit|preventDefault={handleSubmit}>
                            <div class="mb-24">
                                <label for="title" class="form-label">Title</label>
                                <input class="form-control" type="text" id="title" bind:value={title} required />
                            </div>
                    
                            <div class="mb-24">
                                <label for="description" class="form-label">Description</label>
                                <textarea id="description" bind:value={description} class="form-control"></textarea>
                            </div>
                    
                            <div class="mb-24">
                              <label for="priority" class="form-label">Priority</label>
                              <select class="form-control select-container" id="priority" bind:value={priority} required>
                                  <option value="High">High</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Low">Low</option>
                              </select>
                          </div>
                          
                    
                            <div class="mb-24">
                                <label for="due_date" class="form-label">Due Date</label>
                                <input class="form-control" type="date" id="due_date" bind:value={due_date} required />
                            </div>
                    
                            <div class="mb-24">
                                <label for="location" class="form-label">Location</label>
                                <input class="form-control" type="text" id="location" bind:value={location} required />
                            </div>
                    
                            <div class="mb-24">
                                <label for="title" class="form-label">Ticket Created By</label>
                                <input class="form-control" type="text" id="title" bind:value={name} required disabled />
                            </div>
                    
                            <div class="mb-24">
                                <label for="assigned_to">Executive Assigned To:</label>
                                <select id="assigned_to" bind:value={assigned_to} class="form-control select-container" required>
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

        <div class="col-12">
          <div class="card">
              <div class="card-body">
                  <div class="row justify-content-between">
                      <div class="col pe-md-32 pe-md-120">
                          <h4>update Ticket</h4>

                        
                      </div>

                    

                      <div class="col-12 mt-16">
                        <form on:submit|preventDefault={handleSubmit}>
                          <div class="mb-24">
                              <label for="title" class="form-label">Title</label>
                              <input class="form-control" type="text" id="title" bind:value={title} required />
                          </div>
                  
                          <div class="mb-24">
                              <label for="description" class="form-label">Description</label>
                              <textarea id="description" bind:value={description} class="form-control"></textarea>
                          </div>
                  
                          <div class="mb-24">
                            <label for="priority" class="form-label">Priority</label>
                            <select class="form-control select-container" id="priority" bind:value={priority} required>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        
                  
                          <div class="mb-24">
                              <label for="due_date" class="form-label">Due Date</label>
                              <input class="form-control" type="date" id="due_date" bind:value={due_date} required />
                          </div>
                  
                          <div class="mb-24">
                              <label for="location" class="form-label">Location</label>
                              <input class="form-control" type="text" id="location" bind:value={location} required />
                          </div>
                  
                          <div class="mb-24">
                              <label for="title" class="form-label">Ticket Created By</label>
                              <input class="form-control" type="text" id="title" bind:value={name} required disabled />
                          </div>
                  
                          <div class="mb-24">
                              <label for="assigned_to">Executive Assigned To:</label>
                              <select id="assigned_to" bind:value={assigned_to} class="form-control select-container" required>
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


