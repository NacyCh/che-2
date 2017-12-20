<template>
  <div id="noteList">
    <div style="padding-top: 20px;">
      <!-- search -->
      <el-input class='che-search' placeholder="Search for..." v-model="search">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-button-group class='che-toggle'>
      <!-- all -->
      <el-button
        @click="toggleShow('all')"
        :class="{active: show === 'all'}">
        All Notes
      </el-button>
      <!-- favorites -->
      <el-button
        @click="toggleShow('favorite')"
        :class="{active: show === 'favorite'}">
        Favorite
      </el-button>
    </el-button-group>

    <!-- noteList -->
    <el-menu class='che-noteList'>
      <el-menu-item-group class="che-note-group">
        <el-menu-item
          v-for='(note, index) in searchNotes'
          class='che-notex'
          :key="index"
          :index='note.id.toString()'
          :class='{active: activeTab.activeNote === note}'
          @click="updateActiveNote(note)">
          <span class="che-notex-heading">
            {{note.title.trim().substring(0.30)}}
          </span>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>
<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex';
export default {
  name: "noteList",
  data(){
      return {
        search: ''
      }
  },
  computed:{
    ...mapGetters([
      'filteredNotes'
    ]),
    ...mapState([
      'show',
      'activeTab',
    ]),
    searchNotes(){
      if (this.search.length > 0){
        return this.filteredNotes.filter((note) => note.title.toLowerCase().indexOf(this.search) > -1)
      }else{
        return this.filteredNotes;
      }
    }
  },
  methods:{
    ...mapActions([
      'toggleListShow',
      'setActiveNote'
    ]),

    toggleShow(type){
      this.toggleListShow({show: type});
    },

    updateActiveNote(note){
      this.setActiveNote({ note});
    }

  }
}
</script>
<style>
#noteList{
  margin-top: 0px;
  padding: 0px;
  height: calc(100% - 145px);
}
.che-toggle{
  padding: 20px 0px 0px 20px;
}
.che-search{
  margin-left: 20px;
  width: 183px;
}

.che-noteList{
  padding: 0px;
  margin-top: 20px;
  background: #e5e9f2;
  overflow-y: auto;
  height: calc(100% - 10px) ;
}
.che-note-group{
  display: block;
  height: 100%;
  max-height: 100%;
  width: 100%;
  position: absolute;
}
.che-note-group ul{
  margin-top: -13px;
  height: calc(100% - 10px);
  max-height: calc(100% - 10px);
}
.che-note-group li{
  background: #fff;
}
.che-notex{
  line-height: 32px;
  height: 32px;
}
.che-notex-heading{
  font-weight: 300;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 15px;
}
.is-active span{
  color: #2d2f33;
}
.che-note-group .active{
  background-color: #409EFF;
  color: #fff;
}
</style>
