<script>
  import { onMount, afterUpdate } from "svelte";
  import { createEventDispatcher } from "svelte";
  import Swal from 'sweetalert2';

  let user = { name: "", username: "", email: "", password: "", user_id: "", role: "controller" };

  afterUpdate(() => {
    // Update the user_id whenever the role is changed
    generateUserId();
  });

  const generateUserId = () => {
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    user.user_id = `EGSPN${user.role.charAt(0).toUpperCase()}${randomNumbers}`;
  };

  const addUser = async () => {
    // Destructure individual values from the user object
    const { name, username, email, password, user_id, role } = user;

    // Check if any field is empty
    if (!name || !username || !email || !password) {
      Swal.fire("Error", "All fields are required", "error");
      return;
    }

    try {
      const response = await fetch("https://nirvaagam-backend.onrender.com/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Pass individual values instead of the user object
        body: JSON.stringify({ name, username, email, password, user_id, role }),
      });

      const data = await response.json();

      if (response.ok) {
        // Optionally, reset the form or perform any other actions
        // Resetting the form assuming you have a 'resetForm' function
        resetForm();
        // Show success message for 3 seconds
        Swal.fire({
          title: "Success",
          text: "User added successfully!",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire("Error", "Failed to add user. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      Swal.fire("Error", "Failed to add user. Please try again.", "error");
    }
  };

  const resetForm = () => {
    // Reset your form fields here
    user.name = "";
    user.username = "";
    user.email = "";
    user.password = "";
    user.user_id = "";
    user.role = "";
  };
</script>

<!-- Your HTML markup here -->


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


      

       
    </div>
</div>