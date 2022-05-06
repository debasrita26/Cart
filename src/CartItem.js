import React from 'react';

//CartItem is the class component and we are inheriting from Components class using the extends keyword
class CartItem extends React.Component{
    render(){
        //this will return some JsX which will basically describe the UI for that component
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    {/* we will pass the styles object and . property */}
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ {fontSize:25} }>Phone</div>
                    <div style={ {color: '#777'} }>Rs 999</div>
                    <div style={ {color: '#777'} }>Qty: 1</div>
                    <div className='cart-item-actions'>
                        { /* Buttons */}
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
        width:110,
        //here we have to use camelCase
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;