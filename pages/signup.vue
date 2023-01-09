<template>
  <div class="form">
    <div class="text-center">
      <nuxt-link to="/"> <img src="/img/logo-black1.png" /> </nuxt-link>
    </div>

    <base-card class="mt-4">
      <h1>Create Account</h1>
      <form @submit.prevent="onSignup">
        <div class="form__control">
          <label for="name">Name</label>
          <input type="text" class="form__input" v-model="name" />
        </div>
        <div class="form__control">
          <label for="email">E-mail</label>
          <input type="text" class="form__input" v-model="email" />
        </div>
        <div class="form__control">
          <label for="password">Password</label>
          <input type="password" class="form__input" v-model="password" />
        </div>

        <div class="form__control">
          <base-button type="submit" class="mt-4">
            Create Your Account
          </base-button>
        </div>

        <p class="mt-3 fz-1 bd-bottom">
          By creating an account , you agree
          <a href="#">Conditions of Use</a> and
          <a href="#">Privacy Notice</a>
        </p>
        <p class="mt-3 fz-1">
          Already have an account ? <a href="/login">Sign In</a>
        </p>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onSignup() {
      try {
        let res = await this.$axios.$post(
          "/api/auth/signup",
          {
            name: this.name,
            email: this.email,
            password: this.password,
          }
        );

        console.log(res);
        if (res.success) {
          console.log(this.name, this.email, this.password);
          let user = await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });

          this.$router.replace("/");
          console.log(user);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
