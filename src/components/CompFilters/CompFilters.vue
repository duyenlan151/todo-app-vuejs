<template>
  <div class="wrapper">
    <filter-by-status />
    <filter-by-priority />
  </div>
</template>

<script>
import FilterByStatus from './FilterByStatus.vue'
import FilterByPriority from './FilterByPriority.vue'

export default {
  name: 'comp-filters',
  components: {
    FilterByStatus,
    FilterByPriority
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 16px;
}
</style>
