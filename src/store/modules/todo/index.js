import Vue from 'vue'
import Vuex from 'vuex'
import todoList from '@/mocks/todoList'

Vue.use(Vuex)

const state = {
  todoList,
  status: 'All',
  priorities: [],
  search: ''
}

const getters = {
  todoListFilter: (state) => {
    const { todoList, search, priorities, status } = state

    return todoList.filter((todo) => {
      const isIncludeText = todo.name.toLowerCase().includes(search.toLowerCase())

      if (status === 'All') {
        return priorities.length
          ? isIncludeText && priorities.includes(todo.priority)
          : isIncludeText
      }

      return (
        isIncludeText &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      )
    })
  }
}

const mutations = {
  handleCreateTodo: (state, data) => {
    const { todoList } = state
    todoList.push(data)
  },

  handleSearch: (state, search) => {
    state.search = search
  },

  handleChangeStatus: (state, status) => {
    state.status = status
  },

  handleChangePriorites: (state, priorities) => {
    state.priorities = priorities
  },

  toggleTodoStatus: (state, id) => {
    const { todoList } = state
    const currentTodo = todoList.find((todo) => todo.id === id)
    if (currentTodo) {
      currentTodo.completed = !currentTodo.completed
    }
  }
}

const actions = {
  handleCreateTodo: ({ commit }, data) => {
    commit('handleCreateTodo', data)
  },

  handleSearch: ({ commit }, search) => {
    commit('handleSearch', search)
  },

  handleChangeStatus: ({ commit }, status) => {
    commit('handleChangeStatus', status)
  },

  handleChangePriorites: ({ commit }, priorities) => {
    commit('handleChangePriorites', priorities)
  },

  toggleTodoStatus: ({ commit }, id) => {
    commit('toggleTodoStatus', id)
  }

}

export default {
  state,
  mutations,
  getters,
  actions
}
