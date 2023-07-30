import { Card } from "../Card/Card";
import { SideBar } from "../SideBar/SideBar";
import "./Home.scss";
export function Home({ setIsOpen }) {
    return (
        <>
            <div className="home">
                <div className="filter-section">
                    <h4 className="filter-label">Filters</h4>
                    <SideBar />
                </div>
                <div className="product-section">
                    <Card setIsOpen={setIsOpen} />
                    <Card setIsOpen={setIsOpen} />
                    <Card setIsOpen={setIsOpen} />
                    <Card setIsOpen={setIsOpen} />
                    <Card setIsOpen={setIsOpen} />
                </div>
            </div>
        </>
    );
}
