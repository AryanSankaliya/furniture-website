import React, { useContext, useEffect } from "react";
import "./CartSidebar.css";
import { CartContext } from "../CartContext/CartProvider";
import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function CartSidebar({ isOpen, onClose }) {
  const { cartItems = [], removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty , 0);

  useEffect(() => {
    document.body.classList.add("sidebar-overlay");
    return () => {
      document.body.classList.remove("sidebar-overlay");
    };
  }, [isOpen]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Shopping Cart</h2>
        <button className="sidebar-close-btn" onClick={onClose}>
          <CiShoppingBasket />
        </button>
      </div>

      <div className="sidebar-body">
        {cartItems.length === 0 ? (
          <p className="sidebar-empty-msg">No items in your cart</p>
        ) : (
          cartItems.map((item) => (
            <div className="sidebar-item" key={item.id}>
              <img
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : "https://via.placeholder.com/100"
                }
                alt={item.title}
                className="sidebar-item-img"
              />

              <div className="sidebar-item-info">
                <h4>{item.title}</h4>
                <p>{item.qty} × Rs. {item.price}</p>
              </div>

              <button
                className="sidebar-remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <AiOutlineClose />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="sidebar-footer">
        <span className="left">Subtotal:</span>
        <span className="right">Rs. {subtotal}.00</span>
      </div>
    </div>
  );
}

export default CartSidebar;
