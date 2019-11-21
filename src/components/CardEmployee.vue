<template>
    <div>
        <el-row>
            <el-col class="card" :span="6" v-for="(user) in cardData" :key="user.id" :offset="1">
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
        <div>
            <el-pagination

                    layout="prev, pager, next"
                    :total="totalPage"
                    :current-page="currentPage"
                    @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

  export default {
    name: "CardEmployee",
    created () {
      this.getListEmployee()
    },
    computed: {
      ...mapState({
        totalPage: state => state.cardEmployee.employee.total,
        currentPage: state => state.cardEmployee.employee.current_page,
        cardData: state => state.cardEmployee.employee.data
      })
    },
    methods: {
      toEmployee(user) {
        this.$store.dispatch('loadProfileEmployee', user)
        this.$router.push({name:'employeesProfile', params:{id: user}})
      },
      ...mapActions(['getListEmployee']),
      handleCurrentChange(page) {
        this.getListEmployee(page)

      }
    }
  }
</script>

<style scoped>
    .card {
      margin-bottom: 10px;
  }
</style>