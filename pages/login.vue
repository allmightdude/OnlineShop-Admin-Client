<template>
  <div class="form">
    <div class="text-center">
      <nuxt-link to="/"> <img src="/img/logo-black1.png" /> </nuxt-link>
    </div>

    <base-card class="mt-4">
      <h1>Login Account</h1>
      <form @submit.prevent="onLogin">
        <div class="form__control">
          <label for="email">E-mail</label>
          <input type="text" class="form__input" v-model="email" />
        </div>
        <div class="form__control">
          <label for="password">Password</label>
          <input type="password" class="form__input"  v-model="password"/>
        </div>

        <div class="form__control">
          <base-button type="submit" class="mt-4">
            Login to Your Account
          </base-button>
        </div>
        <div class="bd-bottom"></div>
        <p class="mt-3 fz-1">Create account <a href="/signup">Sign Up</a></p>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  layout: "none",
  middleware: "auth",
  auth: "guest",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async onLogin() {
      try {
          let res = await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });

          console.log(res);

        // let user = await this.$auth.loginWith("local", {
        //   data: {
        //     email: this.email,
        //     password: this.password,
        //   },
        // });
        // console.log(user);
        // if (user) {
        //   this.$router.replace("/");
        // }
        // console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
