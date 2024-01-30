<script>

  import SNav from "../../components/SNav.svelte";
import STopNav from "../../components/STopNav.svelte";

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
	 <SNav/>
    <div class="hp-main-layout">
   <STopNav/>
	  <slot></slot>
 </div>

  </div>