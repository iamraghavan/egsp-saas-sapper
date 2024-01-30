<script>
    import { onMount } from "svelte";
  
    let totalTickets = 0;
    let completedTickets = 0;
    let pendingTickets = 0;
  
    const fetchTicketStats = async () => {
      try {
        const response = await fetch("https://nirvaagam-backend.onrender.com/ex-ticket-stats");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        totalTickets = data.totalTickets;
        completedTickets = data.completedTickets;
        pendingTickets = data.pendingTickets;
      } catch (error) {
        console.error("Error fetching ticket stats:", error);
      }
    };
  
    onMount(() => {
      fetchTicketStats();
    });
  </script>

<div class="col-12">
    <div class="row g-32">
        <div class="col-md-4 col-6">
            <div class="card hp-dashboard-feature-card hp-border-color-black-0 hp-border-color-dark-80 hp-cursor-pointer">
                <div class="card-body">
                   
                    <div class="d-flex mt-12">
                        <span class="h4 mb-0 d-block hp-text-color-black-bg hp-text-color-dark-0 fw-medium me-4"> Total Product Reqeust Count </span>
                        
                    </div>


                    <span class="d-block mt-12 mb-8 h3"> {totalTickets} </span>
                </div>
            </div>
        </div>

        <div class="col-md-4 col-6">
            <div class="card hp-dashboard-feature-card hp-border-color-black-0 hp-border-color-dark-80 hp-cursor-pointer">
                <div class="card-body">

                    <div class="d-flex mt-12">
                        <span class="h4 mb-0 d-block hp-text-color-black-bg hp-text-color-dark-0 fw-medium me-4"> Completed Product Request </span>
                        
                    </div>


                    <span class="d-block mt-12 mb-8 h3 text-primary"> {completedTickets} </span>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-6">
            <div class="card hp-dashboard-feature-card hp-border-color-black-0 hp-border-color-dark-80 hp-cursor-pointer">
                <div class="card-body">
                   

                    <div class="d-flex mt-12">
                        <span class="h4 mb-0 d-block hp-text-color-black-bg hp-text-color-dark-0 fw-medium me-4"> Bending Product Request </span>
                        
                    </div>


                    <span class="d-block mt-12 mb-8 h3 text-danger"> {pendingTickets} </span>
                </div>
            </div>
        </div>
    </div>
</div>