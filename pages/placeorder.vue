<template>
  <main class="main">
    <div class="basket bd-bottom">
      <h3 class="bd-bottom"><b>Review your order</b></h3>

      <div class="box d-flex jc-sw">
        <div class="box__item fz-1">
          <h5>
            <b>Shipping address</b><a href="#" class="fz-1 pd-1">Change</a>
          </h5>
          <p>{{ $auth.user.address.fullName }}</p>
          <p>{{ $auth.user.address.streetAddress }}</p>
          <p>{{ $auth.user.address.city }}</p>
          <p>{{ $auth.user.address.country }}</p>
          <p>Phone : {{ $auth.user.address.phoneNumber }}</p>
        </div>

        <div class="box__item">
          <h5>
            <b>SPayment Method</b><a href="#" class="fz-1 pd-1">Change</a>
          </h5>
          <div><span class="visa fz-1">VISA</span> ending in 6397</div>

          <h5 class="mt-3">
            <b>Billing Address</b><a href="#" class="fz-1 pd-1">Change</a>
          </h5>
          <p>Same as shipping address</p>
        </div>

        <div class="box__item">
          <h5>
            <b>SPayment Method</b><a href="#" class="fz-1 pd-1">Change</a>
          </h5>
          <div class="d-flex">
            <form action="">
              <input type="text" class="form__control" />
              <base-button mode="grey" class="mt-1">Apply</base-button>
            </form>
          </div>
        </div>
      </div>

      <div class="box d-flex jc-sw">
        <div class="box__item fz-1">
          <h4>Estimated Delivery : {{ estimatedDelivery }}</h4>
          <div class="cart mt-3 bd-top">
            <div
              class="cart__item bd-bottom d-flex gap-sm ai-c"
              v-for="item in cart"
              :key="item._id"
            >
              <div class="product__img"><img :src="item.photo" alt="" /></div>
              <div>
                <h3 class="product__title">
                  <a href="#">{{ item.title }}</a>
                  <span class="fz-1">by {{ item.ownerID.name }}</span>
                </h3>

                <span>PaperBack</span>
                <div class="product__price">
                  ${{ item.price * item.quantity }}
                </div>
                <div class="stochQuantity fz-1">In Stock</div>
                <div class="mt-2">
                  <span><b>Quantity :</b> {{ item.quantity }}</span>
                </div>

                <p class="fz-1">Sold by Amazon.com Services , Inc</p>

                <base-button mode="grey" size="sm-size">
                  <i class="fa fa-shopping-basket"></i>Add a gift
                  recept</base-button
                >
                <p class="fz-1">and see other gift options</p>
              </div>
            </div>
          </div>
        </div>

        <div class="box__item radio">
          <h5>
            <b>Choose a delivery option:</b>
          </h5>

          <div class="form__radio d-flex gap-sm mt-3">
            <input
              type="radio"
              name="order"
              @change="onChooseShipping('normal')"
            />
            <div>
              <p class="text-green"><b>Average 7 business days</b></p>
              <p>$13.98 - Shipping</p>
            </div>
          </div>

          <div class="form__radio d-flex mt-2 gap-sm">
            <input
              type="radio"
              name="order"
              @change="onChooseShipping('fast')"
            />
            <div>
              <p class="text-green"><b>Average 3 business days</b></p>
              <p>$49.98 - Shipping</p>
            </div>
          </div>
        </div>
      </div>

      <div class="inforamtion fz-1 mt-3">
        <p>
          Do you need help ? Explore our <a href="#">Help pages</a> or
          <a href="#">Contact Us</a>
        </p>
        <p>
          For and item sold by Amazno.com , when you click the "Place your
          oreder" button . we'll send you an email message recept of your order.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          accusantium dolore reprehenderit neque quas ex nam id nulla illo minus
          velit porro quisquam veniam eligendi, deserunt ab? Quas, voluptatem
          necessitatibus.
          <a href="#"
            >Important information regarding sales too you tax you may two in
            youe stane</a
          >
        </p>

        <p>
          <a href="">Go to the Amazon.com homepage </a> whitout completing your
          order.
        </p>
      </div>
    </div>

    <div class="aside">
      <base-card class="subTotal">
        <base-button class="mt-3">Place your order to USD</base-button>
        <p class="fz-1 text-center mt-2">
          By placing your order , you agree to Amazon's
          <a href="#">privacy and policy</a> and
          <a href="#">condition of use</a>
        </p>

        <div class="mt-2">
          <b>Amazon Currency Convertor is Enabled. <a href="">Learn More</a></b>
        </div>

        <div class="summury-page mt-3">
          <h5>Order Summury</h5>

          <div class="d-flex jc-sw fz-1 mt-2">
            <span>Items : </span>
            <span><b>USD ${{ cartTotalPrice }}</b> </span>
          </div>
          <div class="d-flex jc-sw fz-1 bd-bottom">
            <span>Shipping and handling : </span>
            <span><b>USD ${{ shipmentPrice }}</b></span>
          </div>

          <div class="d-flex jc-sw fz-1 mt-3">
            <span>Total before tax : </span>
            <span>USD 3000023</span>
          </div>

          <div class="d-flex jc-sw fz-1 bd-bottom">
            <span>Estimated tax to be collected : : </span>
            <span>USD 0.00</span>
          </div>

          <div class="oreder-total d-flex jc-sw mt-3">
            <span>Order Total</span>
            <span>USD ${{totalPriceWithShipping}}</span>
          </div>
        </div>
      </base-card>

      <base-card class="currency mt-4 fz-1">
        <div class="d-flex ai-c">
          <span><i class="fa fa-angle-down"></i></span>
          <a href="">Selected Payment Currency</a>
        </div>
        <div class="mt-3">
          <div class="f-flex">
            <input type="checkbox" />
            <label for="usd">USD</label>
          </div>
          <a href="" class="fz-1">(Change card currency)</a>
        </div>

        <a href="" class="mt-2 fz-1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          aliquam corporis! Veniam reiciendis voluptate, sed culpa natus vitae?
          Officia commodi itaque delectus praesentium quis fugiat maxime velit
          amet, mollitia optio.</a
        >
      </base-card>
    </div>

    <div class="footer text-center">
      <a href="">Condition of use</a> | <a href="#">Privacy Notice</a> |
      <p>@ 1996-2022|Amazo.com , Inc</p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    try {
      let res = await $axios.$post("/api/shipment", {
        shipment: "normal",
      });

      store.dispatch("cart/setShipment", {
        price: res.shipment.price,
        estimatedDelivery: res.shipment.estimated,
      });

      return {
        shipmentPrice: res.shipment.price,
        estimatedDelivery: res.shipment.estimated,
      };
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    cart() {
      return this.$store.getters["cart/getCart"];
    },
    cartTotalPrice() {
      return this.$store.getters["cart/cartTotalPrice"];
    },

    totalPriceWithShipping(){
      return this.$store.getters['cart/totalPriceWithShipping'];
    }
  },

  methods: {
    onChangeQuantity(event, product) {
      this.$store.dispatch("cart/changeQuantity", {
        qty: parseInt(event.target.value),
        product: product,
      });
    },
    removeProduct(product) {
      this.$store.dispatch("cart/removeProduct", product);
    },

    async onChooseShipping(shipment) {
      let res = await this.$axios.$post("/api/shipment", {
        shipment: shipment,
      });

      this.$store.dispatch("cart/setShipment", {
        price: res.shipment.price,
        estimatedDelivery: res.shipment.estimated,
      });

        this.shipmentPrice = res.shipment.price;
        this.estimatedDelivery = res.shipment.estimated;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
  width: 8rem;
}

.product__price {
  color: red;
  margin-left: auto;
  align-self: start;
}

.product__img {
  width: 12rem;
  height: 17rem;
}

.oreder-total {
  color: #c23616;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
}

.currency {
  background-color: #fafafa;
}

.box {
  border: 1px solid #ced6e0;
  margin-top: 2rem;
  font-size: 1.1rem;

  &__item {
    border-radius: 5px;
    padding: 2rem;
    margin-top: 2rem;
  }

  h4 {
    color: #ee5a24;
    font-weight: bold;
  }
}

.visa {
  padding: 0.2rem 0.5rem;
  background-color: #dfe4ea;
  border-radius: 4px;
  color: #0652dd;
  font-weight: bold;
}
.text-green {
  color: #009432;
}

.radio {
  margin: 0 auto;
}

.footer {
  flex: 0 0 100%;
  padding: 4rem 0;
  font-size: 1.1rem;
}

.product__price {
  margin: 0;
}

.radio {
  padding: 2rem;
  margin-top: 2rem;
}

.fa-shopping-basket {
  font-size: 1rem;
  margin-right: 0.5rem;
}
</style>
