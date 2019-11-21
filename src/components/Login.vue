<template>
    <div>
        <h1>Авторизация</h1>
        <el-form ref="loginData" :model="this.loginData" :rules="this.rulesData" label-width="120px">
            <el-form-item label="Ваш email" prop="email">
                <el-input v-model="loginData.email" type="email"></el-input>
            </el-form-item>
            <el-form-item label="Пароль" prop="password">
                <el-input v-model="loginData.password" type="password"></el-input>
            </el-form-item>
            <el-button type="success" @click="submitForm('loginData')">Войти</el-button>
        </el-form>
        <el-form>
            <el-link type="warning" @click="restPass = !restPass">Не помните пароль?</el-link>
            <div v-if="restPass">
                <el-form-item label="Введите ваш email">
                <el-input type="email" v-model="restData.restEmail"></el-input>
                </el-form-item>
                <el-button type="primary" @click="this.restorePass">Восстановить пароль</el-button>
                <el-alert v-if="restData.alert"
                  title="Запрос был отправлен"
                  type="success"
                  show-icon>
                </el-alert>
            </div>
        </el-form>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
      data(){
        return {
          restPass: false,
        }
      },
    name: "Login",
    computed: {
      ...mapGetters(['loginData', 'restData', 'rulesData']),
    },
    methods: {
      ...mapActions(['sendAuth', 'restorePass']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('sendAuth').then(() => {
              this.$router.push('/profile')
            })
          } else {
            // eslint-disable-next-line no-console
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>