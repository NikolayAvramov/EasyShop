import "./Navigation.scss";
import navLogo from "../../assets/navLogo.png";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";

import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineUserAdd,
} from "react-icons/ai";

export function Navigation({ setOpenCart }) {
    const { allProducts, category, setCategory, sortByCategory } =
        useContext(ContentContext);

    return (
        <>
            <div className="nav">
                <div className="nav-logo-container">
                    <img className="nav-logo" src={navLogo} alt="nav-logo" />
                </div>
                <div className="nav-search-container">
                    <input className="nav-search-input" type="text" />
                    <BsSearch className="nav-search-icon" />
                </div>
                <div className="nav-user-container">
                    <AiOutlineUserAdd />
                    <AiOutlineHeart />
                    <AiOutlineShoppingCart
                        onClick={() => {
                            setOpenCart(true);
                        }}
                    />
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Category</h2>
                {allProducts && (
                    <ul className="category-list">
                        <li
                            className="category-list-item"
                            onClick={() => {
                                sortByCategory("All");
                            }}
                        >
                            All
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                sortByCategory("tv");
                            }}
                        >
                            TV's
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                sortByCategory("laptop");
                            }}
                        >
                            Laptops
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                sortByCategory("smartphone");
                            }}
                        >
                            Smartphones
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                sortByCategory("tablets");
                            }}
                        >
                            Tablets
                        </li>
                        <li
                            className="category-list-item"
                            onClick={() => {
                                sortByCategory("cameras");
                            }}
                        >
                            Cameras
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}
