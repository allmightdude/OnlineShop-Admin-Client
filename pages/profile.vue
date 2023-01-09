<template>
  <div class="profile mt-4">
    <h1>Profile Page</h1>
    <form @submit.prevent="onLogin">
      <div class="form__control">
        <label for="name">Name</label>
        <input type="text" class="form__input" v-model="name" :placeholder="$auth.state.user.name" />
      </div>

      <div class="form__control">
        <label for="email">E-mail</label>
        <input type="email" class="form__input" v-model="email" :placeholder="$auth.state.user.email" />
      </div>

      <div class="form__control">
        <label for="password">Password</label>
        <input type="password" class="form__input" v-model="password" />
      </div>

        <base-button type="submit" class="mt-4">
          Update Profile
        </base-button>
    </form>
  </div>
</template>

<script>
export default {

};
</script>


<style lang="scss" scoped>
.profile{
    max-width: 30rem;
    margin: 3rem auto;
}
</style>