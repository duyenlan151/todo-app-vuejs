<template>
  <div class="wrapper" :class="classWrapper">
    <a-checkbox @change="onChange" :checked="checked" />
    <p>{{ todo.name }}</p>
    <a-tag :color="colorPrioriry">
      {{ todo.priority }}
    </a-tag>
  </div>
</template>

<script>
import mapPriority from '@/mocks/priority'

export default {
  name: 'comp-todo',
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      mapPriority,
      checked: this.todo.completed || false
    }
  },
  computed: {
    colorPrioriry () {
      switch (this.todo.priority) {
        case 'High':
          return 'red'
        case 'Medium':
          return 'blue'
        case 'Low':
          return 'green'
        default:
          break
      }
    },
    classWrapper () {
      return {
        lineThrough: this.checked
      }
    }
  },
  methods: {
    onChange () {
      this.checked = !this.checked
      this.$store.dispatch('toggleTodoStatus', this.todo.id)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;

}

p {
  margin-bottom: 0;
  flex-grow: 1;
  padding: 0 10px;
}
.lineThrough {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
