<template>
  <div>
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
          <mu-list-item disableRipple  title="个性标签"  >
              <mu-select-field v-model="gexin"   class="selectTag" :change="changeGexin()"   multiple label="最多选择三个" >
              <mu-menu-item v-for="item, index in gexinlist"   :key="index" :title="item" :value="index"/>
            </mu-select-field>
          </mu-list-item>
          <mu-list-item disableRipple  title="不雅词过滤" >
            <mu-select-field v-model="badwordtime" class="selectTag" label="过滤时间">
              <mu-menu-item v-for="item, index in badwordtimelist"   :key="index" :title="item" :value="index"/>
            </mu-select-field>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-sub-header>普通VIP功能</mu-sub-header>
          <mu-list-item disableRipple  title="筛选年龄" >
            <mu-select-field v-model="agechoose" class="selectTag"  label="匹配年龄段">

              <mu-menu-item value="" title="请选择"/>
              <mu-menu-item v-for="item, index in agechooselist"   :key="index" :title="item" :value="index"/>
              <!-- <mu-menu-item value="1" title="18岁以下"/>
              <mu-menu-item value="2" title="18～23岁"/>
              <mu-menu-item value="3" title="23～28岁"/>
              <mu-menu-item value="4" title="28岁以上"/> -->
            </mu-select-field>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-sub-header>SVIP功能</mu-sub-header>
          <mu-list-item disableRipple  title="筛选地区" >
            <mu-select-field v-model="address" class="selectTag"  label="匹配时间约1～2分钟">
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
    data: function () {
      return {
        gexinlist:[
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
        events: true,
        calls: true,
        messages: false,
        notifications: false,
        sounds: false,
        videoSounds: false,
        gexin: [0,1,2],
        badwordtime:0,
        agechoose: 0,
        address: 0,
        showDialog:false,
        showMsg:''
      }
    },
    computed: {
     },
    methods: {
      changeGexin(e){
        if(this.gexin.length>3){
          this.showDialog=true
          this.showMsg='最多选择三项！'
          this.gexin.splice(this.gexin.length-1, 1);
        }
      },
      close(){
          this.showDialog=false
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
