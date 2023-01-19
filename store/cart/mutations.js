export default {
    addToCart(state , product){
        const cartProduct = state.cart.find(prd => prd._id === product._id);

        if(!cartProduct){
            product.quantity =  1;
            state.cart.push(product)
        }else{
            cartProduct.quantity++;
            let indexOfProduct = state.cart.indexOf(cartProduct);
            state.cart.splice(indexOfProduct , 1 , cartProduct)
        }
    },
    changeQuantity(state , payload){
        const cartProduct = state.cart.find(prd => prd._id === payload.product._id);
        cartProduct.quantity = payload.qty;
        
        let indexOfProduct = state.cart.indexOf(cartProduct);
        state.cart.splice(indexOfProduct , 1 , cartProduct)
    }
}