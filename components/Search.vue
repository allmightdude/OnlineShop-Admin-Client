<template>
  <div class="search">
    <input v-model="searchValue" type="text" class="search__input" placeholder="Search your favorite product" />
    <button @click="onSearch"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue : ""
    }
  },

  methods: {
    async onSearch(){
      let res = await this.$axios.$get(`/api/search?title=${this.searchValue}`);
      console.log(res.filterdProducts);
      if(res.success){
        this.$store.commit('cart/setFilter' , res.filterdProducts)
        this.$router.push('/search');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  width: 50rem;
  max-width: 50rem;
  margin: 0 auto;
  display: flex;

  &__input{
    border: none;
    flex: 1;
    padding: 0 1rem;
  }

  button{
    width: 4rem;
    height: 100%;
    background-color: $color-primary-2;
    border: none;
    color: white;
    padding: 1rem;
  }
}
</style>
