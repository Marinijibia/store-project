const Checkout = ({ user, cartItems }) => {
    return (
        <div>
            <h1>Checkout</h1>
            {user && cartItems ? <div className="cart-summary-cont">
                <h2>Total : ${cartItems.totalAmount.toFixed(2)}</h2>
                <h5>Shipping : $0</h5>
                <h5>Total Items : {cartItems.numberOfItems}</h5>
                <h5>
                    Shipping Address <span className="text-purple">{user.address.city} {user.address.street}</span>
                </h5>
                <h5>
                    Biller: {user.name.firstname} {user.name.lastname}
                </h5>
                <button onClick={() => {}} style={{alignSelf: "center", width: "100%"}}>Pay Now</button>
            </div> : <h1>No Items</h1>}
        </div>
    )
};


export default Checkout;