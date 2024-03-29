import "./Card.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
export function Card({ product, setIsOpen }) {
    const navigate = useNavigate();
    const { setCartItem } = useContext(ContentContext);
    function onClickHandler() {
        setIsOpen(true);
        setCartItem(state => [...state, product]);
    }
    return (
        <>
            <div
                className="card"
                onClick={() => {
                    navigate(`/details/${product.objectId}`);
                }}
            >
                <img
                    src={product.mainImg.url}
                    alt="Natours img"
                    className="card-img"
                />
                <h3 className="card-title">{product.title}</h3>
                <h4 className="card-price">Price: {product.price}$</h4>
                <p>
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <FaStar
                                key={index}
                                className="star"
                                size={20}
                                color={
                                    currentRating <= product.rating
                                        ? "#ffc107"
                                        : "#e3e4e9"
                                }
                            />
                        );
                    })}
                </p>
                <p className="card-description">{`${product.description.slice(
                    0,
                    110
                )} ...`}</p>
                <div className="card-buton-wrapper">
                    <Link
                        exact
                        onClick={e => {
                            e.stopPropagation();
                            onClickHandler();
                        }}
                        className="card-buton"
                    >
                        <BsCart4 />
                        Add to cart
                    </Link>
                </div>
            </div>
        </>
    );
}
