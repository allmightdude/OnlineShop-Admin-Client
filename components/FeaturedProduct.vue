<template>
  <div class="mainContent">
    <h1 class="mt-4">Books</h1>

    <p class="mt-2"> 
      Browse for more books
      <a href="">leaders of notable people</a>
      <a href=""
        >Fantasy books <br />
        like harry poters
      </a>
      <a href="">Best Fantasy books of year so far </a>
    </p>

    <div class="featuredProduct d-flex">
      <div class="featuredProduct__img">
        <img src="/img/amazonImg.jpg" alt="" />
      </div>

      <div class="featuredProduct__detail">
        <h2>The Program</h2>
        <h4>Inside the mind of the lenendory rowlong.</h4>
        <base-button class="addProduct" mode="orange">
          <span>order now</span>
        </base-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>


    .featuredProduct{
        margin-top: 3rem;
        background-color: rgb(238, 238, 238);
        padding:3rem;
        &__img{
            width: 25rem;

            img{
                width: 100%;
            }
        }

        &__detail{
            margin-left: 4rem;
            display: grid;
            grid-gap: 1rem;
            justify-items: start;
        }
    }

</style>