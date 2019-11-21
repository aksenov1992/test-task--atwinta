<template>
    <div class="wrapper">
    <h1>{{user.name}}</h1>
    <div class="card">
        <img :src="user.image" alt="">
        <table class="table">
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
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
.card {
    display: flex;
    flex-direction: row;
}
.card table {
    width: 50%;
    text-align: left;
    border-spacing: 10px;
    font-size: 20px;
}
</style>