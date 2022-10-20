<template>
  <a-input-group compact class="wrapper">
    <a-input
      v-model="name"
      placeholder="Enter value"
      class="input"
    />
    <a-select v-model="priority" :default-value="priority">
      <a-select-option v-for="(item, idx) in mapPriority" :value="item.name" :key="(idx).toString(36) + idx">
        <a-tag :color="item.color">
          {{ item.name }}
        </a-tag>
      </a-select-option>
    </a-select>
    <a-button
      class="btn"
      type="primary"
      html-type="submit"
      :loading="loading"
      :disabled="!name"
      @click="handleSubmit"
    >
      {{ !loading ? "Add" : "" }}
    </a-button>
  </a-input-group>
</template>

<script>
import mapPriority from '@/mocks/priority'
import uuidv4 from 'uuid/v4'

export default {
  name: 'comp-add-todo',
  data () {
    return {
      name: '',
      priority: 'High',
      loading: false,
      mapPriority
    }
  },
  methods: {
    handleSubmit () {
      this.loading = true

      setTimeout(() => {
        const data = {
          id: uuidv4(),
          name: this.name,
          priority: this.priority,
          completed: false
        }

        this.$store.dispatch('handleCreateTodo', data)

        this.handleClear()

        this.loading = false
      }, 1200)
    },

    handleClear () {
      this.name = ''
      this.priority = 'High'
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  margin-bottom: 8px;
}
.btn {
  flex-grow: 1;
  min-width: 60px;
}
</style>
