export default {
  addToCart(state, payload) {
    const cartProduct = state.cart.find((prd) => prd._id === payload.product._id);

    if (!cartProduct) {
      payload.product.quantity = payload.qty;
      state.cart.push(payload.product);
    } else {
      cartProduct.quantity += payload.qty;
      let indexOfProduct = state.cart.indexOf(cartProduct);
      state.cart.splice(indexOfProduct, 1, cartProduct);
    }
  },
  changeQuantity(state, payload) {
    const cartProduct = state.cart.find(
      (prd) => prd._id === payload.product._id
    );
    cartProduct.quantity = payload.qty;

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },

  removeProduct(state , product){
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct , 1);
  },

  setShipment(state , shipment){
    state.shipment = shipment;
    console.log(shipment);
  },
  
  clearCart(state){
    state.cart = [];
    state.shipment = {};
  },
  setFilter(state , products){
    state.filterdProducts = products
  }
};
