<template>
  <div class="navbar">
    <div class="navbar__top">
      <div class="navbar__logo">
        <nuxt-link to="/">
          <img src="/img/logo.png" class="navbar__logo-img" />
        </nuxt-link>
      </div>

      <Search />
    </div>

    <nav class="nav">
      <div class="nav__deliver">
        <span v-if="$auth.user"
          >Deliver to <br />
          <i class="fa fa-map-marker" aria-hidden="true"></i>

          <b
            >{{ $auth.user.address.country }} , {{ $auth.user.address.city }}</b
          ></span
        >

        <span class="nav-cart-icon nav-sprite"></span>
      </div>

      <ul class="nav__menu">
        <li>
          <a href="">Browsing history</a> <i class="fa fa-angle-down"></i>
        </li>
        <li><a href="">Today's deals</a></li>
        <li><a href="">Your amazon.com</a></li>
        <li><a href="">Gift cards</a></li>
        <li><a href="">Gift cards</a></li>
        <li><a href="">Sell</a></li>
      </ul>

      <div class="nav__info">
        <div class="language"><span>En</span> <i class="fa fa-globe"></i></div>

        <template class="nav__account" v-if="$auth.state.loggedIn">
          <span>
            Hello
            <nuxt-link to="/profile">{{
              $auth.state.user.name
            }}</nuxt-link></span
          >
          <ul class="nav__account-list">
            <b>Account & List <i class="fa fa-angle-down"></i></b>
          </ul>
          <div class="nav__orders"><b>Orders</b></div>
          <div class="nav__orders">
            <nuxt-link to="/cart" class=" d-flex ai-c gap-xs">
              <i class="fa fa-cart-plus"></i><b>Cart</b>
              <span>{{ cartLength }}</span>
            </nuxt-link>
          </div>
        </template>

        <template class="nav__account" v-else>
          <nuxt-link to="/signup">Register</nuxt-link>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  components: {
    Search,
  },

  computed: {
    cartLength() {
      return this.$store.getters["cart/cartLength"];
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $color-primary-1;
  padding: 2rem;
  font-size: 1.2rem;

  &__top {
    width: 100%;
    display: flex;
  }

  &__logo {
    &-img {
      width: 7rem;
    }
  }
}

.nav {
  width: 100%;
  color: white;
  background: $color-primary-1;
  display: flex;
  align-items: center;
  padding-top: 1rem;

  &__info {
    display: flex;
    color: white;
    gap: 1.5rem;
    align-items: flex-end;
  }

  &__menu {
    display: flex;
    margin-right: auto;
    margin-left: 5rem;
    font-size: 1.3rem;

    li {
      padding: 1rem;
    }

    a {
      color: white;
    }
  }

  &__deliver {
    font-size: 1.1rem;
  }

  .language {
    display: flex;
    flex-direction: column;
  }
}
</style>
