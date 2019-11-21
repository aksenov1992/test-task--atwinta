<template>
    <div class="container">
    <el-form ref="form" :model="dataProfile" label-width="120px" label-position="top" >
        <el-form-item label="Ваше Имя">
            <el-input v-model="dataProfile.name"></el-input>
        </el-form-item>
        <el-row>
            <el-col :span="12">
        <el-form-item label="Email">
            <el-input v-model="dataProfile.email" :disabled="true"></el-input>
        </el-form-item>
            </el-col>
            <el-col :span="12">
        <el-form-item label="Телефон">
            <el-input v-model="dataProfile.phone">
                <template slot="prepend">+7</template>
            </el-input>
        </el-form-item>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="12">
        <el-form-item label="Город">
            <el-input v-model="dataProfile.city"></el-input>
        </el-form-item>
            </el-col>
            <el-col :span="12">
        <el-form-item label="Год рождения">
            <el-date-picker
               v-model="dataProfile.birthday"
               type="year"
               placeholder="Выберите год">
             </el-date-picker>
        </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="Тип задания">
        <el-select v-model="dataProfile.type" disabled placeholder="Select">
        </el-select>
        </el-form-item>
        <el-form-item label="Ссылка на проект">
            <el-input v-model="dataProfile.github">
                <template slot="prepend">https://</template>
            </el-input>
        </el-form-item>
        <el-form-item label="Telegram">
            <el-input v-model="dataProfile.telegram">
                <template slot="prepend">@</template>
            </el-input>
        </el-form-item>
        <el-form-item label="Дополнительно">
            <el-input type="textarea" v-model="dataProfile.about"></el-input>
        </el-form-item>
        <el-checkbox v-model="dataProfile.is_finished">Уведомить о выполнении (нелльзя отменить)</el-checkbox>
        <el-form-item>
            <el-button type="success" @click="postUserProfile">Сохранить</el-button>
            <el-button type="danger" @click="logOut">Выйти</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex'

  export default {
    name: "UserProfile",
    created () {
      this.getUserProfile()
    },
    computed: {
      ...mapGetters([
        'dataProfile'
      ]),

    },
    methods: {
      ...mapActions(['getUserProfile', 'postUserProfile', 'LOGOUT']),
      logOut() {
        this.LOGOUT().then(() => {
            this.$router.push('/')
          })
      }
    }
  }
</script>

<style scoped>

</style>