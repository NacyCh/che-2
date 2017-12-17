<template>
  <div id="toolbar">
    <el-menu
     :default-active='activeIndex'
     class='el-menu-note'
     mode='horizontal'
     @select="handelSelect"
     background-color='#30414D'
     text-color="#fff"
     active-text-color="#ffd04b">
      <el-menu-item index='1'>分区1</el-menu-item>
      <el-menu-item index='10'>
        <i class="el-icon-plus"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "toolbar",
  data() {
    return {
      activeIndex: "1",
    }
  },
  methods: {
    handelSelect(key,keyPath){
      if(key == 10){

      }else if (key < 10) {

      }
    }
  }

}
</script>
<style>
</style>
