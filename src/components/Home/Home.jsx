import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../../context/ContentContext";
import "./Home.scss";

import { Card } from "../Card/Card";
import { Sidebar } from "../SideBar/Sidebar";
export function Home({ setIsOpen }) {
    const {
        allProducts,
        getAllProducts,
        sortedProducts,
        sortByNameAndPrice,
        filterData,
        searchWord,
        setShowFilter,
        showFilter,
    } = useContext(ContentContext);

    const [sorted, setSorted] = useState(null);
    const [showedProduct, setShowedProduct] = useState(12);
    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        filterData("category", "All");
    }, [allProducts]);

    if (sorted) {
        sortByNameAndPrice(sortedProducts, sorted);
    }

    return (
        <>
            <div className="home">
                <div className="filter-section">
                    <Sidebar />
                </div>
                {showFilter ? (
                    <>
                        <div className="phone-filter">
                            <Sidebar />
                            <button
                                onClick={() => setShowFilter(false)}
                                className="button-apply"
                            >
                                Apply filters
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="product-container">
                            {sortedProducts && (
                                <>
                                    <div
                                        className="filter-mobile-button"
                                        onClick={() => {
                                            setShowFilter(true);
                                        }}
                                    >
                                        Filters
                                    </div>
                                    <div className="sorting-buttons">
                                        <p className="product-count">
                                            {Math.min(
                                                showedProduct,
                                                sortedProducts.length
                                            )}
                                            Items.
                                        </p>
                                        <p className="sort-text">
                                            Sort by name
                                            <button
                                                className="sorting-button"
                                                onClick={() => {
                                                    setSorted("name+");
                                                }}
                                            >
                                                a-z
                                            </button>
                                            <button
                                                className="sorting-button"
                                                onClick={() => {
                                                    setSorted("name-");
                                                }}
                                            >
                                                z-a
                                            </button>
                                            by price
                                            <button
                                                className="sorting-button"
                                                onClick={() => {
                                                    setSorted("num+");
                                                }}
                                            >
                                                lower
                                            </button>
                                            <button
                                                className="sorting-button"
                                                onClick={() => {
                                                    setSorted("num-");
                                                }}
                                            >
                                                higher
                                            </button>
                                        </p>
                                    </div>
                                </>
                            )}

                            <div className="product-section">
                                {sortedProducts &&
                                    sortedProducts
                                        .filter(item => {
                                            return searchWord.toLowerCase() ===
                                                ""
                                                ? item
                                                : item.title
                                                      .toLowerCase()
                                                      .includes(searchWord);
                                        })
                                        .slice(0, showedProduct)
                                        .map(product => (
                                            <Card
                                                key={product.objectId}
                                                setIsOpen={setIsOpen}
                                                product={product}
                                            />
                                        ))}
                            </div>
                            {sortedProducts &&
                                showedProduct < sortedProducts.length && (
                                    <button
                                        onClick={() => {
                                            setShowedProduct(
                                                state => state + 4
                                            );
                                        }}
                                        className="load-more-btn"
                                    >
                                        Load More
                                    </button>
                                )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
