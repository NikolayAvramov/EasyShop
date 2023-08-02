import "./SideBar.scss";
import { Color } from "./Colors/Colors";
import { Price } from "./Price/Price";
import { Brands } from "./Brands/Brands";
export function Sidebar() {
    return (
        <>
            <div className="filter">
                <h4 className="filter-label">Filters</h4>
                <Color />
                <Price />
                <Brands />
            </div>
        </>
    );
}
