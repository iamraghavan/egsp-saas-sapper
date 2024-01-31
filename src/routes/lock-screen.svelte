<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  import { goto } from "@sapper/app";
  import { getUserInfo } from "../utils/userDetails";
  import { getUserIP } from '../utils/userip';
  let password = "";
  let { email, username } = getUserInfo(); // Replace with your default email or retrieve it dynamically

  let userIP;
  onMount(async () => {
    userIP = await getUserIP();
  });

  const unlock = async () => {
    console.log("Unlock function called");
    try {
      const unlockResponse = await fetch("https://nirvaagam-backend.onrender.com/unlock-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (unlockResponse.ok) {
        const { role } = await unlockResponse.json();

        Swal.fire({
          title: "Unlock Successful",
          text: "Welcome back!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          if (role) {
            goto(`/${role.toLowerCase()}`);
          } else {
            console.error("Role not received from the server.");
          }
        }, 2000);
      } else {
        throw new Error(`HTTP error! Status: ${unlockResponse.status}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };
</script>



<div class="row hp-authentication-page d-flex flex-column">

    <div class="col-12">
        <div class="row px-16 px-sm-64 py-16 mb-48 border-bottom hp-border-color-dark-70 align-items-center justify-content-between">
            <div class="w-auto hp-flex-none pl-0 col">
                <div class="hp-header-logo d-flex align-items-center">
                    <a href="/" class="position-relative">
                        
  
                        
                        <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="Logo.png" alt="logo">
  
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
        <div class="row h-100 m-auto w-100 align-items-center" style="max-width: 410px;">
            <div class="col-12">
                <h1 class="mb-0 mb-sm-24">Unlock your Profile</h1>
                <div class="mb-0 mb-sm-24" >
                <h5 class="align-center">username : {username}</h5>
</div>
                <form class="mt-16 mt-sm-32 mb-8" on:submit|preventDefault={unlock}>
                    <div class="mb-24">
                        <label for="loginPassword" class="form-label">Password :</label>
                        <input type="password" bind:value={password} class="form-control" id="loginPassword">
                    </div>

                    <button type="submit" class="btn btn-primary w-100">
                        Unlock 
                    </button>
                </form>

                
            </div>
        </div>
    </div>
  
   
  
    <div class="my-48 px-24 col-12">
        <p class="hp-p1-body text-center hp-text-color-black-60 mb-8"> Copyright 2020 - 2024 EGSP Groups. </p>
  
       
    </div>
  </div>


