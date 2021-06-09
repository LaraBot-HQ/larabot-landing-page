<template>
  <div class="container">
    <div class="content">
      <a href="/">
        <img class="logo" src="/images/logo.png" alt="LaraBot Logo" />
      </a>
      <h2>ChatBot Assistant</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
