<script>
    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    import { isLoggedIn } from '../../utils/auth';
  
    onMount(() => {
      // Check if the user is not logged in, redirect to login page
      if (!isLoggedIn()) {
        goto('/');
      }
    });
  </script>

<div class="main-content">

    <div class="page-content">
        <div class="container-fluid">

<div class="row">
    <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center">
                 
                    <div class="flex-grow-1 overflow-hidden ms-4">
                        <p class="text-muted text-truncate font-size-20 mb-2">Monthly Ticket Count</p>
                        <h3 class="display-5 flex-grow-1 mb-3">10</h3>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center">
                 
                    <div class="flex-grow-1 overflow-hidden ms-4">
                        <p class="text-muted text-truncate font-size-20 mb-2">Ticket Completed</p>
                        <h3 class="display-5 flex-grow-1 mb-3 text-success">7</h3>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center">
                 
                    <div class="flex-grow-1 overflow-hidden ms-4">
                        <p class="text-muted text-truncate font-size-20 mb-2">Bending Ticket</p>
                        <h3 class="display-5 flex-grow-1 mb-3 text-danger">3</h3>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    </div>

  
</div>


</div>
</div>
</div>