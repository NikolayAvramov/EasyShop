import { useContext, useEffect, useState } from "react";
import "./Details.scss";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { ContentContext } from "../../context/ContentContext";
import { getById } from "../../services/dataService";
export function Details({ setIsOpen }) {
    const { setCartItem } = useContext(ContentContext);
    const [item, setItem] = useState(null);
    const itemId = useParams();

    let imgArr = [];
    useEffect(() => {
        getById(itemId.id).then(result => {
            setItem(result);

            setMain(result.mainImg);
        });
    }, []);

    const monthArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [main, setMain] = useState();
    if (item) {
        imgArr.push(item.mainImg);
        imgArr.push(item.img1);
        imgArr.push(item.img2);
        imgArr.push(item.img3);
    }
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();

    function onClickHandler() {
        setIsOpen(true);
        setCartItem(state => [...state, item]);
    }
    function onClickImageChange(index) {
        const selected = imgArr[index];

        setMain(selected);
    }

    return (
        <>
            {item && (
                <div className="details">
                    <div className="details-left-side">
                        <h2 className="details-title">{item.title}</h2>
                        <div className="details-image-section">
                            {main && (
                                <img
                                    src={main.url}
                                    alt=""
                                    className="main-img"
                                />
                            )}
                            <div className="secondary-image-section">
                                {imgArr &&
                                    imgArr.map((data, i) => {
                                        return (
                                            <span
                                                key={i}
                                                className="secondary-image-wrapper"
                                            >
                                                <img
                                                    src={data.url}
                                                    alt=""
                                                    className="secondary-img"
                                                    onClick={() =>
                                                        onClickImageChange(i)
                                                    }
                                                />
                                            </span>
                                        );
                                    })}
                            </div>
                        </div>
                        <p>
                            <span className="rating-text"> Rating:</span>

                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <FaStar
                                        key={index}
                                        className="star"
                                        size={20}
                                        color={
                                            currentRating <= item.rating
                                                ? "#ffc107"
                                                : "#e3e4e9"
                                        }
                                    />
                                );
                            })}
                        </p>
                        <div className="details-info-wrapper">
                            <p className="details-info">Brand: {item.brand}</p>
                            <p className="details-info">Year: {item.year}</p>
                            <p className="details-info">Color: {item.Color}</p>

                            {item.ram && (
                                <p className="details-info">Ram:{item.ram}</p>
                            )}
                            {item.screenSize && (
                                <p className="details-info">
                                    Screen Size: {item.screenSize} "
                                </p>
                            )}
                            {item.displayTehnology && (
                                <p className="details-info">
                                    Display Tehnology:{item.displayTehnology}
                                </p>
                            )}
                            {item.procesor && (
                                <p className="details-info">
                                    Procesor: {item.procesor}
                                </p>
                            )}
                            {item.ssd && (
                                <p className="details-info">
                                    Storage: {item.ssd}
                                </p>
                            )}
                            {item.operatingSystem && (
                                <p className="details-info">
                                    Operating System: {item.operatingSystem}
                                </p>
                            )}
                            {item.type && (
                                <p className="details-info">
                                    Type: {item.type}
                                </p>
                            )}
                            {item.gpu && (
                                <p className="details-info">Gpu: {item.cpu}</p>
                            )}
                            {item.camera && (
                                <p className="details-info">
                                    Camera: {item.camera}
                                </p>
                            )}
                            {item.storageCapacity && (
                                <p className="details-info">
                                    Storage Capacity: {item.storageCapacity}
                                </p>
                            )}
                        </div>

                        {item.description && (
                            <>
                                <h2 className="description-title">
                                    Description
                                </h2>
                                <p className="details-description">
                                    {item.description}
                                </p>
                            </>
                        )}
                    </div>

                    <div className="details-right-side">
                        <div className="details-right-side-wrapper">
                            <div className="details-right-side-info">
                                <p className="delivery">Postage:</p>
                                <p className="delivery-info">
                                    Free Standard Delivery. See detailsfor
                                    postage Located in: Barnstaple, United
                                    Kingdom
                                </p>
                                <p className="delivery">Delivery:</p>
                                <p className="delivery-info">
                                    Estimated between , {day + 3}{" "}
                                    {monthArr[month]} and , {day + 7}{" "}
                                    {monthArr[month]} . Dispatched today if paid
                                    within 6 hrs 5 mins.
                                </p>
                                <p className="delivery">Returns:</p>
                                <p className="delivery-info">
                                    60 days return. Buyer pays for return
                                    postage.
                                </p>
                            </div>
                            <p className="details-price">
                                Price: {item.price}$
                            </p>
                            <Link
                                onClick={() => {
                                    onClickHandler();
                                }}
                                className="description-buton"
                            >
                                <BsCart4 />
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
