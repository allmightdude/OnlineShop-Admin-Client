export default {
  addToCart(context, payload) {
    console.log(payload);
    context.commit("addToCart", payload);
  },
  changeQuantity(context, payload) {
    context.commit("changeQuantity", payload);
  },
  removeProduct(context, product) {
    context.commit("removeProduct", product);
  },
  setShipment(context, payload) {
    context.commit("setShipment", payload);
  },
  clearCart(context) {
    context.commit("clearCart");
  },
};
