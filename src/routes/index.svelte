<script>
    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    import Swal from 'sweetalert2';
 
  
    let email = '';
    let password = '';
  
    const login = async () => {
      const response = await fetch('https://nirvaagam-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
  const { success, name, role } = await response.json();
  if (success) {
    // Store user information in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ role }));

    // Show Swal.fire alert for 2 seconds
    Swal.fire({
      title: 'Login Successful',
      text: `Welcome back, ${name}!`,
      icon: 'success',
      timer: 2000, // Set the timer for 2 seconds
      showConfirmButton: false,
    });

    // After 2 seconds, navigate to the appropriate role dashboard.
    setTimeout(() => {
      goto(`/${role.toLowerCase()}`);
    }, 2000);
  } else {
    // Handle login failure
    console.error('Login failed');
  }
} else {
  // Handle network or server error
  console.error('Network or server error');
}

    };


  
    onMount(() => {
      
      // Check if a user is already logged in
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const { role } = JSON.parse(loggedInUser);
        // Redirect to the appropriate role dashboard if already logged in
        goto(`/${role.toLowerCase()}`);
      }
    });
  </script>
  


<div class="auth-maintenance d-flex align-items-center min-vh-100">
            <div class="bg-overlay bg-light"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4">
                            <div class="w-100">
                                <div class="d-flex flex-column h-100 py-0 py-xl-3">
                                    <div class="text-center mb-4">
                                        <a href="index.html" class="">
                                            <img src="assets/logo-dark.svg" alt="" height="140" class="auth-logo logo-dark mx-auto">
                                            
                                        </a>
                                        
                                    </div>
    
                                    <div class="card my-auto overflow-hidden">
                                            <div class="row g-0">
                                                <div class="col-lg-6">
                                                    <img src="./assets/images/bstract-metaphor_33.jpg" alt="" srcset="">
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="p-lg-5 p-4">
														
                                                        <div>
                                                            <div class="text-center mt-1">
                                                                <h4 class="font-size-18">Welcome Back !</h4>
                                                                <p class="text-muted">Sign in to continue to EGSP Nirvaagam .</p>
                                                            </div>
            
                                                            <form on:submit|preventDefault={login} class="auth-input">
                                                                <div class="mb-2">
                                                                    <label for="Email" class="form-label">Email</label>
                                                                    <input type="email" class="form-control" bind:value={email} id="Email" placeholder="Enter Official Mail ID">
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label class="form-label" for="password-input">Password</label>
                                                                    <input type="password" bind:value={password} class="form-control" placeholder="Enter password">
                                                                </div>
                                                                
                                                                <div class="mt-3">
                                                                    <button class="btn btn-primary w-100" type="submit" >Sign In</button>
                                                                </div>
                                                               
																
                                                            </form>
                                                        </div>
                                                    
                                                        
                                                    </div>
                                                </div>  
                                        </div>
                                    </div>
                                    <!-- end card -->
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
        </div>


		<style>
			.col-lg-6 img {
    width: 100%;
    height: auto;
}

/* Optional: Add max-height to limit the image height */
.col-lg-6 img {
    max-height: 100%; /* Adjust this value as needed */
}
		</style>