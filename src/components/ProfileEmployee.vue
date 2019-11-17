<template>
    <div>
        <h3>{{user.name}}</h3>
        <img :src="user.image" alt="">
        <table class="table table-borderless">
            <tbody>
            <tr>
                <th scope="row">Логин</th>
                <td>{{user.login}}</td>
            </tr>
            <tr>
                <th scope="row">Email</th>
                <td>{{user.email}}</td>
            </tr>
            <tr>
                <th scope="row">Должность</th>
                <td>{{user.worker.position}}</td>
            </tr>
            <tr>
                <th scope="row">Отдел</th>
                <td>{{user.worker.department}}</td>
            </tr>
            <tr>
                <th scope="row">Зачислен</th>
                <td>{{user.worker.adopted_at}}</td>
            </tr>
            <tr>
                <th scope="row">О себе</th>
                <td>{{user.about}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

  export default {
    name: "ProfileEmployee",
    computed: {
      ...mapState({
        user: state => state.profileEmployee
      })
    }
  }
</script>

<style scoped>

</style>