<template>
  <div class="wrapper">
    <h4>Filter By Priority</h4>
    <a-select
      mode="multiple"
      :default-value="[]"
      style="width: 100%"
      placeholder="Please select"
      @change="handleChange"
    >
      <a-select-option v-for="(item, idx) in mapPriority" :value="item.name" :key="(idx).toString(36) + idx">
        <a-tag :color="item.color">
          {{ item.name }}
        </a-tag>
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import mapPriority from '@/mocks/priority'

export default {
  name: 'filter-by-priority',
  data () {
    return {
      mapPriority: mapPriority
    }
  },
  methods: {
    handleChange (value) {
      this.$store.dispatch('handleChangePriorites', value)
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 16px;
}
</style>
