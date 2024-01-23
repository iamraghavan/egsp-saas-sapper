<script>
	import Nav from "../../components/Nav.svelte";
  
  export let segment;
  
  </script>
   <div data-sidebar="colored">
    
   
        <div id="layout-wrapper">
	  
	  <Nav {segment}/>
  
  <main id="layout-wrapper">
	  <slot></slot>
  </main>

  </div>
  </div>
  
