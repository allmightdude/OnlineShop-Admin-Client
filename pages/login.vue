<template>
  <div class="form">
    <div class="text-center">
      <nuxt-link to="/"> <img src="/img/logo-black1.png" /> </nuxt-link>
    </div>

    <base-card class="mt-4">
      <h1>Login Account</h1>
      <form>
        <div class="form__control">
          <label for="email">E-mail</label>
          <input type="email" class="form__input" />
        </div>
        <div class="form__control">
          <label for="password">Password</label>
          <input type="password" class="form__input" />
        </div>
      </form>

      <base-button class="mt-4"> Login to Your Account </base-button>
      <div class="bd-bottom"></div>
      <p class="mt-3 fz-1">Create account <a href="/signup">Sign Up</a></p>
    </base-card>
  </div>
</template>

<script>
export default {
  layout: "none",
  middleware : "auth",
  auth : "guest"
};
</script>
