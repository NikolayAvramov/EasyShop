import { useContext, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { SideBar } from "../SideBar/SideBar";
import "./Home.scss";
import { ContentContext } from "../../context/ContentContext";
export function Home({ setIsOpen }) {
    const {
        allProducts,
        getAllProducts,
        sortedProducts,
        sortByName,
        sortByCategory,
        setSortedProducts,
    } = useContext(ContentContext);

    const [isSorted, setIsSorted] = useState(false);
    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        sortByCategory("All");
    }, [allProducts]);
    if (isSorted) {
        sortByName(sortedProducts);
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
                            <p className="product-count">
                                {sortedProducts.length} Items.
                            </p>
                            <p>
                                Sort by
                                <button
                                    onClick={() => {
                                        setIsSorted(val => !val);
                                        // sortByName(sortedProducts);
                                    }}
                                >
                                    name
                                </button>
                                price
                            </p>
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
