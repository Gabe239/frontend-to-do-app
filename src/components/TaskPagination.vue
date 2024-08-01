<template>
  <nav aria-label="Page navigation" class="mt-4">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="$emit('change-page', currentPage - 1)">Previous</button>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
        <button class="page-link" @click="$emit('change-page', page)">{{ page }}</button>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <button class="page-link" @click="$emit('change-page', currentPage + 1)">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TaskPagination',
  props: {
    currentPage: Number,
    totalPages: Number
  }
};
</script>
