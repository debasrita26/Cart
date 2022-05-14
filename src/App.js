import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  constructor(){
    super();
    // added the state
    this.state={
        products:[
        {
            price:999,
            title: 'Watch',
            qty:1,
            img:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            id:1
        },
        {
            price:10000,
            title: 'Mobile Phone',
            qty:10,
            img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            id:2
        },
        {
            price:40000,
            title: 'Laptop',
            qty:5,
            img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
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
getCartCount=()=>{
  //we will take product from this.state and 
  //then iterate over each rpoduct and take the count
  const{products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count += product.qty;
  })
  return count;
}

getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;

  products.map((product)=>{
    cartTotal = cartTotal+product.qty*product.price
  })
  return cartTotal;
}

   render(){
     const {products}=this.state;
      return (
       <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={ {padding: 10, fontSize:20} }>TOTAL: {this.getCartTotal()} </div>
       </div>
      );
   }
}

export default App;
