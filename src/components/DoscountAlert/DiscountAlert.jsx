import "./DiscountAlert.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
export function DiscountAlert({ setOpenDiscount }) {
    return (
        <div className="discount-overlay">
            <div
                onClick={() => {
                    setOpenDiscount(false);
                }}
                className="discount-backdrop"
            ></div>
            <div className="discount-modal">
                <div className="discount-header">
                    <h3 className="cart-title">Discount</h3>
                    <AiOutlineCloseCircle
                        className="cart-close-btn"
                        onClick={() => {
                            setOpenDiscount(false);
                        }}
                    />
                </div>
                <div className="discount-body">
                    <p className="discount-alert-message">
                        Don’t miss our SALE: Save 10% on all items with
                        promocode
                        <span className="discount-code"> HireMe10</span>! This
                        offer is for a limited time only. Hurry, shop your
                        favorites now!
                    </p>
                </div>
            </div>
        </div>
    );
}
