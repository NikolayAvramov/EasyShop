import "./Cart.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CartProduct } from "./CartProduct/CartProduct";
import { useContext, useState } from "react";
import { ContentContext } from "../../context/ContentContext";

export function Cart({ setOpenCart }) {
    const { cartItem } = useContext(ContentContext);
    const [discountCode, setDiscountCode] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    function makeDiscount(e) {
        e.preventDefault();
        if (discountCode === "HireMe10") {
            setTotalPrice(state => state * 0.9);
        }
    }

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
                    {cartItem ? (
                        cartItem.map((item, index) => (
                            <CartProduct
                                key={item.objectId + index}
                                setTotalPrice={setTotalPrice}
                                item={item}
                            />
                        ))
                    ) : (
                        <p>Your cart is empty!</p>
                    )}
                </div>
                <div className="footer">
                    <div className="footer-total-price">
                        <h3 className="footer-title">Total Price</h3>
                        <p className="show-total-price">
                            {totalPrice.toFixed(2)}$
                        </p>
                    </div>
                    <div className="discount">
                        <form action="submit " onSubmit={e => makeDiscount(e)}>
                            <input
                                type="text"
                                placeholder="Discount code here"
                                className="discount-input"
                                value={discountCode}
                                onChange={e => setDiscountCode(e.target.value)}
                            />
                        </form>
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
