import React from 'react';
import CartItem from './CartItem';

//we are getting the props from React and this props has these products and functions 
const Cart = (props) => {
        // we can map over this array and use the CartItem component and pass this data as props
        const {products}=props;
        return (
            <div className='cart'>
                {/* we can specify props by passing attributes */}
                {/* return the cart item and pass product as props instead of passing each and every field */}
                {products.map((product)=>{
                    // each product is given an id to differenciate
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}
                        />
                    )
                })}
            </div>
        )
}


export default Cart; 