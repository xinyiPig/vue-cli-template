<template>
<div>
  <form @submit.prevent='submitHandler'>
    <span>账号</span><input type="text">
    <button type="submit">登录</button>
  </form>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
    async test () {
      let sendData = {
        object: '13828935070',
        password: '"azEjNTJjNjllM2E1NzMzMTA4MTgyMzMzMWM0ZTY5ZDNmMmUjazI="',
        loginTime: '',
        code: ''
      }
      let res = await axios.post('/api/auth/v1/user/base/business/login', sendData)
      console.log(res)
    },
    async submitHandler () {
      await this.test()
      console.log('等待了')
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
