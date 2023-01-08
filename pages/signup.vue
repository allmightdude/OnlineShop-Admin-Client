<template>
  <div class="form">
    <base-card>
      <h1>Create Account</h1>
      <form>
        <div class="form__control">
          <label for="name">Name</label>
          <input type="text" class="form__input" />
        </div>
        <div class="form__control">
          <label for="email">E-mail</label>
          <input type="email" class="form__input" />
        </div>
        <div class="form__control">
          <label for="password">Password</label>
          <input type="password" class="form__input" />
        </div>
      </form>

      <base-button class="mt-4"> Create Your Account </base-button>
      <p class="mt-3 fz-1 bd-bottom">
        By creating an account , you agree <a href="#">Conditions of Use</a> and
        <a href="#">Privacy Notice</a>
      </p>
      <p class="mt-3 fz-1">
        Already have an account ? <a href="/login">Sign In</a>
      </p>
    </base-card>
  </div>
</template>

<script>
export default {
  layout: "none",
};
</script>
