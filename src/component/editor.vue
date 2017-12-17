<template>
  <div id="editor">
    <el-form ref='form' >
      <el-form-item >
        <el-input class='title'
          name='title'
          placeholder="请输入标题"
          @input='updateNote'
          v-model="currentNote.title">
        </el-input><hr/>
        <div class="block">
        <el-date-picker
          class='che-date'
          v-model="currentNote.createTime"
          type="datetime"
          placeholder="选择日期时间"
          @input='updateNote'>
        </el-date-picker>
      </div>
      </el-form-item >
      <el-form-item class='contentItem'>
        <el-input type="textarea"
          class='che-area'
          :autosize="{ minRows: 2}"
          @input='updateNote'
          v-model="currentNote.content"
          placeholder="请输入正文">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex';

export default {
  name: "editor",
  computed:{
    ...mapGetters([
      'activeNote'
    ]),

    currentNote(){
      return this.activeNote;
    }
  },
  methods: {
    ...mapActions({
      update: 'updateNote'
    }),

    updateNote() {
      this.update({
        //do something after updating vue instance
        note: this.currentNote
      });
    }
  }
}
</script>
<style >
#editor{
  margin-top: 0px;
  padding: 0px;
}
  .el-form-item {
    padding: 0px 10px;
  }
  .title{
    width: 100%;
    border: 0px;
  }
  .title input{
    border: 0px;
  }
  .che-date input{
    border: 0px;
  }
  .che-area{
    position: absolute;
  }
  .che-area textarea{
    resize: none;
    overflow: auto;
  }
</style>
