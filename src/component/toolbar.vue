<template>
  <div id="toolbar">
    <i @click='newNote' class='el-icon-plus'></i>
    <i @click='toggleFavorite'
      class='el-icon-star-on'
      :class="{starred: activeTab.activeNote.favorite}">
    </i>
    <i @click='deleteNote' class='el-icon-close'></i>
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
}

.starred{
  color: #f7ae4f;
}
.el-icon-plus{
  padding-top: 35px;
}
#toolbar i {
  font-size: 30px;
  margin: 25px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover{
  opacity: 1;
}
</style>
