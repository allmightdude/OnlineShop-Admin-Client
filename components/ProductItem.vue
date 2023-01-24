<template>
  <div class="products__item">
    <div class="products__tag">Best Seller</div>
    <div class="products__img">
      <nuxt-link :to="`/products/${prd._id}`">
        <img :src="prd.photo" alt="" />
      </nuxt-link>
    </div>

    <div class="products__detail">
      <h3 class="product__name">
        <nuxt-link class="products__link" :to="`/products/${prd._id}`">{{
          prd.title
        }}</nuxt-link>
      </h3>

      <div class="product__rating">
        <client-only> </client-only>
      </div>
      <span class="products__release fz-1">Sep 3 , 2019</span>
      <div>
        by
        <span class="product__author"
          ><a href="" class="products__link">{{ prd.ownerID.name }}</a></span
        >
      </div>

      <div class="fz-1">Ships to USA</div>

      <div class="product__rating">
        <client-only>
          <star-rating
            :rating="prd.averageRating"
            :show-rating="false"
            :glow="2"
            :border-width="1"
            :rounded-corners="true"
            :read-only="true"
            :star-size="18"
          ></star-rating>
        </client-only>
      </div>
      <div class="products__kind">
        <a href="" class="products__link">Hardcover</a>
      </div>

      <div class="products__price">
        <span class="products__price-off"
          ><b>${{ prd.price }}<sup>00</sup></b></span
        >

        <span class="products__price-main"><s>$26.00</s></span>
      </div>

      <span class="products__descrpition fz-1">Free with avalable trial</span>

      <hr />

      <div class="products__other fz-1">
        Other Formats : <a href="" class="products__link fz-1">Audio CD</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["prd"],
  components: {
    StarRating: () => (process.browser ? import("vue-star-rating") : null),
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 3rem 0;
  &__item {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 3rem;
  }

  &__img {
    width: 15rem;
    margin-right: 3rem;

    img {
      width: 100%;
    }
  }

  &__detail {

  }

  &__link {
    color: rgb(118, 191, 216);
  }

  &__tag {
    position: absolute;
    background-color: rgb(238, 161, 18);
    color: white;
    padding: 0.3rem 1.4rem;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
    top: -1rem;
    font-size: 1.1rem;
  }
}
</style>
