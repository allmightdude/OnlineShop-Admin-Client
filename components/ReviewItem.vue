<template>
  <div class="review">
    <div class="review__profile">
      <div class="review__img">
        <img src="/img/amazonImg.jpg" alt="" />
      </div>
      <div class="review__name">{{ review.user.name }}</div>
    </div>

    <div class="review__info">
      <div class="review__stars" v-if="review.rating > 0">
        <i class="fa fa-star" v-for="rate in review.rating" :key="rate"></i>
      </div>
      <div v-else class="fz-1">no rate....</div>
      <div class="review__hedline">{{review.headline}}</div>
    </div>
    <div class="review__date fz-1">June 28 , 2016</div>
    <div class="review__format fz-1">
      Format , Hardcover | <a href="">Verified Purchese</a>
    </div>

    <div class="review__body fz-2 mt-2">{{ review.body }}</div>

    <div class="review__helpful fz-1 mt-2">60 People found this helpful</div>

    <base-button class="mt-2" mode="grey">Helpful</base-button>
  </div>
</template>

<script>
export default {
  props: ["review"],
};
</script>

<style lang="scss" scoped>
.review {
  margin-top: 4rem;
  &__img {
    width: 5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}

.fa-star{
    color: #F1C40F;
}
</style>
