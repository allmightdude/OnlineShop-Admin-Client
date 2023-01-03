<template>
  <div class="listpage">
    <!-- Main content -->
    <featured-product></featured-product>

    <main-result :products="products"></main-result>
  </div>
</template>

<script>
export default {
    async asyncData({$axios}) {
        try {
            let res = await $axios.$get('products');
            console.log(res.products);
            return{
              products : res.products
            }
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style lang="scss" scoped>
.listpage {
  margin: 0 auto;
  max-width: 90rem;
}

</style>
