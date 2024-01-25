<script>
    import { onMount, afterUpdate } from "svelte";
    import { createEventDispatcher } from "svelte";
    import Swal from 'sweetalert2';

    const dispatch = createEventDispatcher();
    let users = []; // Store users data from the server


  let user = {
    name: '',
    role: '',
    email: '',
    username: '',
    password: ''
  };

  const addUser = () => {
    // Call Node.js API to add the user
    fetch("http://localhost:4000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // If user added successfully, show SweetAlert message
          alert("Success", "User added successfully!", "success");
          // You can also dispatch an event to notify parent components
          // dispatch("userAdded", user);
        } else {
          // If there is an error, show SweetAlert error message
          alert("Error", "Failed to add user. Please try again.", "error");
        }
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        alert("Error", "Failed to add user. Please try again.", "error");
      });
  };
    onMount(() => {
      // Fetch users data from the server when the component is mounted
      fetchUsers();
    });
  
    afterUpdate(() => {
      // Update the user_id whenever the role is changed
      generateUserId();
    });
  
    const generateUserId = () => {
      const randomNumbers = Math.floor(1000 + Math.random() * 9000);
      user.user_id = `EGSPN${user.role.charAt(0).toUpperCase()}${randomNumbers}`;
    };
  
 
  

  const fetchUsers = () => {
    fetch("http://localhost:4000/get-users")
      .then((response) => response.json())
      .then((data) => {
        users = data;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  
    const deleteUser = (userEmail) => {
  // Call Node.js API to delete the user
  fetch(`http://localhost:4000/delete-user/${userEmail}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to delete user");
      }
    })
    .then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to delete user");
  }
})
.then((data) => {
  if (data.success) {
    Swal.fire("Success", "User deleted successfully!", "success");
    // Optionally, you can fetch updated user data after deleting a user
    fetchUsers();
  } else {
    Swal.fire("Error", "Failed to delete user. Please try again.", "error");
  }
})
.catch((error) => {
  console.error("Error deleting user:", error);
  Swal.fire("Error", "Failed to delete user. Please try again.", "error");
});
};


   
  </script>

<div class="hp-main-layout-content">
    <div class="row mb-32 gy-32">
        
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col pe-md-32 pe-md-120">
                            <h4>Create Users</h4>

                          
                        </div>

                      

                        <div class="col-12 mt-16">
                           
<form on:submit|preventDefault={addUser} autocomplete="off" autosave>
    <div class="mb-24">
    <label for="name">Name:</label>
    <input class="form-control" type="text" id="name" bind:value={user.name} required />
</div>

    <div class="mb-24">
    <label for="username">Username:</label>
    <input class="form-control" type="text" id="username" bind:value={user.username} required />
</div>

  

    <div class="mb-24">
    <label for="role">Role:</label>
    <select class="form-control" id="role" bind:value={user.role}>
      <option value="controller">Controller</option>
      <option value="executive">Executive</option>
      <option value="supervisor">Supervisor</option>
      <option value="store">Store</option>
    </select>

</div>
  <div class="mb-24">
    <label for="user_id">User ID:</label>
    <input class="form-control" type="text" id="user_id" bind:value={user.user_id} readonly />
  
</div>
    <div class="mb-24">
    <label for="email">Email:</label>
    <input class="form-control" type="email" id="email" bind:value={user.email} required />
  
</div>
    <div class="mb-24">
    <label for="password">Password:</label>
    <input class="form-control" type="password" id="password" bind:value={user.password} required />
  </div>



    <button type="submit" class="btn btn-primary">Add user</button>
  </form>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>


        <div class="col-12">
            <div class="card hp-contact-card mb-32">
              <div class="card-body px-0">
                <div class="table-responsive">
                  <table class="table align-middle table-hover table-borderless">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each users as user, index (user.user_id)}
                        <tr>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.role}</td>
                          <td>{user.email}</td>
                          <td>{user.user_id}</td>
                          <td class="text-end">
                            <button on:click={() => deleteUser(user.email)} class="btn btn-danger btn-sm">
                              Delete
                            </button>
                            <!-- <button on:click={() => openEditModal(user.user_id)} class="btn btn-primary btn-sm">
                              Edit
                            </button> -->
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