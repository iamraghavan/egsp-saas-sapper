<!-- [slug].svelte -->

<script context="module">
    export async function preload({ params }) {
      return {
        slug: params.slug,
      };
    }
  </script>
  
  <script>
    import { onMount } from 'svelte';
    export let slug;
    let productDetails = {};
  
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://nirvaagam-backend.onrender.com/get-product-slug/${slug}`);
  
        if (response.ok) {
          const data = await response.json();
          // Initialize productDetails as an object
          productDetails = data.productDetails.length > 0 ? data.productDetails[0] : {};
        } else {
          console.error('Failed to fetch product details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };
  
    onMount(fetchProductDetails);
  </script>
  
  <!-- Add your page content -->
  <!-- <h2>Product Details Page</h2> -->
  
  <!-- Use each block to split lines -->
  <!-- {#if productDetails.product_name}
    {#each productDetails.product_name.split('\n') as line}
      <p>{line}</p>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if} -->
  

  <div class="hp-main-layout-content">
    <div class="row mb-32 gy-32">
        

        <div class="col-12">
            <h1 class="hp-mb-0">Product Details</h1>
        </div>

        <div class="col-12">
            <div class="hp-contact-card mb-32">
                <div class="card-body px-0">

                    <div class="col-12">
                        <div class="hp-contact-card mb-32">
                            <div class="card-body px-0">
                                <div class="table-responsive">
                                    {#if productDetails.product_name}
                                    <table class="table align-middle table-hover table-bordered-primary">
                                        
                                     
                                          <thead>
                                            <tr>
                                              <th>Serial No.</th>
                                              <th>Product Name</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {#each productDetails.product_name.split('\n') as line, index}
                                              <tr>
                                                <td>{index + 1}</td>
                                                <td>{line}</td>
                                              </tr>
                                            {/each}
                                          </tbody>
                                    
                                      
                                          
                                    </table>
                                    {:else}
                                        <p>Loading...</p>
                                      {/if}
                                </div>
            
                                
                            </div>

                            
                            
                            {#if productDetails.image_path !== null}
                            <a target="_blank" href={productDetails.image_path}>
                              <img src={productDetails.image_path} alt class="product-image" style="width: auto; height: 30rem;" />
                            </a>
                              {:else}
                              <div class="loading-container">
                                <span class="loading-text">Image is loading...</span>
                              </div>
                            {/if}

                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    </div>
                    </div>

                    <style>
                      .loading-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100px; /* Set an appropriate height */
                        background-color: #f0f0f0; /* Optional background color */
                      }
                    
                      .loading-text {
                        font-size: 14px;
                        color: #555;
                      }
                    
                      .product-image {
                        max-width: 100%;
                        height: auto;
                      }
                    </style>