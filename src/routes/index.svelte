<script>
    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    import Swal from 'sweetalert2';
 import {getUserIP } from '../utils/userip'
  
    let email = '';
    let password = '';

    let userIP;

  onMount(async () => {
    
    userIP = await getUserIP();
  });
  
    const login = async () => {
      const response = await fetch('https://nirvaagam-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
  const { success, name, role, username, email } = await response.json();
  if (success) {
    // Store user information in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ role, name, username, email }));

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

<div class="row hp-authentication-page d-flex flex-column">

  <div class="col-12">
      <div class="row px-16 px-sm-64 py-16 mb-48 border-bottom hp-border-color-dark-70 align-items-center justify-content-between">
          <div class="w-auto hp-flex-none pl-0 col">
              <div class="hp-header-logo d-flex align-items-center">
                  <a href="index.html" class="position-relative">
                      

                      
                      <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="img/logo-dark.svg" alt="logo">

                  </a>

                
                      <span class="hp-sidebar-hidden hp-caption fw-normal hp-text-color-primary-1">v.0.1</span>
                 
              </div>
          </div>

          <div class="w-auto hp-flex-none col">
              <div class="row align-items-center">
                  

                  <div class="col ms-24 px-0">
                      <a href="/pages/authentication-modern/login#" class="d-flex align-items-center">
                      

                          <span class="ms-6 d-block hp-p1-body hp-text-color-black-100 hp-text-color-dark-0"> IP : {userIP} </span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="px-32 flex-shrink-1 col d-flex">
      <div class="row h-100 m-auto w-100 align-items-center" style="max-width: 390px;">
          <div class="col-12">
              <h1 class="mb-0 mb-sm-24">Login</h1>

              <form on:submit|preventDefault={login} class="mt-16 mt-sm-32 mb-8">
                  <div class="mb-16">
                      <label for="loginUsername" class="form-label">Email :</label>
                      <input type="email" bind:value={email} class="form-control" id="loginUsername">
                  </div>

                  <div class="d-none mb-16" data-step="login-step-1">
                      <label for="loginPassword" class="form-label">Password :</label>
                      <input type="password" bind:value={password} class="form-control" id="loginPassword">
                  </div>

                  <div class="d-none row align-items-center justify-content-between mb-16" data-step="login-step-1">
                      <div class="col hp-flex-none w-auto">
                          <div class="form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1">
                              <label class="form-check-label ps-4" for="exampleCheck1">Remember me</label>
                          </div>
                      </div>

                      <div class="col hp-flex-none w-auto">
                          <a class="hp-button text-black-80 hp-text-color-dark-40" href="auth-modern-recover.html">Forgot Password?</a>
                      </div>
                  </div>

                  <button type="button" data-button-step="login-step-1" class="btn btn-primary w-100">
                      Continue
                  </button>

                  <button type="submit" data-step="login-step-1" class="d-none btn btn-primary w-100">
                      Sign in
                  </button>
              </form>

              <div class="col-12 hp-form-info text-center">
                  <span class="text-black-80 hp-text-color-dark-40 hp-caption me-4">Don’t you have an account?</span>
                  <a class="text-primary-1 hp-text-color-dark-primary-2 hp-caption" href="auth-modern-register.html">Create an account</a>
              </div>
          </div>
      </div>
  </div>

  <div class="my-48 px-24 col-12">
      <p class="hp-p1-body text-center hp-text-color-black-60 mb-8"> Copyright 2020 - 2024 EGSP Groups. </p>

     
  </div>
</div>