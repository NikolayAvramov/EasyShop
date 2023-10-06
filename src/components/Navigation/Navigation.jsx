import { ContentContext } from "../../context/ContentContext";
import { useContext } from "react";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LiaLaptopSolid } from "react-icons/lia";
import { GiSmartphone } from "react-icons/gi";
import { ImTablet } from "react-icons/im";

import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineUserAdd,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Navigation.scss";

import navLogo from "../../assets/navLogo.png";

import { BsSearch, BsFillCameraFill } from "react-icons/bs";

export function Navigation({ setOpenCart }) {
    const {
        allProducts,
        setCategory,
        filterByCategory,
        setSearchWord,
        searchWord,
        cartItem,
    } = useContext(ContentContext);
    const navigate = useNavigate();
    return (
        <>
            <div className="nav">
                <div
                    className="nav-logo-container"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <img className="nav-logo" src={navLogo} alt="nav-logo" />
                </div>
                <div className="nav-search-container">
                    <form action="submit">
                        <input
                            className="nav-search-input"
                            type="text"
                            value={searchWord}
                            onChange={e => setSearchWord(e.target.value)}
                        />
                        <BsSearch className="nav-search-icon" />
                    </form>
                </div>
                <div className="nav-user-container">
                    <div className="icon">
                        <AiOutlineUserAdd />
                    </div>
                    <div className="icon">
                        {" "}
                        <AiOutlineHeart />
                    </div>
                    <div className="icon">
                        <AiOutlineShoppingCart
                            onClick={() => {
                                setOpenCart(true);
                            }}
                        />
                        <p
                            onClick={() => {
                                setOpenCart(true);
                            }}
                            className="cart-item-count"
                        >
                            {cartItem.length}
                        </p>
                    </div>
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Category</h2>
                {allProducts && (
                    <ul className="category-list">
                        <li
                            className="category-list-item"
                            onClick={() => {
                                setCategory("");
                                filterByCategory("", allProducts);
                            }}
                        >
                            All
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                setCategory("tv");
                                filterByCategory("tv", allProducts);
                            }}
                        >
                            <PiTelevisionSimpleBold className="mobile-buttons" />
                            <span className="screen-buttons"> TV's</span>
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                setCategory("laptop");
                                filterByCategory("laptop", allProducts);
                            }}
                        >
                            <LiaLaptopSolid className="mobile-buttons" />
                            <span className="screen-buttons"> Laptops</span>
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                setCategory("smartphone");
                                filterByCategory("smartphone", allProducts);
                            }}
                        >
                            <GiSmartphone className="mobile-buttons" />
                            <span className="screen-buttons">Smartphones</span>
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                setCategory("tablets");
                                filterByCategory("tablets", allProducts);
                            }}
                        >
                            <ImTablet className="mobile-buttons" />
                            <span className="screen-buttons">Tablets</span>
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                setCategory("cameras");
                                filterByCategory("cameras", allProducts);
                            }}
                        >
                            <BsFillCameraFill className="mobile-buttons" />
                            <span className="screen-buttons"> Cameras</span>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}
