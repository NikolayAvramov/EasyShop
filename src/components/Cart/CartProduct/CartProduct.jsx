import "./CartProduct.scss";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
export function CartProduct() {
    return (
        <>
            <div className="cart-product">
                <div className="info-side">
                    <img
                        src="https://www.technopolis.bg/medias/sys_master/ha7/hbd/27213338804254.jpg"
                        alt="cart img"
                        className="cart-img"
                    />
                    <h4 className="cart-title"> Tv LG</h4>
                </div>
                <div className="active">
                    <AiOutlineMinusSquare className="buton" />
                    <input type="text" className="input" />
                    <BsPlusSquare className="buton" />
                    <p className="cart-price">450$</p>
                </div>
            </div>
        </>
    );
}
