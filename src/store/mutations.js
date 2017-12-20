import {
  SET_CURRENT_ACTIVE_NOTE,
  SET_CURRENT_ACTIVE_TAB,
  NEW_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
  TOGGLE_RENAME_SHOW,
  UPDATE_NOTE,
  UPDATE_TAB,
  TOGGLE_LIST_SHOW,
  NEW_TAB,
  DELETE_TAB,
  RENAME_TAB,
  RENAME_NOTE
} from './mutation-types'

import { newNote, newTab} from './index.js'

export default{
  [NEW_NOTE](state, data = {
    newNote: new newNote()
  }){
    state.activeTab.notes.push(data.newNote);
    state.activeTab.activeNote = data.newNote;
  },

  [DELETE_NOTE](state){
    let items = state.activeTab.notes;
    let len = items.length;
    let item = state.activeTab.activeNote;
    let itemId = item.id;
    for (let i=0; i < len; i++){
      if (items[i].id === itemId){
        state.activeTab.notes.splice(i,1);
        state.activeTab.activeNote = items[i - 1] || items[i] || {}
        return
      }
    }
  },

  [TOGGLE_FAVORITE](state){
    state.activeTab.activeNote.favorite = !state.activeTab.activeNote.favorite;
  },
  [TOGGLE_RENAME_SHOW](state, date){
    state.tabs.forEach(tab => {
      // body...
      if (tab.id === date.tab.id){
        tab.rename = !date.tab.rename;
      }
    });
  },
  [UPDATE_NOTE](state, data){
    state.activeTab.notes.forEach(note => {
      // body...
      if (note.id == data.note.id){
        note = data.note;
      }
    });
  },
  [UPDATE_TAB](state, data){
    state.tabs.forEach(tab => {
      // body...
      if (tab.id == data.tab.id){
        tab = data.tab;
      }
    });
  },
  [TOGGLE_LIST_SHOW](state, data){
      state.activeTab.show = data.show;
  },

  [RENAME_NOTE](state, data){
    state.activeTab.notes.forEach(note => {
      // body...
      if (note.id == data.note.id){
        note.title = data.note.title;
      }
    });
  },

  [SET_CURRENT_ACTIVE_NOTE](state, data){
    state.activeTab.activeNote = data.note;
  },
  [SET_CURRENT_ACTIVE_TAB](state, data){
    state.activeTab = data.tab;
  },
  [RENAME_TAB](state, date){
    state.tabs.forEach(tab => {
      // body...
      if (tab.id === date.id){
        tab.title = date.title;
      }
    });
  },

  [DELETE_TAB](state){
    let item = state.activeTab;
    let itemId = item.id;
    let items = state.tabs;
    let len = items.length;
    for (let i=0; i < len; i++){
      if (items[i].id === itemId){
        state.tabs.splice(i,1);
        state.activeTab = items[i - 1] || items[i] || {}
        if (state.tabs.length == 0){
          let defaultTab = new newTab();
          state.tabs.push(defaultTab);
          state.activeTab  = defaultTab;
        }
        return
      }
    }
  },

  [NEW_TAB](state, data = {
    newTab: new newTab()
  }){
    state.tabs.push(data.newTab);
    state.activeTab  = data.newTab;
    i ++
  },
}
