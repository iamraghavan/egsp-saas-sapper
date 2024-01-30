<script>
   
  import ControllerCards from '../../components/ControllerCards.svelte';
  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import { isLoggedIn } from '../../utils/auth';

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
  </script>
  

<div class="hp-main-layout-content">
  <div class="row mb-32 g-32">
      <div class="col flex-grow-1 overflow-hidden">
          <div class="row g-32">
              <div class="col-12">
                  <h1 class="hp-mb-0">Dashboard</h1>
              </div>

             

              
          </div>
      </div>

      <div class="hp-flex-none w-auto hp-dashboard-line px-0 col">
          <div class="hp-bg-black-40 hp-bg-dark-80 h-100 mx-24" style="width: 1px;"></div>
      </div>

     
  </div>
</div>