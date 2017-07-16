import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shortList: [
      {
        text: 'my first item'
      }
    ],
    grassCatcherList: [
      {
        text: 'my first item'
      }
    ],
    grassCatcherVisibility: false,
    showShortcuts: true
  },
  mutations: {
    [types.SHORTLIST_ADD] (state, item) {
      if (state.shortList.length < 5) {
        state.shortList.push(item)
      }
    },
    [types.SHORTLIST_DELETE] (state, item) {
      var index = state.shortList.indexOf(item)
      if (index > -1) {
        state.shortList.splice(index, 1)
      }
    },
    [types.GRASSCATCHER_TOGGLE] (state, visibility) {
      state.grassCatcherVisibility = visibility
    },
    [types.GRASSCATCHER_ADD] (state, item) {
      state.grassCatcherList.push(item)
    },
    [types.GRASSCATCHER_DELETE] (state, item) {
      var index = state.grassCatcherList.indexOf(item)
      if (index > -1) {
        state.grassCatcherList.splice(index, 1)
      }
    },
    [types.SHORTCUTS_SHOW] (state) {
      state.showShortcuts = true
    },
    [types.SHORTCUTS_HIDE] (state) {
      state.showShortcuts = false
    }
  },
  actions: {
    addShortListItem ({ commit }, item) {
      commit(types.SHORTLIST_ADD, item)
    },
    deleteShortListItem ({ commit }, item) {
      commit(types.SHORTLIST_DELETE, item)
    },
    toggleGrassCatcher ({ commit, state }) {
      commit(types.GRASSCATCHER_TOGGLE, !state.grassCatcherVisibility)
    },
    addGrassCatcherListItem ({ commit }, item) {
      commit(types.GRASSCATCHER_ADD, item)
    },
    deleteGrassCatcherListItem ({ commit }, item) {
      commit(types.GRASSCATCHER_DELETE, item)
    },
    showShortcuts ({ commit }) {
      commit(types.SHORTCUTS_SHOW)
    },
    hideShortcuts ({ commit }) {
      commit(types.SHORTCUTS_HIDE)
    },
    toggleShortcuts ({ commit, state }) {
      if (state.showShortcuts) {
        commit(types.SHORTCUTS_HIDE)
      } else {
        commit(types.SHORTCUTS_SHOW)
      }
    }
  }
})
