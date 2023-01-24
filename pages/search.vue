<template>
  <main class="form-auto-0">
    <div class="broadcast">
      <ul class="broadcast__list">
        <li class="broadcast__item">
          <a href="">Category</a>
        </li>
        >
        <li class="broadcast__item">
          <a href=""><b>Search Page</b></a>
        </li>
      </ul>
    </div>

    <div v-if="products">
      <product-item
        v-for="product in products"
        :key="product._id"
        :prd="product"
      ></product-item>
    </div>
    <base-card v-else>Product not Found!</base-card>
  </main>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters["cart/getFilterProducts"];
    },
  },
};
</script>
