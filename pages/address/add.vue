<template>
  <div class="form-auto-0 mt-4">
    <form @submit.prevent="onAddAddress">
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
        <input type="text" class="form__input" v-model="fullName" />
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
        <input type="text" class="form__input" v-model="city" />
      </div>

      <div class="form__control">
        <label for="state"> State / Province / Region </label>
        <input type="text" class="form__input" v-model="state" />
      </div>

      <div class="form__control">
        <label for="zipCode"> Zip Code </label>
        <input type="text" class="form__input" v-model="zipCode" />
      </div>

      <div class="form__control">
        <label for="phoneNumber">Phone Number</label>
        <input type="text" class="form__input" v-model="phoneNumber" />
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
          placeholder="Provide details such an building description , a nearby landmark , or other navigation instructions."
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
          placeholder="1234"
          v-model="securityCode"
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
  async asyncData({ $axios }) {
    try {
      let res = await $axios.$get("/api/countries");

      return {
        countries: res.countries,
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
    async onAddAddress() {
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

        let response = await this.$axios.$post("/api/addresses", data);
        console.log(response);

        if (response.success) {
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.product__title {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 50%;
  }
}

.user {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;

  input {
    width: 90%;
  }

  &__img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .vue-star-rating-star {
    width: 2rem !important;
    height: 2rem !important;
  }
}

.loader {
  img {
    width: 4rem;
    height: 4rem;
  }
}

select {
  width: 100%;
}

.form__input {
  margin-top: 0.5rem;
}
</style>
