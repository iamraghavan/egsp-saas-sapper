<!-- Pagination.svelte -->
<script>
    export let currentPage;
    export let totalPages;
    export let goToPage;
  </script>
  
  <nav aria-label="Page navigation">
    <ul class="pagination">
      {#each Array.from({ length: totalPages }, (_, index) => index + 1) as page}
        <li class={currentPage === page ? 'page-item active' : 'page-item'}>
          <a href class="page-link" on:click={() => goToPage(page)}>{page}</a>
        </li>
      {/each}
    </ul>
  </nav>
  

  <style>
    /* Example CSS styles for pagination */
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.page-item {
  margin-right: 4px;
}

.page-item a {
  text-decoration: none;
  padding: 6px 12px;
  border: 1px solid #ddd;
  color: #333;
}

.page-item.active a {
  background-color: #007bff;
  color: white;
}

  </style>