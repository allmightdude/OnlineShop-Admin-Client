export default {
  cartLength(state) {
    return state.cart.reduce((sum, product) => {
      return (sum += product.quantity);
    }, 0);
  },
  cartTotalPrice(state) {
    return state.cart.reduce((sum, product) => {
      return (sum += product.quantity * product.price);
    }, 0);
  },

  getCart(state) {
    return state.cart;
  },

  shipmentPrice(state) {
    return state.shipment.price;
  },
  estimatedDelivery(state) {
    return state.shipment.estimatedDelivery;
  },
};
