import React from 'react';
import Cart from './Cart';
import NavBar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

  constructor()
  {
      super();
      this.state={
          products:[],
          loading:true,
      }
      this.db=firebase.firestore();
  }


  componentDidMount(){
    this.db
    .collection('products')
    // .where('price','==',400)
    // .where('title','==','Bag') //nested queries
    .orderBy('price','desc') //sorting
    .onSnapshot((snapshot)=>{
      //console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })

      console.log(products);

      this.setState({
        products:products,
        loading:false
      })
    })

  }



  handleIncreaseQuantity=(product)=>{
      console.log("inc qty of ",product);
      // const {products}=this.state;
      // const index=products.indexOf(product);
      // products[index].qty+=1;

      // this.setState({
      //     products:products
      // })

      const docRef=this.db.collection('products').doc(product.id);

      docRef.update({
        qty:product.qty+1
      }).then(()=>{
        console.log("Updated the qty of product",docRef,"successfully");
      }).catch((err)=>{
        console.log("error in increasing qty",err);
      })



  }

  handleDecreaseQuantity=(product)=>{
      console.log("dec the qty of ",product);
      // const {products}=this.state;
      // const index=products.indexOf(product);
      if(product.qty>0)
      {
          const docRef=this.db.collection('products').doc(product.id);

          docRef.update({
            qty:product.qty-1
          }).then(()=>{
            console.log("Decrease the qty of ",docRef,"successfully");
          }).catch((err)=>{
            console.log("error in decreasing qty",err);
          })
      }
  }


  handleDeleteProduct=(id)=>{
      console.log("delete this product id",id);
      // const {products}=this.state;
      // const items=products.filter((item)=>item.id!==id);
      // this.setState({
      //     products:items
      // });
      const docRef=this.db.collection('products').doc(id);
      docRef.delete()
            .then(()=>{
              console.log("deleted product successfully");
            })
            .catch((err)=>{
              console.log("error in deleting product",err);
            })
  }


  getCount=()=>
  {
    const {products}=this.state;
    let totalQty=0;

    products.forEach((product)=>
    {
        totalQty+=product.qty;
    })

    return totalQty;
  }


  getTotal=()=>{
    const {products}=this.state;
    let totalPrice=0;

    products.forEach((product)=>{
      totalPrice+=product.qty*product.price;
    })

    return totalPrice;
  }

  addProduct=()=>{
    this.db
        .collection('products')
        .add({
          price:221098,
          title:"Washing Machine",
          img:"https://5.imimg.com/data5/UU/HT/RE/SELLER-32037076/1-500x500.jpg",
          qty:20
        }).then((docRef)=>{
          console.log("Product has been added",docRef);
        }).catch((err)=>{
          console.log("error in adding product",err);
        })

  }


  render()
  {
    const {products,loading}=this.state;
    return (
      <div className="App">
            <h1 style={{textAlign:"center"}}>
              Cart Display
            </h1>
            <NavBar count={this.getCount()}/>
            <button style={{padding:20,fontSize:20}} onClick={this.addProduct}>Add Product</button>
            < Cart 
              products={products}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
            {loading && <h1>Loading Products....</h1>}
            <div>Total Price : {this.getTotal()}</div>
      </div>
    );
  }
  
}

export default App;
