<template>
  <div class="form-auto-0 mt-4">
    <form @submit.prevent="onUpdateAddress">
      <h1>Add a new address</h1>
      <p class="fz-1">
        or pick up your packages at your convenience from our self-service
        locations. To add an Amazon pickup Point or Locker , click
        <a href="">here.</a>
      </p>

      <div class="bd-bottom"></div>

      <div class="form__control">
        <label for="headline"> Country/Region </label>
        <select v-model="country">
          <option
            v-for="country in countries"
            :key="country.code"
            :value="country.name"
          >
            {{ country.name }}
          </option>
        </select>
      </div>

      <div class="form__control">
        <label for="fullname"> Full Name </label>
        <input
          type="text"
          class="form__input"
          v-model="fullName"
          :placeholder="address.fullName"
        />
      </div>

      <div class="form__control">
        <label for="streetAddress"> Street Address </label>
        <input
          type="text"
          class="form__input"
          placeholder="Street and number, P.O box , cio"
          v-model="streetAddress1"
        />
        <input
          type="text"
          class="form__input"
          placeholder="Aparatment suite, unit , building , floor , etc."
          v-model="streetAddress2"
        />
      </div>

      <div class="form__control">
        <label for="city"> City </label>
        <input
          type="text"
          class="form__input"
          v-model="city"
          :placeholder="address.city"
        />
      </div>

      <div class="form__control">
        <label for="state"> State / Province / Region </label>
        <input
          type="text"
          class="form__input"
          v-model="state"
          :placeholder="address.state"
        />
      </div>

      <div class="form__control">
        <label for="zipCode"> Zip Code </label>
        <input
          type="text"
          class="form__input"
          v-model="zipCode"
          :placeholder="address.zipCode"
        />
      </div>

      <div class="form__control">
        <label for="phoneNumber">Phone Number</label>
        <input
          type="text"
          class="form__input"
          v-model="phoneNumber"
          :placeholder="address.phoneNumber"
        />
        <a href="#" class="fz-1">Maybe used to assist delivery</a>
      </div>

      <div class="bd-bottom"></div>

      <h1>Add delivery instructions</h1>

      <div class="form__control">
        <label for="deliverInstructions"
          >Do your need addiotional instructions to find this address ?
        </label>
        <textarea
          v-model="deliverInstructions"
          class="form__input"
          :placeholder="address.city"
        />
      </div>

      <div class="form__control">
        <label for="securityCode"
          >Do you need a security code or a call box number to access this
          building ?</label
        >
        <input
          type="text"
          class="form__input"
          v-model="securityCode"
          :placeholder="address.securityCode"
        />
      </div>

      <base-button type="submit" class="mt-4"> Submit </base-button>
      <div class="loader">
        <img src="/img/loader.gif" alt="" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let countries = await $axios.$get("/api/countries");
      let address = await $axios.$get(`/api/addresses/${params.id}`);

      const [countriesRes, addressRes] = await Promise.all([
        countries.countries,
        address.address,
      ]);
      return {
        countries: countriesRes,
        address: addressRes,
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      country: "",
      fullName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      deliverInstructions: "",
      securityCode: "",
    };
  },

  methods: {
    async onUpdateAddress() {
      try {
        let data = {
          country: this.country,
          fullName: this.fullName,
          streetAddress: this.streetAddress1 + " " + this.streetAddress2,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          phoneNumber: this.phoneNumber,
          deliverInstructions: this.deliverInstructions,
          securityCode: this.securityCode,
        };
        let res = await this.$axios.$put(`/api/addresses/${this.$route.params.id}`, data);

        if(res.success){
          this.$router.push('/address');
        }
      } catch (error) {}
    },
  },
};
</script>
