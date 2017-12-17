import {
  SET_CURRENT_ACTIVE_NOTE,
  SET_CURRENT_ACTIVE_TAB,
  NEW_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
  UPDATE_NOTE,
  UPDATE_TAB,
  TOGGLE_LIST_SHOW,
  NEW_TAB,
  DELETE_TAB,
  RENAME_TAB,
  RENAME_NOTE
} from './mutation-types'

function makeAction(type){
  return ({ commit }, ...data) => commit(type, ...data);
}
function makeActionA(type){
  return ({ commit }) => commit(type);
}
export default {
  newNote: makeActionA('NEW_NOTE'),
  toggleFavorite: makeAction('TOGGLE_FAVORITE'),
  deleteNote: makeAction('DELETE_NOTE'),
  toggleListShow: makeAction('TOGGLE_LIST_SHOW'),
  setActiveNote: makeAction('SET_CURRENT_ACTIVE_NOTE'),
  setActiveTab: makeAction('SET_CURRENT_ACTIVE_TAB'),
  updateNote: makeAction('UPDATE_NOTE'),
  updateTab: makeAction('UPDATE_TAB'),
  newTab: makeActionA('NEW_TAB'),
  deleteTab: makeAction('DELETE_TAB'),
  renameTab: makeAction('RENAME_TAB'),
  renameNote: makeAction('RENAME_NOTE')
}
