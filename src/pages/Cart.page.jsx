

const Cart = ({ _cartItems }) => {
    return (
        <div className="cart-count">
            <div className="cart-wrapper">
                {_cartItems.cartItems.length > 0 ? _cartItems.map((item) => {
                    return <div className="cart-list-cont" key={item.id}>
                        <img src={item.img} alt={item.productName} />
                        <div className="cart-text">
                            <button className="free-shipping">Free Shipping</button>
                            <h2 className="cart-item-h2">{item.productName}</h2>
                            <h3 className="cart-item h3">${item.price.toFixed(2)}</h3>
                            <h1 className="cart-item-h1">${item.price*1.2}</h1>
                            <h4 className="cart-item-h4">{item.description.length > 200 ? `${item.description.subString(0, 200)}...` : item.description}</h4>
                        </div>
                    </div>
                }) : <h1>Cart is empty! add some items (: </h1>}
            </div>
        </div>
    )
    
};

export default Cart;