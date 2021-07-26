import React from 'react';
import CartItem from './CartItem';

const Cart =(props)=>{

        const {
               products,
               onIncreaseQuantity,
               onDecreaseQuantity,
               onDeleteProduct
        }=props;
        return(
            <div className="cart">

                {products.map((product)=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={onIncreaseQuantity}
                    onDecreaseQuantity={onDecreaseQuantity}
                    onDeleteProduct={onDeleteProduct}
                    
                    // func={()=>console.log("hello")}
                    // isLoggedIn={false}
                    // jsx={<h1>Hello</h1>}
                    // comp={<CartItem/>}
                    />
                    )
                    
                    
                })}

                
            </div>
        );
   
}

export default Cart;