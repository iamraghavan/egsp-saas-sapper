<script>
	import Nav from "../../components/Nav.svelte";
  import TopNav from "../../components/TopNav.svelte";
  
  export let segment;
  
  </script>

   
	  <div class="hp-bg-color-dark-90 d-flex min-vh-100">
	  <Nav {segment}/>

    <div class="hp-main-layout">
    <TopNav/>
	  <slot></slot>
 </div>

  </div>