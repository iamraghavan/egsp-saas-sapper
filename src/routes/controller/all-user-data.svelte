<script>
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
// Import your database instance
  
    let users = [];
  
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://nirvaagam-backend.onrender.com/get-users'); // Replace with your actual API base URL
        if (response.ok) {
          users = await response.json();
        } else {
          console.error('Failed to fetch users:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };
  
    onMount(fetchUsers);


  let editedUser = {
    id: null,
    name: '',
    username: '',
    email: '',
    role: '',
    status: '',
    personnelText: '',
    aboutText: '',
  };

  const handleEdit = (userId) => {
    // Assuming you have a function to fetch user details by ID
    const user = fetchUserDetails(userId);
    
    // Set the editedUser and open the edit modal
    editedUser.set(user);
    isEditModalOpen.set(true);
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(`https://nirvaagam-backend.onrender.com/edit-user/${editedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        // Reload the users list after successful update
        await fetchUsers();

        // Show success message using SweetAlert
        Swal.fire({
          title: 'Updated!',
          text: 'User information has been updated.',
          icon: 'success',
        });

        // Close the edit modal
        isEditModalOpen.set(false);
      } else {
        console.error('Failed to update user:', response.statusText);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update user. Please try again.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error updating user:', error.message);
      Swal.fire({
        title: 'Error',
        text: 'Failed to update user. Please try again.',
        icon: 'error',
      });
    }
  };

 
 


  const handleDelete = (userEmail) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Call your backend API to delete the user
          const response = await fetch(`https://nirvaagam-backend.onrender.com/delete-user/${userEmail}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            // Reload the users list after successful deletion
            await fetchUsers();

            // Show success message using SweetAlert
            Swal.fire({
              title: 'Deleted!',
              text: 'The user has been deleted.',
              icon: 'success',
            });
          } else {
            console.error('Failed to delete user:', response.statusText);
            Swal.fire({
              title: 'Error',
              text: 'Failed to delete user. Please try again.',
              icon: 'error',
            });
          }
        } catch (error) {
          console.error('Error deleting user:', error.message);
          Swal.fire({
            title: 'Error',
            text: 'Failed to delete user. Please try again.',
            icon: 'error',
          });
        }
      }
    });
  };
  
  </script>


  

<div class="hp-main-layout-content">
    <div class="row mb-32 gy-32">
        

        <div class="col-12">
            <h1 class="hp-mb-0">All User Data</h1>
        </div>

        <div class="col-12">
            <div class="hp-contact-card mb-32">
                <div class="card-body px-0">
                    <div class="table-responsive">
                        <table class="table align-middle table-hover table-bordered-primary">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>User ID</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {#each users as user, index (user.id)}
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.user_id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                      <!-- Add your edit button and logic here -->
                                      <button class="btn btn-ghost btn-primary" on:click={() => handleEdit(user.id)}>Edit</button>
                                    </td>
                                    <td>
                                      <!-- Add your delete button and logic here -->
                                      <button class="btn btn-ghost btn-danger" on:click={() => handleDelete(user.email)}>Delete</button>
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