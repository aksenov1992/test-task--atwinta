<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <router-link
      tag="a"
      to="/employees">Сотрудники</router-link>
      <router-link
              tag="a"
              to="/profile">Профиль</router-link>
    </nav>
    <el-main>
    <router-view></router-view>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
