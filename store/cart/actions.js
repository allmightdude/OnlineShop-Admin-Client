export default {
  addToCart(context, payload) {
    context.commit("addToCart", payload.product);
  },
  changeQuantity(context, payload) {
    context.commit("changeQuantity", payload);
  },
};
