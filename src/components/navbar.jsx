import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartItemsCount, isLogged, categoryRef }) => {
  const navigate = useNavigate();
  const categoryRefScroll = () => {
    navigate("/");
    setTimeout(() => {
      categoryRef.current?.scrollIntoView({behavior: "smooth"});
    }, 300);
  }
  return (
    <nav>
      <div className="nav-cont-1">
        <h2 className="nav-h2" onClick={() => navigate('/')}>
          e3<span style={{ fontWeight: "400" }}>stor</span>
        </h2>
        <ul className="nav-ul">
          <Link to='/product'>Products</Link>
          <span onClick={categoryRefScroll } className="about-span">Shop</span>
          <Link to='/about'>About</Link>
        </ul>
      </div>

      <div className="nav-cont-2">
        {!isLogged && <button className="login-nav" onClick={() => navigate('/login')}>Login</button>}
        <AiOutlineSearch size={25} />
        <Link to={'/cart'} className="cart-icon-cont">
          <span className="nav-cart-count">{cartItemsCount}</span>
          <HiShoppingCart
            size={25}
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              marginBottom: "-5px",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
