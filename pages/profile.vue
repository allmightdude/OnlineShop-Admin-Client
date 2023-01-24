<template>
  <div class="profile mt-4">
    <h1>Profile Page</h1>
    <form @submit.prevent="onUpdate">
      <div class="form__control">
        <label for="name">Name</label>
        <input
          type="text"
          class="form__input"
          v-model="name"
          :placeholder="$auth.state.user.name"
        />
      </div>

      <div class="form__control">
        <label for="email">E-mail</label>
        <input
          type="email"
          class="form__input"
          v-model="email"
          :placeholder="$auth.state.user.email"
        />
      </div>

      <div class="form__control">
        <label for="password">Password</label>
        <input type="password" class="form__input" v-model="password" />
      </div>

      <base-button type="submit" class="mt-4"> Update Profile </base-button>
      <div class="bd-bottom"></div>
      <base-button mode="grey mt-2" @click.native="onLogout">
        <i class="fa fa-sign-out"></i> Logout</base-button
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onUpdate() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        let res = await this.$axios.$put("/api/auth/user", data);

        if (res.success) {
          this.name = "";
          this.email = "";
          this.password = "";
          await this.$auth.fetchUser();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async onLogout() {
      await this.$auth.logout();
      await this.$store.dispatch("cart/clearCart");
      await this.$auth.fetchUser();
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  max-width: 30rem;
  margin: 3rem auto;
}
</style>
