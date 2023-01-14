<template>
  <div class="reviewSection">
    <div class="reviewSection__left">
      <h2>1,510 customer reviews</h2>

      <div class="mt-2">4.5 out of 5 stars</div>

      <div class="process__holder">
        <div class="process">
          <div class="process__stars">5 star</div>

          <div class="process__bar">
            <div class="full"></div>
          </div>

          <div class="process__percent">4%</div>
        </div>
        <div class="process">
          <div class="process__stars">5 star</div>

          <div class="process__bar">
            <div class="full"></div>
          </div>

          <div class="process__percent">4%</div>
        </div>
        <div class="process">
          <div class="process__stars">5 star</div>

          <div class="process__bar">
            <div class="full"></div>
          </div>

          <div class="process__percent">4%</div>
        </div>
        <div class="process">
          <div class="process__stars">5 star</div>

          <div class="process__bar">
            <div class="full"></div>
          </div>

          <div class="process__percent">4%</div>
        </div>
        <div class="process">
          <div class="process__stars">5 star</div>

          <div class="process__bar">
            <div class="full"></div>
          </div>

          <div class="process__percent">4%</div>
        </div>
      </div>

      <div class="bd-bottom"></div>

      <h3 class="mt-3"><b>Review this product</b></h3>
      <p class="fz-1">Share your thoughts with pur customers</p>

      <div>
        <base-button mode="grey">Write a customer review</base-button>
      </div>
      <div class="bd-bottom"></div>
    </div>

    <div class="reviewSection__right">
      <div class="reviewSection__header">
        <h1>Reviews</h1>

        <a href="">See all customer images</a>

        <h2><b>Read Reviews that mention</b></h2>

        <div class="reviewSection__tags">
          <base-tag>jeff bezos</base-tag>
          <base-tag>everything store</base-tag>
          <base-tag>sam waltson</base-tag>
        </div>
      </div>
      <div class="reviewSection__body">
        <review-item></review-item>
        <review-item></review-item>
        <review-item></review-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviewSection {
  display: flex;
  margin-top: 2rem;
  gap: 4rem;
  flex-wrap: wrap;

  &__left {
    flex: 0 0 20%;
  }
  
  &__right {
    flex: 0 0 70%;
  }

  &__header {
    margin-top: 3rem;
  }

  &__body {
    margin-top: 4rem;
  }
}

.process {
  padding: 1rem 0;
  display: flex;
  font-size: 1.1rem;
  width: 100%;
  justify-content: space-between;
  color: #3498db;

  &__bar {
    width: 80%;
    background-color: rgb(240, 240, 240);
    position: relative;
    box-shadow: inset 0 0.1rem 0.1rem rgba(#000, 0.3);
    .full {
      position: absolute;
      background-color: orange;
      width: 80%;
      height: 100%;

      background: #ffb75e; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to bottom,
        #ffb75e,
        #ed8f03
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to bottom,
        #ffb75e,
        #ed8f03
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }
}
button {
  width: 100%;
  margin-top: 2rem;
}
</style>
