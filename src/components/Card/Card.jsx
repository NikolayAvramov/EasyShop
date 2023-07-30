import "./Card.scss";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
export function Card({ setIsOpen, product }) {
    return (
        <>
            <div className="card">
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
                        onClick={() => setIsOpen(true)}
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
