<template>
    <div class="container">
        <h1>Авторизация</h1>
        <form @submit.prevent="SendAuth">
            <label for="email">Ваш email</label>
            <input type="email" required id="email" name="email">
            <label for="password">Пароль</label>
            <input type="password" id="password" required name="password">
            <button type="submit">Войти</button>
            <button>Регистрация</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      SendAuth (evt)  {
        this.$store.dispatch('SendAuth', evt.target.elements)
        evt.target.reset()
      }
    }
  }
</script>

<style scoped>

</style>