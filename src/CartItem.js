import React from 'react';

//CartItem is the class component and we are inheriting from Components class using the extends keyword
class CartItem extends React.Component{

    render(){
        console.log('this.props',this.props);
        //object destructuring
        const {price,title,qty}=this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props;
        //this will return some JsX which will basically describe the UI for that component
        return (
            <div className='cart-item'>
                {this.props.jsx}
                <div className='left-block'>
                    {/* we will pass the styles object and . property */}
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* we will give a camel case and pass a function */}
                        { /* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            // function will be called whenever user clicks on the button
                            onClick={()=> onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={()=> onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                            onClick={()=> onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

//to style an object is created
const styles= {
    //properties
    image:{
        height:110,
        width:111,
        //here we have to use camelCase
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem; 