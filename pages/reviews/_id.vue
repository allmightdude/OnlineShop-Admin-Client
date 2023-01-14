<template>
  <div class="profile mt-4">
    <h1>Create Review</h1>
    <div class="product__title">
      <img :src="product.photo" alt="" />
      <h2>{{ product.title }}</h2>
    </div>
    <div class="bd-bottom"></div>

    <form @submit.prevent="onAddReview">
      <h1>Overall Rating</h1>

      <template>
        <no-ssr placeholder="loading...">
          <star-rating :star-size="20" v-model="rating"></star-rating>
        </no-ssr>
      </template>
      <div class="form__control">
        <h1><b>Add photo or video</b></h1>
        <p class="mt-2 fz-1">
          Shoppers find and videos helpful than text alone.
        </p>

        <div class="image-upload">
          <label for="file-input">
            <i class="fa fa-plus"></i>
          </label>

          <input id="file-input" type="file" @change="onFileSelected" />
          <p>{{ fileName }}</p>
        </div>

        <div class="bd-bottom"></div>
      </div>

      <div class="form__control">
        <label for="headline">
          <h2>Add a Headline</h2>
        </label>
        <input
          class="form__input"
          placeholder="Whats's meat important to Know?"
          v-model="headline"
        />
      </div>

      <div class="form__control">
        <label for="headline">
          <h2>Write your review</h2>
        </label>
        <textarea
          v-model="body"
          class="form__input"
          placeholder="What do you like or dislike ? What did you see this product for?"
        />
      </div>

      <div class="bd-bottom"></div>

      <p>This is how you'll appear to other customers:</p>
      <div class="user">
        <div class="user__img">
          <img src="/img/avatar.png" alt="" />
        </div>
        <input type="text" :value="$auth.state.user.name" />
      </div>

      <p class="mt-2 fz-1">
        Don't worry , you can always change this on your profile.
      </p>

      <base-button v-if="!isLoading" type="submit" class="mt-4">
        Submit
      </base-button>
      <div class="loader" v-else>
        <img src="/img/loader.gif" alt="" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let res = await $axios.$get(`/api/products/${params.id}`);
    return {
      product: res.product,
    };
  },

  data() {
    return {
      rating: 0,
      body: "",
      headline: "",
      selectedFile: null,
      fileName: "",

      isLoading: false,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },

    async onAddReview() {
      this.isLoading = true;
      try {
        let data = new FormData();

        data.append("headline", this.headline);
        data.append("body", this.body);
        data.append("rating", this.rating);
        data.append("photo", this.selectedFile);

        let response = await this.$axios.$post(
          `/api/reviews/${this.$route.params.id}`,
          data
        );

        if(response.success){
          this.$router.replace(`/products/${this.$route.params.id}`)
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
  components: {
    StarRating: () => (process.browser ? import("vue-star-rating") : null),
  },
};
</script>

<style lang="scss">
.profile {
  max-width: 60rem;
  margin: 3rem auto;
  padding: 1rem;
}

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
</style>
