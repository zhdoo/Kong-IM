<template>
  <div>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <mu-appbar title="秋名山老司机" class="topBar" >
    <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
    <mu-flat-button label="找缘分" slot="right"/>
  </mu-appbar>
  <mu-drawer :open="openSettings" :docked="docked" @close="toggle()">
    <mu-list @itemClick="docked ? '' : toggle()">
    <leftset/>
    </mu-list>
  </mu-drawer>
    <mu-content-block class="msgContent" >
      <div class="msgLeftList">
        <div class="message-text-left" >123213123213123213123213</div>
      </div>
      <div class="msgRightList">
        <mu-badge content="未读" slot="after" /><div class="message-text-right">12321213213hjdkfhudjsakfhjdskafh</div>
      </div>
      <div class="msgLeftList">
        <div class="message-text-left" >123213123213123213123213</div>
      </div>
      <div class="msgRightList">
        <mu-badge content="已读" secondary slot="after" /><div class="message-text-right">12321213213hjdkfhudjsakfhjdskafh</div>
      </div>
      <div class="msgRightList">
        <mu-badge content="已读" secondary slot="after" /><div class="message-text-right">{{socketId}}</div>
      </div>
    </mu-content-block>
    <div class="bottomBar">
      <mu-icon-button icon="" class="leftBtn"  >{{this.leftBtnText}}</mu-icon-button>
      <!--<div class="leftBtn"  >{{this.leftBtnText}}</div>-->
      <mu-text-field  hintText="" underlineFocusClass="underLine"  inputClass="input" class="buttomInput" />
      <mu-icon-button class="imgBtn" icon="image"/>
      <mu-icon-button   class="rightBtn" icon="send"/>
    </div>
  </div>
</template>

<script>
import io from 'vue-socket.io'
import Vue from 'vue'
Vue.use(io, 'ws://47.97.218.146:13000')
export default {
  data: function () {
    return {
      openSettings: false,
      docked: true,
      leftBtnText: '重新开始',
      socketId:''
    }
  },
  sockets: {
    connect: function (e) {
      this.socketId = this.$socket.id
    },
    customEmit: function (val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  mounted: function (val) {
    if (sessionStorage.getItem('userInfo')) {
      let that = this
      // this.$socket.emit('connect', val) // 在这里触发connect事件
      this.$socket.on('msg', function (e) {
        console.log(that.msgList.push(e))
      })
    } else {
      // this.$router.push({path: '/init'})
    }
  },
  methods: {
    toggle (flag) {
      this.openSettings = !this.openSettings
      this.docked = !flag
    },
    handleToggle (key) {
      console.log(this.userInfo.socketId)
      this[key] = !this[key]
    }
  }
}
</script>

<style>
  .msgLeftList{
    float: left;
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    clear: both;
  }
  .msgRightList{
    float: right;
    -webkit-margin-before:0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    clear: both;
  }
  .message-text-left{
    position: relative;
    height: auto;
    padding: 10px;
    color: #000;
    background: #e4e4e4;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    max-width: 340px;
    word-wrap: break-word;
    width:-webkit-fit-content;
    margin-right: 5px;

  }
  .badgeClass{
    float: left;
  }
.msgContent{
  max-width: 500px;
  margin: auto;
}
  .message-text-left:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    right: 100%;
    top: 12px;
    border-top: 8px solid transparent;
    border-right: 10px solid #e4e4e4;
    border-bottom: 8px solid transparent;
  }
  .message-text-right{
    position: relative;
    padding: 10px;
    height: auto;
    color: #fff;
    background: #f44336;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    word-wrap: break-word;
    max-width: 340px;
    word-break: normal;
    text-align: right;
    width:-webkit-fit-content;
    margin-left: 5px;
  }

  .message-text-right:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    left: 100%;
    top: 12px;
    border-top: 8px solid transparent;
    border-left: 10px solid #f44336;
    border-bottom: 8px solid transparent;
  }

  .topBar{
    position: fixed;
    top: 0;
  }
  .bottomBar{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #7e57c2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttomInput{
    flex: 1;
    background:red;
    height: 30px;
    min-height: 0;
    margin-bottom: 0;
  }
  .buttomInput>.mu-text-field-content{
    padding: 0;
  }
  .input{
    width: 100%;
    background: #ffffff;
    padding-left: 5px;
  }
  .underLine{
    background: none;
  }
  .leftBtn{
    font-size: 10px;
    color: #fff;
  }
  .rightBtn{
    color: #fff;
  }
  .imgBtn{
    color: #fff;
    margin-left: 5px;
  }
  .msgContent{
    margin-bottom: 50px;
    margin-top: 60px;
  }
</style>
