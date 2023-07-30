import "./Navigation.scss";
import navLogo from "../../assets/navLogo.png";
import { BsSearch } from "react-icons/bs";
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineUserAdd,
} from "react-icons/ai";

export function Navigation() {
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
                    <AiOutlineShoppingCart />
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Category</h2>
                <ul className="category-list">
                    <li className="category-list-item">All</li>
                    <li className="category-list-item">TV's</li>
                    <li className="category-list-item">Laptops</li>
                    <li className="category-list-item">Smartphones</li>
                    <li className="category-list-item">Tablets</li>
                    <li className="category-list-item">Cameras</li>
                </ul>
            </div>
        </>
    );
}
