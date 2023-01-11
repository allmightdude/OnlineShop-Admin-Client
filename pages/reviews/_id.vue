<template>
  <div class="profile mt-4">
    <h1>Create Review</h1>
    <div class="product__title">
      <img src="/img/amazonImg.jpg" alt="" />
      <h2>Product Title</h2>
    </div>
    <div class="bd-bottom"></div>
    <h1>Overall Rating</h1>

    <form @submit.prevent="onUpdate">
      <div class="form__control">
        <h1><b>Add photo or video</b></h1>
        <p class="mt-2 fz-1">Shoppers find and videos helpful than text alone.</p>

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
        />
      </div>

      <div class="form__control">
        <label for="headline">
          <h2>Write your review</h2>
        </label>
        <textarea
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
        <input type="text" />
      </div>

      <p class="mt-2 fz-1">Don't worry , you can always change this on your profile.</p>

      <base-button type="submit" class="mt-4"> Submit </base-button>

    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  margin: 1rem 0 ;

  input{
    width: 90%;
  }

  &__img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;
    }
  }
}
</style>
