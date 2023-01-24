<template>
  <div class="products mt-3">
    <product-item
      v-for="product in products"
      :key="product._id"
      :prd="product"
    ></product-item>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>
