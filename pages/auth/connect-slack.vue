<template>
  <div class="container">
    <div class="content">
      <a href="/">
        <img class="logo" src="/images/logo.png" alt="LaraBot Logo" />
      </a>
      <h2>{{ result }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    loading: true,
    result: 'Loading...',
  }),
  async mounted() {
    const { code, state, error } = this.$route.query
    const stateSession = localStorage.getItem('slack_state')

    console.log('--- 1 ----')
    // if (stateSession !== state || error === 'access_denied') {
    //   this.loading = false
    //   this.result = 'Something went wrong...'
    //   return
    // }

    localStorage.removeItem('slack_state')
    console.log('--- 2 ----')
    try {
      const result = await this.$axios.post(
        'https://12d0e3611d0d.ngrok.io/api_v1/auth/slack/connect',
        { code, state }
      )
      console.log('--- 3 ----')
      console.log(result)
      this.loading = false
      this.result = 'Connection Successfully'
    } catch (error) {
      console.log('--- 4 ----')
      this.loading = false
      this.result = 'Something went wrong...'
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}

.content {
  padding: 0 20px;
  .logo {
    width: 300px;
  }
  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .google-play-logo {
    width: 200px;
  }
}
// https://app.dailybot.com/auth/connect-slack?code=3251795295.2146125224998.ed60e856731caca0f24e93e3ba20df7915cde9952caa644a5383adcf3a01f1de&state=rly7ss05oj
</style>
