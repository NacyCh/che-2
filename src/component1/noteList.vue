<template>
  <div id="noteList">
    <el-radio-group v-model="setShow">
      <el-radio-button :label="false">All Notes</el-radio-button>
      <el-radio-button :label="true">Favorites</el-radio-button>
    </el-radio-group>
    <el-button @click='addTab(noteShowIndex)'>
      <i class="el-icon-plus"></i>
    </el-button>
    <el-button @click='addTab(noteShowIndex)'>
    <i class="el-icon-star-on"></i>
    </el-button>
    <el-button @click='removeTab(noteShowIndex)'>
    <i class="el-icon-close"></i>
    </el-button>
    <el-tabs
      tab-position="left"
      v-model='noteShowIndex'
      closable
      @tab-remove='removeTab'
    >
      <el-tab-pane
        v-for='(item, index) in editableTabs'
        :key='item.name'
        :label='item.title'
        :name='item.name'
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "noteList",
  data(){
      return {
        setShow: true,
        noteShowIndex: '1',
        editableTabs:[{
          title: 'note 1',
          name: '1',
          content: 'note 1 content'
        },{
          title: 'note 2',
          name: '2',
          content: 'note 2 content'
        }
        ],
        tabIndex: 2
      }
  },
  methods:{
    addTab(tabName){
      let newTab = ++this.tabIndex + '';
      this.editableTabs.push({
        title: 'New note',
        name: newTab,
        content: 'New note content'
      });
      this.noteShowIndex = newTab;
    },
    removeTab(tabName){
      let tabs = this.editableTabs;
      let activeName = this.noteShowIndex;
      if(activeName === tabName){
        tabs.forEach((tab, index) => {
          // body...
          if(tab.name === tabName){
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if(nextTab){
              activeName = nextTab.name;
            }
          }
        });
      }
      this.noteShowIndex = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== tabName)
    }

  }
}
</script>
<style>
#noteList{
  margin-top: 0px;
  padding-top: 0px;
}
.el-tabs, .el-tabs__header{
  width :100%
}
.el-button{
  border: 0px
}
</style>
