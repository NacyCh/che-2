<template>
  <div id="chenav">
    <el-menu
      class="che-menu"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#fff"
      >
      <span class='tab-focus'>
        <i @click='newTab' class='el-icon-circle-plus-outline addTab'></i>
        <i @click='deleteTab' class='el-icon-circle-close-outline addTab'></i>
      </span>
      <el-menu-item class="che-menu-item"
        v-for="(tab, index) in allTabs"
        :key="index"
        :index='tab.id.toString()'
        :class='{activeTab: activeTab === tab}'
        @click="updateActiveTab(tab)"
       >
        <input class='che-tabtitle' ref='tabtittle_edit'
          name='title'
          placeholder="请输入名称"
          v-model="tab.title"
          @input="tabRename"
          @blur="renameShow(tab)"
          v-show="tab.rename"/>
        <span class='che-tabtitle'
          v-show="!tab.rename"
          @dblclick="renameShow(tab)">
          {{ tab.title }}
        </span>
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
      'renameTab',
      'toggleRenameShow'
    ]),

    updateActiveTab(tab){
      this.setActiveTab({ tab});
    },
    renameShow(tab){
      this.toggleRenameShow({ tab});
      this.$nextTick(() => {
        if (tab.rename){
          this.$refs.tabtittle_edit.forEach(element => {
            if (element.style.display == ''){
              element.focus()
            }
          });
        }
      })
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
  background-color: #545c64;
}
.che-menu-item{
  padding: 0px;
}
.is-active{
  border-bottom-color: #545c64 !important;
}
.tab-focus:focus{
  outline: none;
}
.che-menu li:hover{
  border-bottom-color: #545c64;
  background-color: rgb(67,74,80) !important
}
.che-menu li:hover span{
  background-color: inherit;
}
.activeTab{
  color: #ffd04b !important;
  background: #545c64 !important;
  border-bottom-color: #ffd04b !important;
}
.addTab{
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  padding-left: 10px;
}
.che-tabtitle{
  display: inline-block;
  width: 80px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 0px;
  padding: 0px;
  margin: 0px 20px;
  color: inherit;
  background: #545c64;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
span.che-tabtitle{
  margin: 0px;
  padding: 0px 20px;
  height: 54px;
  line-height: 55px;
}
</style>
