<template>
  <main class="pd-2">
    <div class="broadcast">
      <ul class="broadcast__list">
        <li class="broadcast__item">
          <a href="">Category</a>
        </li>
        >
        <li class="broadcast__item">
          <a href="">Product title</a>
        </li>
      </ul>
    </div>

    <h1>Your Addresses</h1>

    <p>{{ message }}</p>
    <div class="addresses">
      <nuxt-link to="/address/add" class="addresses__item">
        <h2><i class="fa fa-plus"></i></h2>
      </nuxt-link>
      <div
        class="addresses__item"
        v-for="(address, index) in addresses"
        :key="address._id"
      >
        <div class="addresses__fullname">
          <b>{{ address.fullName }}</b>
        </div>
        <div class="addresses__street">{{ address.streetAddress }}</div>
        <div class="addresses__address">
          {{ address.city }} , {{ address.state }} , {{ address.zipCode }}
        </div>
        <div class="addresses__country">{{ address.country }}</div>
        <div class="addresses__phoneNumber">
          Phone Number: {{ address.phoneNumber }}
        </div>

        <div class="actions mt-3">
          <a href="" class="fz-1">Edit</a> |
          <a href="#" class="fz-1" @click="onDeleteAddress(address._id, index)"
            >Delete</a
          >
          |
          <a href="#" class="fz-1" @click="onSetDefault(address._id)"
            >Set as Default</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let res = await $axios.$get("/api/addresses");

      return {
        addresses: res.addresses,
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      message: "",
    };
  },
  methods: {
    async onDeleteAddress(id, index) {
      try {
        let response = await this.$axios.$delete(`/api/addresses/${id}`);

        if (response.success) {
          this.message = response.message;
          console.log(id , index);
          this.addresses.splice(index, 1);
        }
      } catch (error) {
        this.message = error.message;
        console.log(error);
      }
    },
    async onSetDefault(id) {
      try {
        let res = await this.$axios.$put(`/api/addresses/set/default`, {
          id: id,
        });
        if (res.success) {
          this.message = res.message;
          this.$auth.fetchUser();
        }
      } catch (error) {
        this.message = error.message;
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.addresses {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;

  &__item:nth-child(1) {
    flex: 0 0 100%;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }

  &__item {
    padding: 3rem;
    flex: 0 0 25%;
    border: 1px dashed #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
