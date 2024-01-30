<script>
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';
   
  
    let totalTickets = 0;
    let completedTickets = 0;
    let pendingTickets = 0;
  
    function createChart(chartId, chartType) {
      // Create a Chart.js chart based on the specified type
      const ctx = document.getElementById(chartId).getContext('2d');
      new Chart(ctx, {
        type: chartType,
        data: {
          labels: ['Total Tickets', 'Completed Tickets', 'Pending Tickets'],
          datasets: [{
            label: 'Ticket Status',
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            data: [totalTickets, completedTickets, pendingTickets],
          }],
        },
        options: {
          responsive: true, // Make the chart responsive
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Ticket Status Statistics',
          },
        },
      });
    }
  
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
  
        // After updating the ticket stats, create or update the charts
        createChart('chart1', 'doughnut'); // Doughnut chart for chart1
        createChart('chart2', 'bar'); // Floating Bars chart for chart2
      } catch (error) {
        console.error("Error fetching ticket stats:", error);
      }
    };
  
    // Initially fetch ticket stats and create the charts
    onMount(() => {
      fetchTicketStats();
    });
</script>
  
<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

</style>


<div class="col-12">
    <div class="row g-32">
        <div class="col-md-4 col-4 col-xl-4">
            <div class="card hp-dashboard-feature-card hp-border-color-black-0 hp-border-color-dark-80 hp-cursor-pointer">
                <div class="card-body">
                   
                  


                    <canvas id="chart1"></canvas>
                </div>
            </div>
        </div>

        <div class="col-md-4 col-8 col-xl-8">
            <div class="card hp-dashboard-feature-card hp-border-color-black-0 hp-border-color-dark-80 hp-cursor-pointer">
                <div class="card-body">

                    <canvas id="chart2"></canvas>
                </div>
            </div>
        </div>
       
    </div>
</div>


   