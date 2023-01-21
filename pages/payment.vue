<template>
  <div class="form-auto-0">
    <div class="broadcast">
      <ul class="broadcast__list">
        <li class="broadcast__item">
          <a href="">Your Cart</a>
        </li>
        >
        <li class="broadcast__item">
          <a href="">Place Order</a>
        </li>
        >
        <li class="broadcast__item">
          <a href=""><b>Payment</b></a>
        </li>
      </ul>
    </div>

    <h1 class="mt-2"><b>Make a payment</b></h1>
    <p>your total price is $9999</p>
    <p class="bd-bottom">Error</p>

    <form class="mt-2">
      <div ref="card"></div>
    </form>

    <p class="fz-1 mt-2">
      Make sure your address is correct <br />
      if the address contains types or other errors , your package may be
      unavailable.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      stripe: null,
      card: null,
    };
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51MSgCbHMOwXm0bDgUIdPePivr0PZcd9TFRb90ptXExjeJJncqFm4rCMSpUJurqvb5SL2xHboPTxKzVF86ZJEbxzA00d94rUVT4"
    );
    let elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount(this.$refs.card);
  },
};
</script>

<style>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
