import { useContext, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { SideBar } from "../SideBar/SideBar";
import "./Home.scss";
import { ContentContext } from "../../context/ContentContext";
import { BsFillFileArrowUpFill, BsFillFileArrowDownFill } from "react-icons/bs";
export function Home({ setIsOpen }) {
    const {
        allProducts,
        getAllProducts,
        sortedProducts,
        sortByNameAndPrice,
        sortByCategory,
    } = useContext(ContentContext);

    const [sorted, setSorted] = useState(null);
    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        sortByCategory("All");
    }, [allProducts]);
    if (sorted) {
        sortByNameAndPrice(sortedProducts, sorted);
    }
    return (
        <>
            <div className="home">
                <div className="filter-section">
                    <h4 className="filter-label">Filters</h4>
                    <SideBar />
                </div>
                <div className="product-container">
                    {sortedProducts && (
                        <>
                            <div className="sorting-buttons">
                                <p className="product-count">
                                    {sortedProducts.length} Items.
                                </p>
                                <p>
                                    Sort by name
                                    <BsFillFileArrowDownFill
                                        onClick={() => {
                                            setSorted("name+");
                                        }}
                                    />
                                    <BsFillFileArrowUpFill
                                        onClick={() => {
                                            setSorted("name-");
                                        }}
                                    />
                                    by price
                                    <BsFillFileArrowDownFill
                                        onClick={() => {
                                            setSorted("num+");
                                        }}
                                    />
                                    <BsFillFileArrowUpFill
                                        onClick={() => {
                                            setSorted("num-");
                                        }}
                                    />
                                </p>
                            </div>
                        </>
                    )}

                    <div className="product-section">
                        {sortedProducts &&
                            sortedProducts.map(product => (
                                <Card
                                    key={product.objectId}
                                    setIsOpen={setIsOpen}
                                    product={product}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
