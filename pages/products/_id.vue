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

    <div class="product bd-bottom">
      <div class="product__img">
        <div class="product__img mt-3">
          <img :src="product.photo" alt="" />
        </div>

        <div class="product__follow">
          <div class="product__follow-img">
            <img :src="product.ownerID.photo" width="" />
          </div>
          <h4 class="product__follow-name fz-1">{{ product.ownerID.name }}</h4>

          <base-button mode="grey"> + Follow </base-button>
        </div>
      </div>

      <div class="product__detail">
        <div class="product__title">
          <h1>{{ product.title }}</h1>
          <span>Paperback</span>
        </div>

        <div class="product__rate">
          <client-only>
            <star-rating
              :rating="product.averageRating"
              :show-rating="false"
              :glow="2"
              :border-width="1"
              :rounded-corners="true"
              :read-only="true"
              :star-size="18"
            ></star-rating>
          </client-only>
        </div>

        <div class="product__author bd-bottom fz-1">
          by
          <a href="" class="product__link">{{ product.ownerID.name }}</a>
          (Author)
        </div>

        <div class="see-all">
          > <a href="" class="fz-1"> see all 10 formats and editions</a>
        </div>

        <ul class="product__kind">
          <li class="product__kind-item">
            <div>
              Kindle <br />
              -
            </div>
            <span class="fz-1"><a href="#">Read with Our</a> Free App</span>
          </li>

          <li class="product__kind-item">
            <div>
              Audioble <br />
              -
            </div>
            <span class="fz-1"
              >Free App <a href="#">with your Audible Trial</a></span
            >
          </li>

          <li class="product__kind-item">
            <div>
              Playback <br />
              -
            </div>
            <span class="fz-1">Read with Our Free App</span>
          </li>
        </ul>

        <div class="product__description bd-bottom fz-2">
          {{ product.description }}
        </div>

        <div class="fz-1">length : <a href="#">106 Pages</a></div>
      </div>

      <base-card>
        <div class="product__buy">
          <input
            type="number"
            min="1"
            max="10"
            :value="qty"
            @change="onChangeQuantity"
          />
          <div class="product__price">${{ product.price }}</div>

          <h4 class="product__stock mt-3">In Stock</h4>
          <p class="fz-1">Ships from and sold by Amazon.com</p>

          <div class="actions mt-4">
            <base-button @click.native="addToCart(product)"
              >Add to Card</base-button
            >
            <base-button mode="grey">Buy Now!</base-button>
          </div>

          <div class="product__buy-des fz-1 mt-3 bd-bottom">
            This item ships to California Get it by Monday. Sep 23 - Monday
            ,Sept. 30 Choose this date at checkout.
          </div>

          <div class="product__deliver fz-1 bd-bottom">
            <a href="#"> Deliver to California </a>
          </div>
        </div>
      </base-card>
    </div>

    <div class="more mt-3">
      <h2>More about the author</h2>
      <div class="d-flex mt-3">
        <div class="author__img">
          <img :src="product.ownerID.photo" width="" />
          <base-button class="mt-2">Follow</base-button>
        </div>
        <div class="author__desc">
          <h4>Biography</h4>
          <p class="mt-2 fz-1">my name is Walter white</p>
        </div>
      </div>
    </div>

    <div class="bd-bottom"></div>

    <review-section :product="product" :reviews="reviews"></review-section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let singleProduct = await $axios.$get(`/api/products/${params.id}`);
      let manyReviews = await $axios.$get(`/api/reviews/${params.id}`);

      const [productResponse, reviewsresponse] = await Promise.all([
        singleProduct,
        manyReviews,
      ]);
      return {
        product: productResponse.product,
        reviews: reviewsresponse.reviews,
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      qty: 1,
    };
  },
  components: {
    StarRating: () => (process.browser ? import("vue-star-rating") : null),
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch("cart/addToCart", { product: product  , qty : parseInt(this.qty)});
    },

    onChangeQuantity(event) {
      this.qty = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;

  &__title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__detail {
    flex: 0 0 60%;
    padding: 0 6rem;
  }

  &__img {
    width: 25rem;
  }

  &__follow {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
    border-top: 1px solid rgb(231, 227, 227);
    padding: 1rem 0;

    &-img {
      width: 4rem;
      height: 4rem;

      img {
        border-radius: 50%;
      }
    }
  }

  &__kind {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    &-item {
      flex: 0 0 23.333%;
      div {
        border: 1px solid #2c3e50;
        padding: 1.5rem;
        font-size: 1.2rem;
        border-radius: 2px;
      }

      span {
        width: 60%;
        display: block;
      }
    }
  }

  &__buy {
    &-des {
      padding: 1rem 1rem 2rem 0;
    }
  }

  input[type="number"] {
    width: 5rem;
    text-align: center;
  }
  &__price {
    float: right;
    color: rgb(224, 55, 55);
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author__img {
  width: 20rem;
  img {
    width: 100%;
  }

  button {
    width: 100%;
  }
}

.author__desc {
  align-self: start;
}
</style>
