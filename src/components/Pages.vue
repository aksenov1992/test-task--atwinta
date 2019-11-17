<template>
    <div>
    <el-pagination
            layout="total, prev, pager, next"
            :total="this.totalPage"
            :current-page="this.currentPage"
            @current-change="handleCurrentChange"
            >
    </el-pagination>
        <h2>{{this.totalPage}}</h2>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    name: "Pages",
    module: {  },
    created () {
      this.getListEmployee()
    },
    computed: {
      ...mapState({
        currentPage: state => state.cardEmployee.current_page,
        totalPage: state => state.cardEmployee.total,
        perPage: state => state.cardEmployee.per_page,
        dags: state => state

      })
    },
    methods: {
      showAllData(){
        // eslint-disable-next-line no-console
        console.log(this.dags)
      },
      ...mapActions(['getListEmployee']),
      handleCurrentChange(page) {
        this.getListEmployee(page)
        // eslint-disable-next-line no-console
        console.log(`current page: ${page}`);
      }
    }
  }
</script>

<style scoped>

</style>