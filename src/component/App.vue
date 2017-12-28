<template>
  <div id="app">
    <el-container>
      <el-header class="che-nav">
        <chenav></chenav>
      </el-header>
      <el-container>
        <el-aside width='80px' class="grid-content bg-purple-light">
          <toolbar></toolbar>
        </el-aside>
        <el-container>
          <el-aside width='240px' class="grid-content bg-purple-light">
            <noteList></noteList>
          </el-aside>
          <el-main class="grid-content1">
            <editor></editor>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import chenav from './chenav.vue'
import toolbar from './toolbar.vue'
import noteList from './noteList.vue'
import editor from './editor.vue'
export default {
  name: 'app',
  components: {
    chenav,
    toolbar,
    noteList,
    editor
  }
}
</script>

<style>
html, #app{
  height: 100%;
}
body{
  height: 100%;
  max-height: 100%;
  min-width: 720px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  position: relative;
}
#app {
    display: flex;
    align-items: stretch;
    height: 100vh;
}
.bg-purple-light {
  background: #e5e9f2;
}
.che-nav{
  padding: 0px;
  /*padding-bottom: 10px;
  height: 70px !important;
  background-color: #30414D;*/
}
.el-aside, .el-container{
  height: 100%;
  max-height: 100%;
}
.first-line{
  padding-top: 20px;
}
</style>
