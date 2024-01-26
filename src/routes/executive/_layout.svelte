<script>

  import ExNav from "../../components/ExNav.svelte";
import TopNav from "../../components/TopNav.svelte";
  
 
  </script>

   
	  <div class="hp-bg-color-dark-90 d-flex min-vh-100">
	 <ExNav/>
    <div class="hp-main-layout">
    <TopNav/>
	  <slot></slot>
 </div>

  </div>