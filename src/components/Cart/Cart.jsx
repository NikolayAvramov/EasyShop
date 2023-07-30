import "./Cart.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CartProduct } from "./CartProduct/CartProduct";

export function Cart({ setOpenCart }) {
    return (
        <div className="overlay">
            <div
                className="backdrop"
                onClick={() => {
                    setOpenCart(false);
                }}
            ></div>
            <div className="modal">
                <div className="header">
                    <h3 className="cart-title">Cart</h3>
                    <AiOutlineCloseCircle
                        className="cart-close-btn"
                        onClick={() => {
                            setOpenCart(false);
                        }}
                    />
                </div>
                <div className="body">
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div>
                <div className="footer">
                    <div className="footer-total-price">
                        <h3 className="footer-title">Total Price</h3>
                        <p className="show-total-price">2343$</p>
                    </div>
                    <div className="discount">
                        <input
                            type="text"
                            placeholder="Discount code here"
                            className="discount-input"
                        />
                    </div>
                    <button className="footer-buton">Next Step</button>
                    <button
                        className="footer-buton"
                        onClick={() => {
                            setOpenCart(false);
                        }}
                    >
                        Keep Shoping
                    </button>
                </div>
            </div>
        </div>
    );
}
