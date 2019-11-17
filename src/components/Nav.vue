<template>
    <el-menu
            class="el-menu-demo"
            :default-active="activeIndex2"
            @select="handleSelect"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="employees">Сотрудники</el-menu-item>
        <el-menu-item index="profile">Профиль</el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: 'employee'
      };
    },
    name: 'Nav',
    components: {
    },
    methods: {
      handleSelect(key) {
        this.$router.push({name: key})
      }
    }
  }
</script>

<style scoped>

</style>