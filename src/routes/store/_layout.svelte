<script>

  import ExNav from "../../components/ExNav.svelte";
import TopNav from "../../components/TopNav.svelte";
import { startInactivityTimer, resetInactivityTimer } from '../../utils/inactivity';
import { onMount } from 'svelte';
onMount(() => {
  startInactivityTimer();

  // Optionally, reset the timer on other events if needed
  window.addEventListener('click', resetInactivityTimer);
  // Add more event listeners as needed
});
  
 
  </script>

   
	  <div class="hp-bg-color-dark-90 d-flex min-vh-100">
	 <ExNav/>
    <div class="hp-main-layout">
    <TopNav/>
	  <slot></slot>
 </div>

  </div>