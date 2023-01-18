<template>
  <main class="main">
    <div class="basket">
      <h3><b>Shopping Cart</b></h3>
      <div class="cart mt-3">
        <div class="cart__item bd-bottom bd-top">
          <h3 class="product__title">
            <a href="#">Product-title</a>
            <span class="fz-1">by ProductOwner</span>
          </h3>
          <span>PaperBack</span>
          <div class="stochQuantity fz-1">In Stock</div>
          <div class="form__control">
            <label for="" class="fz-1">This order contains to gift</label>
            <input type="checkbox" />
          </div>

          <div class="mt-2">
            <input type="number" /> | <a href="#" class="fz-1">Delete</a>
          </div>
        </div>
        
        <div class="cart__item bd-bottom">
          <h3 class="product__title">
            <a href="#">Product-title</a>
            <span class="fz-1">by ProductOwner</span>
          </h3>
          <span>PaperBack</span>
          <div class="stochQuantity fz-1">In Stock</div>
          <div class="form__control">
            <label for="" class="fz-1">This order contains to gift</label>
            <input type="checkbox" />
          </div>

          <div class="mt-2">
            <input type="number" /> | <a href="#" class="fz-1">Delete</a>
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
      <base-card class="subTotal">
        <h3>
          SubTotal <i class="fz-2">(2 items) : </i>
          <span class="total-price">$99</span>
        </h3>
        <div class="form__control">
          <label for="">This order contains to gift</label>
          <input type="checkbox" />
        </div>
        <base-button class="mt-3">Process to checkout</base-button>
      </base-card>

      <base-card class="mt-4">
        <h2>You recently views items</h2>
        <div class="views">
          <div class="views__item">
            <div class="views__img">
              <img src="/img/amazonImg.jpg" alt="" />
            </div>
            <div>
              <h4 class="views__title">
                <a href="#">The everything store...</a>
              </h4>
              <div class="views__author fz-1"><a href="#">> brad knoh</a></div>
              <div class="views__stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

                <a href="#" class="fz-1">100</a>
              </div>

              <div class="views__edition fz-1">Edition</div>
              <div class="views__actions mt-3">
                <base-button mode="grey">See all buying options</base-button>
              </div>
            </div>
          </div>
        </div>
      </base-card>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 3rem;
  display: flex;
  justify-content: space-around;
}

.aside {
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  flex: 0 0 30%;
}

.basket {
  flex: 0 0 55%;
}

.form__control {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;

  label {
    margin-left: 1rem;
  }
}

.subTotal {
  width: 100%;
}

.total-price {
  color: rgb(226, 25, 25);
}

.views {
  padding-top: 1rem;
  &__item {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    margin-top: 2rem;
  }

  &__img {
    width: 8rem;
    height: 12rem;
  }

  &__actions {
    flex: 0 0 100%;
  }
}

.fa-star {
  color: rgb(255, 235, 56);
}

.stochQuantity {
  color: rgb(52, 194, 52);
}

input[type="number"] {
  width: 5rem;
}
</style>
