<template>
  <div class="container">
    <div class="content">
      <a href="/">
        <img class="logo" src="/images/logo.png" alt="LaraBot Logo" />
      </a>
      <h2>ChatBot Assistant</h2>

      <button @click="connectWithSlack()">Connect with Slack</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import env from '@/environments'

export default Vue.extend({
  methods: {
    connectWithSlack() {
      const slackUrl = 'https://slack.com/oauth/v2/authorize?'
      const state = Math.random().toString(36).substring(2)
      localStorage.setItem('slack_state', state)
      env.slack.bot_scopes.forEach((scope, index) => {
        env.slack.bot_scopes[index] = scope.replace(':', '%3A')
      })
      env.slack.user_scopes.forEach((scope, index) => {
        env.slack.user_scopes[index] = scope.replace(':', '%3A')
      })
      const connectUrl: string = slackUrl.concat(
        'client_id=',
        env.SLACK_CLIENT_ID,
        '&user_scope=',
        env.slack.user_scopes.join(','),
        '&state=',
        state,
        '&redirect_uri=',
        window.location.origin + '/auth/connect-slack'
      )
      window.location.replace(
        `${connectUrl}&scope=${env.slack.bot_scopes.join(',')}`
      )
    },
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
</style>
