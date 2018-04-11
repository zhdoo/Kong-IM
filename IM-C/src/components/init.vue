<template>
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <mu-appbar title="飙车党 V1.1.0" class="topIndexBar" >
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
      <mu-flat-button label="找缘分" slot="right"/>
    </mu-appbar>
    <mu-drawer :open="openSettings" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
      <leftset :viptype="viptype" />
      </mu-list>
    </mu-drawer>
    <mu-content-block class="content">
      <div class="contentTitle">
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。</div>
      <div class="checkSex">
        <div class="demo-paper" v-on:click="checksex(1)"   :class="isSexActive==1?'sexactive':''" >帅哥</div>
        <div class="demo-paper" v-on:click="checksex(2)"   :class="isSexActive==2?'sexactive':''" >美女</div>
      </div>
      <div>
        <mu-raised-button class="demo-raised-button"  @click='startChat()'  label="开始聊天" labelPosition="after" icon="chat" secondary/>
      </div>
      <div>
        <mu-flat-button label="输入vip码"  @click='setvipcode()'   class="demo-flat-button" />
      </div>
    </mu-content-block>
    <mu-popup position="bottom" popupClass="showAgeMod" :open="showAgeMod" >
      <mu-appbar title="选择年龄">
      </mu-appbar>
      <mu-content-block>
        <mu-list>
          <mu-list-item titleClass='ageTitleClass' @click='checkAge(1)' title="18岁以下">
          </mu-list-item>
          <mu-list-item titleClass='ageTitleClass' @click='checkAge(2)' title="18-23岁">
          </mu-list-item>
          <mu-list-item titleClass='ageTitleClass' @click='checkAge(3)' title="23-28岁">
          </mu-list-item>
          <mu-list-item titleClass='ageTitleClass' @click='checkAge(4)' title="28以上">
          </mu-list-item>
        </mu-list>
      </mu-content-block>
    </mu-popup>
    <mu-dialog :open="showDialog" title="错误">
      {{ showMsg }}
      <mu-flat-button label="确定" slot="actions" primary @click="closeDialog"/>
    </mu-dialog>
    <mu-dialog :open="vipdialog" title="输入VIP码"  @close="closevipmod" >
      <mu-text-field hintText="提示文字" fullWidth name="vipcode" v-model="vipcode" />
      <mu-flat-button slot="actions" @click="closevipmod" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="sendvipcode" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userInfo: {
        age: null,
        sex: null
      },
      vipdialog: false,
      vipcode:null,
      showMsg: '请先选择性别！',
      isSexActive: 0,
      showAge: false,
      showAgeMod: false,
      openSettings: false,
      docked: false,
      showDialog: false,
      viptype:localStorage.getItem( "viptype")?localStorage.getItem( "viptype"):'normal'
    }
  },
  mounted: function (val) {
    const that = this
  },
  methods: {
    toggle (flag) {
      this.openSettings = !this.openSettings
      this.docked = !flag
    },
    handleToggle (key) {
      this[key] = !this[key]
    },
    checksex (idx) {
      this.isSexActive = idx
      this.userInfo.sex = idx
      this.showAgeMod = true
      localStorage.setItem( "userSex" ,idx);
    },
    checkAge (item) {
      this.showAgeMod = false
      this.userInfo.age = item
      localStorage.setItem( "userAge" ,item);
      // this.$router.push({"path":'/chat'})
    },
    closeDialog () {
      this.showDialog = false
    },
    startChat () {
      if (this.userInfo.sex == null) {
        this.showDialog = true
        this.showMsg = '请选择性别！'
      } else {
        console.log(this.userInfo)
        //          /this.$router.push({'path':'/chat'})
      }
    },
    setvipcode () {
      this.vipdialog = true
    },
    sendvipcode () {
      var that=this
      fetch('http://im.am1024.com/api/member/validatevipcode?text=' + this.vipcode).then(function (response) {
        return response.json()
      }).then(function (data) {
        if (data.status == 1) {
          localStorage.setItem( "vipcode" , that.vipcode);
          localStorage.setItem( "viptype" , data.viptype);
          that.viptype=data.viptype
          that.vipdialog=false
        }else{
          that.showDialog=true
          that.showMsg=data.msg
        }
      }).catch(function (e) {

        console.log('Oops, error')
      })
    },
    closevipmod () {
      this.vipdialog = false
    }
  }
}
</script>

<style>
  .topIndexBar{
    position: fixed;
    top: 0;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff;
  }
  .sexactive{
    background: #000!important
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
  .mu-appbar-title{
    text-align: center;
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
  .selectTag{
    margin-bottom: 0;
    width: 100%;

  }
  .selectTag>.mu-text-field-content{
    padding-bottom: 0!important;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: url("../assets/bg.jpg") no-repeat center center #000;
    background-size: auto auto;
  }
  .content>div{
    margin: 20px;
  }
  .contentTitle{
    font-size: 20px;
    color: #fff;
    max-width: 300px;
  }
  .checkSex{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    color: #fff;
  }
  .demo-paper {
    display: inline-block;
    height: 80px;
    width: 80px;
    margin: 20px;
    line-height: 80px ;
    text-align: center;
    background: #7e57c2;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }
  .demo-raised-button{
    font-size: 20px;
  }
  .demo-flat-button span{
    font-size: 20px;
    color: #fff;
  }
  .ageTitleClass{
    text-align: center;
  }
  .showAgeMod{
    width: 100%;
  }
  html,body,#app,#app>div{
    height: 100%;
  }
</style>
