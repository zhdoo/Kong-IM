<template>
  <div>
    <mu-list>
      <mu-list-item disabled title="设置" />
    </mu-list>
    <mu-divider />
    <mu-list>
      <mu-sub-header>基础设置</mu-sub-header>
      <mu-list-item disableRipple  @click="handleToggle('show')" title="展示位置">
        <mu-switch v-model="show" :change='changeSwitch("show")'  slot="right"/>
      </mu-list-item>
      <mu-list-item disableRipple  @click="handleToggle('sounds')"  title="音效">
        <mu-switch v-model="sounds" :change='changeSwitch("sounds")' slot="right"/>
      </mu-list-item>
      <mu-list-item disableRipple  title="个性标签"  >
        <mu-select-field v-model="lable"   class="selectTag" :change="changeSelect('lable')"   multiple label="最多选择三个" >
          <mu-menu-item v-for="item, index in lablelist"   :key="index" :title="item" :value="index"/>
        </mu-select-field>
      </mu-list-item>
      <mu-list-item disableRipple  title="不雅词过滤" >
        <mu-select-field v-model="badwordtime" class="selectTag" :change="changeSelect('badwordtime')"  label="过滤时间">
          <mu-menu-item v-for="item, index in badwordtimelist"   :key="index" :title="item" :value="index"/>
        </mu-select-field>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>普通VIP功能</mu-sub-header>
      <mu-list-item disableRipple  title="筛选年龄" >
        <mu-select-field v-model="agechoose"  class="selectTag" :change="changeSelect('agechoose')"   label="匹配年龄段">
          <mu-menu-item value="" title="请选择"/>
          <mu-menu-item v-for="item, index in agechooselist"   :key="index" :title="item" :value="index"/>
        </mu-select-field>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>SVIP功能</mu-sub-header>
      <mu-list-item disableRipple  title="筛选地区" >
        <mu-select-field v-model="address" class="selectTag"    :change="changeSelect('address')"  label="匹配时间约1～2分钟">
          <mu-menu-item value="" title="请选择"/>
          <mu-menu-item v-for="item, index in addresslist"   :key="index" :title="item" :value="index"/>
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
    <mu-dialog :open="showDialog" title="错误">
      {{ showMsg }}
      <mu-flat-button label="确定" slot="actions" primary @click="close"/>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  props:[
    'viptype'
  ],
  data: function () {
    return {
      lablelist:[
        '阴阳师','影之刃','天下HD','穿越火线','英雄联盟','王者荣耀'
      ],
      badwordtimelist:[
        '不过滤','过滤30秒','过滤3分钟','一直过滤'
      ],
      agechooselist:[
        '18岁以下','18～23岁','23～28岁','28岁以上'
      ],
      addresslist:[
        '江苏','山东','广东','浙江'
      ],
      show: true,
      notifications: false,
      sounds: true,
      videoSounds: false,
      lable: [0,1,2],
      badwordtime:0,
      agechoose: '',
      address: '',
      showDialog:false,
      showMsg:'',
    }
  },
  mounted: function (val) {
    const that = this
    localStorage.setItem( "userSound" ,this.sounds);
    localStorage.setItem( "userShow" ,this.show);
    localStorage.setItem( "userBadWordtime" ,this.badwordtime);
    localStorage.setItem( "userAgechoose" ,this.agechoose);
    localStorage.setItem( "userAddress" ,this.address);
  },
  computed: {

  },
  methods: {
    changeSelect(e){
      if(e == 'lable'){
        if(this.lable.length>3){
          this.showDialog=true
          this.showMsg='最多选择三项！'
          this.lable.splice(this.lable.length-1, 1);
        }else{
          localStorage.setItem( "userLable" ,this.lable);
        }
      }else if(e=='badwordtime') {
        localStorage.setItem( "userBadWordtime" ,this.badwordtime);
      }else if(e=='agechoose') {
        var vipcode=localStorage.getItem( "vipcode");
        if(vipcode==''){
            this.agechoose=''
        }else{
            localStorage.setItem( "userAgechoose" ,this.agechoose);
        }
      }else if(e=='address') {
        var vipcode=localStorage.getItem( "vipcode");
        if(vipcode==''){
          this.agechoose=''
        }else{
            localStorage.setItem( "userAddress" ,this.address);
        }
      }
  },
  close(){
    this.showDialog=false
  },
  handleToggle (key) {
    this[key] = !this[key]
  },
  changeSwitch(e){
    if(e=='show'){
      var show=this.show?false:true;
      localStorage.setItem( "userShow",show);
    }else if (e=='sounds') {
      var sounds=this.sounds?false:true;
      localStorage.setItem( "userSound",sounds);
    }
  },
  ck(){
  }
}
}
</script>

<style>

.selectTag{
  margin-bottom: 0;
  width: 100%;

}
.selectTag>.mu-text-field-content{
  padding-bottom: 0!important;
}
</style>
