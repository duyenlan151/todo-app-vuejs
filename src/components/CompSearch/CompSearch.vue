<template>
  <div>
    <h4>Search</h4>
    <a-input-search
      v-model="search"
      placeholder="Search text"
      @search="onSearch"
      v-on:keyup.enter.prevent="onSearch"
      allowClear
    />
  </div>
</template>

<script>
export default {
  name: 'comp-search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onSearch () {
      this.$store.dispatch('handleSearch', this.search)
    }
  }
}
</script>
