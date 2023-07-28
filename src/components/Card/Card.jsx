import "./Card.scss";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
export function Card({ setIsOpen }) {
    const [rating, setRating] = useState(4);

    const text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam molestiae, ex aliquid perferendis vitae dolore eligendi quaerat nesciunt beatae temporibus quidem deleniti labore iste nemo omnis sed maiores voluptates exercitationem.";
    return (
        <>
            <div className="card">
                <img
                    src="https://www.technopolis.bg/medias/sys_master/ha7/hbd/27213338804254.jpg"
                    alt="Natours img"
                    className="card-img"
                />
                <h3 className="card-title">Natour</h3>
                <h4 className="card-price">Price: $239</h4>
                <p>
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <FaStar
                                key={index}
                                className="star"
                                size={20}
                                color={
                                    currentRating <= rating
                                        ? "#ffc107"
                                        : "#e3e4e9"
                                }
                            />
                        );
                    })}
                </p>
                <p className="card-description">{`${text.slice(
                    0,
                    100
                )} ...`}</p>
                <div className="card-buton-wrapper">
                    <Link
                        onClick={() => setIsOpen(true)}
                        className="card-buton"
                    >
                        <BsCart4 />
                        {"  "}Add to cart
                    </Link>
                </div>
            </div>
        </>
    );
}
