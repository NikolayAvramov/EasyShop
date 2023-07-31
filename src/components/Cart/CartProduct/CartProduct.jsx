import "./CartProduct.scss";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { useState, useEffect } from "react";
export function CartProduct({ setTotalPrice, item }) {
    const [quantity, setQuantity] = useState(1);

    if (quantity > item.quantity) {
        setQuantity(Math.min(quantity, item.quantity));
    } else if (quantity < 1) {
        setQuantity(1);
    }
    useEffect(() => {
        if (quantity === 1) {
            setTotalPrice(state => state + item.price);
        }
    }, []);

    function addQuantity() {
        setQuantity(state => state + 1);
        if (quantity !== item.quantity) {
            setTotalPrice(state => state + item.price);
        }
    }
    function minusQuantity() {
        setQuantity(quantity - 1);
        if (quantity !== 1) {
            setTotalPrice(state => state - item.price);
        }
    }

    return (
        <>
            <div className="cart-product">
                <div className="info-side">
                    <img
                        src={item.mainImg.url}
                        alt="cart img"
                        className="cart-img"
                    />
                    <h4 className="cart-title">{item.title}</h4>
                </div>
                <div className="active">
                    <AiOutlineMinusSquare
                        className="buton"
                        onClick={minusQuantity}
                    />
                    <p className="quantity">{quantity}</p>

                    <BsPlusSquare className="buton" onClick={addQuantity} />
                    <p className="cart-price">{item.price * quantity}$</p>
                </div>
            </div>
        </>
    );
}
