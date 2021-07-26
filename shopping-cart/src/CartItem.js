import React from 'react';

const CartItem = (props) => {

        console.log("props",props);
        const {price,title,qty}=props.product//this.state;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return (
            <div className="cart-item">
                {/* {this.props.jsx} */}
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}> {title} </div>
                    <div style={{color:'#777'}}> Rs {price} </div>
                    <div style={{color:"#777"}}> Quantity {qty} </div>
                    <div className="cart-item-actions">

                            <img 
                                alt="increase" 
                                className="action-icons" 
                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plus-2270055-1926799.png"
                                onClick={()=>onIncreaseQuantity(product)}
                            />

                            <img 
                                alt="decrease" 
                                className="action-icons" 
                                src="https://icons-for-free.com/iconfiles/png/512/minus-131964784904142604.png"
                                onClick={()=>onDecreaseQuantity(product)}
                            />

                            <img 
                                alt="delete" 
                                className="action-icons" 
                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1554759-1368230.png"
                                onClick={()=>onDeleteProduct(product.id)}
                            />
                    </div>
                </div>
            </div>
        );
    
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    },
};

export default CartItem;