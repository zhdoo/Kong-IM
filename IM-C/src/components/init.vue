<template>
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <mu-appbar title="秋名山老司机" class="topBar" >
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
      <mu-flat-button label="找缘分" slot="right"/>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list>
          <mu-list-item disabled title="设置111" />
        </mu-list>
        <mu-divider />
        <mu-list>
          <mu-sub-header>基础设置</mu-sub-header>
          <mu-list-item disableRipple  @click="handleToggle('events')" title="展示位置">
            <mu-switch v-model="events"  slot="right"/>
          </mu-list-item>
          <mu-list-item disableRipple  title="音效">
            <mu-switch v-model="calls" slot="right"/>
          </mu-list-item>
          <mu-list-item disableRipple  title="个性标签" >
            <mu-select-field v-model="game1"  class="selectTag"  multiple label="最多选择三个">
              <mu-menu-item value="1" title="阴阳师"/>
              <mu-menu-item value="2" title="影之刃"/>
              <mu-menu-item value="3" title="天下HD"/>
              <mu-menu-item value="4" title="穿越火线"/>
              <mu-menu-item value="5" title="英雄联盟"/>
              <mu-menu-item value="6" title="王者荣耀"/>
            </mu-select-field>
          </mu-list-item>
          <mu-list-item disableRipple  title="不雅词过滤" >
            <mu-select-field v-model="game2" class="selectTag" label="过滤时间">
              <mu-menu-item value="1" title="不过滤"/>
              <mu-menu-item value="2" title="过滤30秒"/>
              <mu-menu-item value="3" title="过滤3分钟"/>
              <mu-menu-item value="4" title="一直过滤"/>
            </mu-select-field>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-sub-header>普通VIP功能</mu-sub-header>
          <mu-list-item disableRipple  title="筛选年龄" >
            <mu-select-field v-model="game3" class="selectTag"  label="匹配年龄段">
              <mu-menu-item value="" title="请选择"/>
              <mu-menu-item value="1" title="18岁以下"/>
              <mu-menu-item value="2" title="18～23岁"/>
              <mu-menu-item value="3" title="23岁以上"/>
            </mu-select-field>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-sub-header>SVIP功能</mu-sub-header>
          <mu-list-item disableRipple  title="筛选地区" >
            <mu-select-field v-model="game4" class="selectTag"  label="匹配时间约1～2分钟">
              <mu-menu-item value="" title="请选择"/>
              <mu-menu-item value="1" title="18岁以下"/>
              <mu-menu-item value="2" title="18～23岁"/>
              <mu-menu-item value="3" title="23岁以上"/>
            </mu-select-field>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-menu-item title="购买VIP／SVIP"/>
          <mu-menu-item title="输入VIP码"/>
          <mu-menu-item title="异常修复"/>
          <mu-menu-item title="寻人区"/>
          <mu-menu-item title="获取我的ID"/>
        </mu-list>
      </mu-list>
    </mu-drawer>
    <mu-content-block class="msgContent" >
    </mu-content-block>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      open: false,
      docked: true,
      leftBtnText: '重新开始',
      events: true,
      calls: true,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false,
      game1: '',
      game2: '',
      game3: '',
      game4: ''
    }
  },
  mounted: function (val) {

  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    handleToggle (key) {
      this[key] = !this[key]
    }
  }
}
</script>

<style>
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
  .selectTag{
    margin-bottom: 0;
    width: 100%;

  }
  .selectTag>.mu-text-field-content{
    padding-bottom: 0!important;
  }
  .msgContent{
    margin-bottom: 50px;
    margin-top: 60px;
  }
</style>
