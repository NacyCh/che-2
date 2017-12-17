const filteredNotes = (state) => {
  if (state.activeTab.show === 'all'){
    return state.activeTab.notes || {};
  }else if (state.activeTab.show === 'favorite'){
    return state.activeTab.notes.filter(note => note.favorite) || {};
  }
};
const getTabs = (state) => state.tabs || {};

const show = state => state.activeTab.show;

const activeNote = (state) => state.activeTab.activeNote;

const activeTab = (state) => state.activeTab;

export default{
  activeTab,
  getTabs,
  filteredNotes,
  show,
  activeNote
}
