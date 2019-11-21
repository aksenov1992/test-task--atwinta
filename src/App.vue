<template>
  <div id="app">
    <Nav/>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {

  name: 'app',
  components: {Nav},
  created() {
    if(localStorage.getItem('token')) {
      this.$router.replace({name: 'profile'})
    }
    else {this.$router.replace({name: 'login'})
    }
  }
}
</script>

<style>
.wrapper {
  width: 1200px;
  margin: 0 auto;
}
</style>
