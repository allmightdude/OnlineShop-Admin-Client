export default {
    addToCart(state , product){
        const cartProduct = state.cart.find(prd => prd._id === product._id);

        if(!cartProduct){
            product.qunatity =  1;
            state.cart.push(product)
        }else{
            product.qunatity++;
            let indexOfProduct = state.cart.indexOf(product);
            state.cart.splice(indexOfProduct , 1 , product)
        }
    }
}