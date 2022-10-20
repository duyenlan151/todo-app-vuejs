<template>
  <div id="app" class="container">
    <div>
      <comp-title :title="title" />
      <comp-search />
      <comp-filters />
      <a-divider />
      <comp-todo-list />
    </div>
    <comp-add-todo />
  </div>
</template>

<script>
import CompTitle from '@/components/CompTitle/CompTitle.vue'
import CompSearch from '@/components/CompSearch/CompSearch.vue'
import CompFilters from '@/components/CompFilters/CompFilters.vue'
import CompTodoList from '@/components/CompTodoList/CompTodoList.vue'
import CompAddTodo from '@/components/CompAddTodo/CompAddTodo.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'Todo App with Vuex'
    }
  },
  components: {
    CompTitle,
    CompSearch,
    CompFilters,
    CompTodoList,
    CompAddTodo
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
  padding: 40px 0;
}

h4{
  margin-bottom: 2px;
  font-weight: 700;
  letter-spacing: 0.01rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.container {
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20;
  border-radius: 5;
  min-height: 90vh;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

</style>
