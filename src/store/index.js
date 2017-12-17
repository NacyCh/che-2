import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const defaultNote = {
  id: +new Date(),
  title: '我的笔记',
  createTime: new Date(),
  content: '',
  favorite: false
};

const defaultTab = {
  id: +new Date(),
  title: '新分区',
  notes: [defaultNote],
  activeNote: defaultNote,
  show: 'all'
};

const state = {
  tabs: [defaultTab],
  activeTab: defaultTab
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
