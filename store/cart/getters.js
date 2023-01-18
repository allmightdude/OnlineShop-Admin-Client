export default {
  cartLength(state) {
    return state.cart.reduce((sum, product) => {
      return (sum += product.quantity);
    }, 0);
  },
};
