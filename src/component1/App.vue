<template>
  <div id="app">
    <el-container>
      <el-header >
        <toolbar></toolbar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <noteList></noteList>
        </el-aside>
        <el-main>
          <editor></editor>
        </el-main>
      </el-container>
      <el-footer  height="20px">che note test</el-footer>
    </el-container>
  </div>
</template>

<script>
import toolbar from './toolbar.vue'
import noteList from './noteList.vue'
export default {
  name: 'app',
  data () {

  },
  components: {
    toolbar,
    noteList,

  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #30414D;
    color: #999;
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }
.el-footer {
  text-align: right;
  line-height: 20px;
}
.el-aside {
  color: #333;
  height: 100%;
  min-height: 600px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}
html, #app{
  height: 100%;
}
body{
  height: 100%;
  margin: 0px;
  padding: 0px;
  border: 0px;
  position: relative;
}
</style>
