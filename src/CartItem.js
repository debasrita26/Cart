import React from 'react';

//CartItem is the class component and we are inheriting from Components class using the extends keyword
class CartItem extends React.Component{

    // testing(){
    //     //promise used to stimulate an API call
    //     const promise=new Promise((resolve,reject)=>{
    //         //this function will be called after 5secs
    //         setTimeout(()=>{
    //             resolve('done')
    //         },5000)
    //     })

    //     promise.then(()=>{
    //         //setState acts like a synchronous call
    //         // this.setState({qty:100});
    //         console.log('state',this.state);
    //     });
    // }
    //function to increse the quantity in the cart
    increaseQuantity=() =>{
        
        //this.state.qty+=1;
        // console.log('this.state',this.state);
        //setState form 1
        // this.setState({
        //     qty: this.state.qty+3
        // });
        this.setState((prevState)=>{
            return{
                qty: prevState.qty+1
            }
        });
    }
    decreaseQuantity=() =>{
        //we will take the quantity from the this.state
        const{qty}=this.state;
        //qty is 0 then we will return
        if(qty==0){
        return;
        }
        this.setState((prevState)=>{
            return{
                qty: prevState.qty-1
            }
        });
    }
    render(){
        console.log('this.props',this.props);
        //object destructuring
        const {price,title,qty}=this.props.product;
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
                            onClick={()=> this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
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