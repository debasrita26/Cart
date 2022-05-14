import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        // added the state
        this.state={
            products:[
            {
                price:999,
                title: 'Watch',
                qty:1,
                img:'',
                id:1
            },
            {
                price:10000,
                title: 'Mobile Phone',
                qty:10,
                img:'',
                id:2
            },
            {
                price:40000,
                title: 'Laptop',
                qty:5,
                img:'',
                id:3 
            }
        ]
    }
    
    }
    //function to handle the increse in quantity of the products and pass product as the parameter
    handleIncreaseQuantity= (product) =>{
        console.log('hey please increse the quantity',product);
        //we need to get the products from array of products
        const{products}=this.state;
        //get the index of a particular product
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity= (product) =>{
        console.log('hey please increse the quantity',product);
        //we need to get the products from array of products
        const{products}=this.state;
        //get the index of a particular product
        const index=products.indexOf(product);

        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }
    handleDeleteProduct=(id)=>{
        const{products}=this.state;
        // return another array and the arry will contain products whose id will not be the id at its past
        const items=products.filter((item)=>item.id!==id)
        this.setState({
            products:items
        })
    }
        // this.testing();
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    render(){
        // we can map over this array and use the CartItem component and pass this data as props
        const {products}=this.state;
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
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                    )
                })}
            </div>
        )
    }
    
}


export default Cart; 