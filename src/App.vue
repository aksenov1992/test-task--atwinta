<template>
  <div id="app">
    <Nav/>
    <el-main>
    <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {

  name: 'app',
  components: {Nav}
}
</script>

<style>

</style>
