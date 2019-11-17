<template>
    <el-row>
        <el-col :span="6" v-for="(user, index) in this.employee" :key="user.id" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '20px'}">
                <img :src='user.image' class="image">
                <div style="padding: 14px;">
                    <span>{{user.name}}</span>
                    <div class="bottom clearfix">
                        <el-button type="text" class="button" @click="toEmployee(user.id)">Открыть профиль</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import { mapState } from 'vuex'

  export default {
    name: "CardEmployee",
    computed: {
      ...mapState({
        employee: state => state.cardEmployee.data
      })
    },
    methods: {
      toEmployee(user) {
        this.$store.dispatch('loadProfileEmployee', user)
        this.$router.push({name:'employeesProfile', params:{id: user}})
      }
    }
  }
</script>

<style scoped>

</style>