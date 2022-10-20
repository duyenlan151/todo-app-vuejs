<template>
  <div>
    <p v-for="todo in todoList" :key="todo.id">
      <comp-todo :todo="todo" />
    </p>
  </div>
</template>
<script>
import CompTodo from './../CompTodo/CompTodo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'comp-todo-list',
  components: {
    CompTodo
  },
  computed: {
    ...mapGetters({
      'todoList': 'todoListFilter'
    })
  }
}
</script>

<style scoped>
</style>
