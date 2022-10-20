<template>
  <div>
    <h4>Filter By Status</h4>
    <a-radio-group v-model="value">
      <a-radio v-for="status in mapStatus" :key="status.name" :value="status.value" >
        {{ status.name }}
      </a-radio>
    </a-radio-group>
  </div>
</template>

<script>
import mapStatus from '@/mocks/status'

export default {
  name: 'filter-by-status',
  data () {
    return {
      value: 'All',
      mapStatus
    }
  },
  watch: {
    value: function (newValue) {
      this.$store.dispatch('handleChangeStatus', newValue)
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 16px;
}
</style>
