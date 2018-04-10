import leftsetComponent from './leftset.vue'

const Leftset={
    install:function(Vue){
        Vue.component('Leftset',leftsetComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default Leftset;
