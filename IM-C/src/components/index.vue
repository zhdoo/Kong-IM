<template>

  <div class="index">

    <ul>
      <li v-for="abc in msgList"  v-bind:key="abc.id" >
        {{ abc }}
      </li>
      <router-link to="/chat">Go to chat</router-link>
      <router-link to="/login">Go to chat</router-link>
    </ul>
    <h1 @click="clickButton('hello world!')">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '发送消息',
      msgList: [
        '你好'
      ],
      input: '123',
      open: false
    }
  },
  mounted (val) {

    var userInfo = sessionStorage.setItem('userInfo')
    if (userInfo) {
      this.$router.push('chat')
    } else {
      this.$router.push('init')
    }
  },
  methods: {
    clickButton: function (val) {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
