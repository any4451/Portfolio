<template>
    <div class="login-page-component">
        <div class="content">
            <form class="form" @submit.prevent="handleSubmit" >
                <h1 class="form-title">Авторизация</h1>
                <div class="row">
                    <app-input 
                    title="Логин" icon="user" type="text" 
                    v-model="user.name" 
                    :errorMessage="validation.firstError('user.name')" />
                </div>
                <div class="row">
                    <app-input 
                    title="Пароль" icon="key" type="password" 
                    v-model="user.password"
                    :errorMessage="validation.firstError('user.password')" />
                </div>
                <div class="btn">
                    <app-button :disabled="isSubmitDisabled" title="Отправить"/>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import appInput from "../../components/input/input";
import appButton from "../../components/button/button"; 
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
import $axios from "../../requests.js";
import { mapActions } from "vuex";


export default {
  mixins: [ValidatorMixin],
  validators: {
    "user.name"(value) {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password"(value) {
      return Validator.value(value).required("Введите пароль");
    },
  },
  data: () => ({
    user: {
      name: "",
      password: "",
    },
    isSubmitDisabled: false,
  }),
  components: { appButton, appInput },
  methods: {
    ...mapActions({
      showToolpit: "tooltips/show"
    }),
   async handleSubmit() {

            if ((await this.$validate()) === false) return;

            this.isSubmitDisabled = true;

            try {
              const response = await $axios.post("/login", this.user);
              const token = response.data.token;
              localStorage.setItem("token", token);
              $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
              this.$router.replace('/');
            } catch (error) {
              this.showToolpit({
                text: error.response.data.error,
                type: "error"
              })
            } finally {
              this.isSubmitDisabled = false;
            }
        }
     }
  }
</script>

<style scoped lang="postcss">
@import "../../../styles/mixins.pcss";
.login-page-component {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("~images/content/mountain.jpg") center center / cover no-repeat;
    &:before {
        content: "";
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity:0.5;
        background: $grey;
    }
}
.content {
    position: relative;
    @include phones {
        width:100%;
        height:100%;
    }
}
.form {
  max-width: 565px;
  padding: 50px 70px;
  background: #fff;
   @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.form-title {
    font-weight: 600;
    font-size: 36px;
    color: #43436B;
    margin-bottom: 30px;
    text-align: center;
}
.row {
    margin-bottom: 40px;
}
.btn {
    display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}

</style>