import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export class newNote {
  constructor(){
    this.id = +new Date();
    this.title = '无标题页';
    this.createTime = new Date();
    this.content = '';
    this.favorite = false;
  }
}

export class newTab{
  constructor(){
    this.id = +new Date();
    this.title = '新分区';
    this.rename = false;
    this.activeNote = new newNote();
    this.notes = [this.activeNote];
    this.show = 'all'
  }
}

const defaultTab = new newTab();

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
