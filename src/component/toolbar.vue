<template>
  <div id="toolbar">
    <div class='first-line'>
    <i @click='newNote' class='el-icon-plus'></i>
    <i @click='toggleFavorite'
      class='el-icon-star-on'
      :class="{starred: activeTab.activeNote.favorite}">
    </i>
    <i @click='deleteNote' class='el-icon-close'></i>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: "toolbar",
  methods: mapActions([
    'newNote',
    'toggleFavorite',
    'deleteNote'
  ]),
  computed: mapState([
    'activeTab'
  ])
}
</script>
<style>
#toolbar{
  width: 80px;
  background-color: #30414D;
  color: #767676;
  padding: 0px;
  height: 100%;
  text-align: center;
}

.starred{
  color: #f7ae4f;
}

#toolbar i {
  display: block;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
  padding: 25px 0;
}

#toolbar i:hover{
  opacity: 1;
}
</style>
