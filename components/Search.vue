<template>
  <div class="search">
    <input type="text" class="search__input" placeholder="Search your favorite product" />
    <button><i class="fa fa-search"></i></button>
  </div>
</template>

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
