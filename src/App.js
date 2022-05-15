import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component{
  constructor(){
    super();
    // added the state
    this.state={
        products:[],
        loading: true
    }
    this.db=firebase.firestore();
  }

  componentDidMount(){
    //Getting the data from fireStore,chaining the methods
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     console.log(snapshot);

    //     //we will access the array of the docs,we will call doc.data to get the data from the doc
    //     snapshot.docs.map((doc)=>{
    //       console.log(doc.data());
    //     });
    //     //setState here,get the products,
    //     const products=snapshot.docs.map((doc)=>{
    //       //doc.data() give the data inside the document
    //       //define data and provide an id
    //         const data=doc.data();
    //         data['id']=doc.id;
    //         return data;
    //     })

    //     this.setState({
    //       products,
    //       loading:false
    //     })
    //   })

    this.db
      .collection('products')
      //callback will be fired when onSnapshot will be called
      .onSnapshot((snapshot)=>{
            console.log(snapshot);
            snapshot.docs.map((doc)=>{
             console.log(doc.data());
            });
            const products=snapshot.docs.map((doc)=>{
            const data=doc.data();
            data['id']=doc.id;
            return data;
            })
    
            this.setState({
              products,
              loading:false
            })
          })
  }
//function to handle the increse in quantity of the products and pass product as the parameter
handleIncreaseQuantity= (product) =>{
    console.log('hey please increse the quantity',product);
    //we need to get the products from array of products
    const{products}=this.state;
    //get the index of a particular product
    const index=products.indexOf(product);
    //increase the quanity in the firebase...
    // this.db will get our firestore from the collection,we want the doc which is product and get the ref of the product using the id
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty+1
      })
      .then(()=>{
        console.log('updated successfully')
      })
      .catch((error)=>{
        console.log('Error',error);
      })
    // products[index].qty+=1;
    // this.setState({
    //     products
    // })
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

addProduct=()=>{
  this.db
    .collection('products')
    .add({
        img: 'https://www.lg.com/in/images/washing-machines/md07540724/gallery/FHM1065SDL-Washing-Machines-Front-View-D-01.jpg',
        price: 900,
        qty:3,
        title: 'Washing Machine'
    })
    .then((docRef)=>{
        console.log('product has been added',docRef);
    })
    .catch((error)=>{
      console.log('Error',error);
    })
}
   render(){
     const {products,loading}=this.state;
      return (
       <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={ {padding: 10,fontSize:20} } >Add a product</button> */}
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          />
          {loading && <h1> Loading Products...</h1>}
          <div style={ {padding: 10, fontSize:20} }>TOTAL: {this.getCartTotal()} </div>
       </div>
      );
   }
}

export default App;
