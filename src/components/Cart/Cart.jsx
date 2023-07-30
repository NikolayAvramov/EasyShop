import "./Cart.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CartProduct } from "./CartProduct/CartProduct";

export function Cart() {
    return (
        <div className="overlay">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="header">
                    <h3 className="cart-title">Cart</h3>
                    <AiOutlineCloseCircle className="cart-close-btn" />
                </div>
                <div className="body">
                    <CartProduct />
                </div>
            </div>
        </div>
    );
}
