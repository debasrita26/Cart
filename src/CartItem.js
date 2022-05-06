import React from 'react';

//CartItem is the class component and we are inheriting from Components class using the extends keyword
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title: 'Mobile Phone',
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    //function to increse the quantity in the cart
    increaseQuantity=() =>{
        console.log('this.state',this.state);
    }
    render(){
        //object destructuring
        const {price,title,qty}=this.state;
        //this will return some JsX which will basically describe the UI for that component
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    {/* we will pass the styles object and . property */}
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ {fontSize:25} }>{this.state.title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* we will give a camel case and pass a function */}
                        { /* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1651838482~hmac=2fa4719c5dec208e192becf713e9d939" 
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