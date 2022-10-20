<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'comp-title',
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
