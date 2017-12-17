<template>
  <div id="chenav">
    <el-menu
      class="che-menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff">
        <i @click='newTab' class='el-icon-circle-plus-outline addTab'></i>
        <i @click='deleteTab' class='el-icon-circle-close-outline addTab'></i>
      <el-menu-item
        v-for="(tab, index) in allTabs"
        :index='tab.id.toString()'
        :class='{activeTab: activeTab === tab}'
        @click="updateActiveTab(tab)">
        <input class='che-tabtitle'
          name='title'
          placeholder="请输入名称"
          v-model="tab.title"
          @input="tabRename" />
          <span class='che-tabtitle' v-model="tab.title"></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: "chenav",
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters([
      'getTabs'
    ]),
    ...mapState([
      'activeTab'
    ]),
    allTabs(){
      return this.getTabs;
    }
  },
  methods:{
    ...mapActions([
      'newTab',
      'deleteTab',
      'setActiveTab',
      'renameTab'
    ]),

    updateActiveTab(tab){
      this.setActiveTab({ tab});
    },
    tabRename(){
      this.renameTab({
        //do something after updating vue instance
        tab: this.currentTab
      });
    }
  }
}
</script>
<style scoped>
#chenav{

}
.che-menu{
  border: 0px;
  width: 100%;
}
.che-menu li{
  border: 0px;
  border-bottom-color: #545c64 !important;
}
.activeTab{
  color: #ffd04b !important;
}
.addTab{
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  padding-left: 10px;
}
.che-tabtitle{
  width: 80px;
  border: 0px;
  color: inherit;
  background: #545c64;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
