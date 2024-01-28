<script>
	import Nav from "../../components/Nav.svelte";
  import TopNav from "../../components/TopNav.svelte";
  import { onMount } from 'svelte';

  import { startInactivityTimer, resetInactivityTimer } from '../../utils/inactivity';

onMount(() => {
  startInactivityTimer();

  // Optionally, reset the timer on other events if needed
  window.addEventListener('click', resetInactivityTimer);
  // Add more event listeners as needed
});
  
  
  export let segment;
  
  </script>

   
	  <div class="hp-bg-color-dark-90 d-flex min-vh-100">
	  <Nav {segment}/>

    <div class="hp-main-layout">
    <TopNav/>
	  <slot></slot>
 </div>

  </div>