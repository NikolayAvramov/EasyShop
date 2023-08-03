import { useState, createContext } from "react";
import { fetchAllProducts } from "../services/dataService";
export const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [allProducts, setAllProducts] = useState(null);
    const [sortedProducts, setSortedProducts] = useState(null);
    const [cartItem, setCartItem] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [category, setCategory] = useState("");
    function getAllProducts() {
        fetchAllProducts().then(result => {
            setAllProducts(result);
        });
    }
    function filterByCategory(val, allProducts) {
        let sorted;

        if (allProducts) {
            if (val === "") {
                sorted = allProducts;
            } else {
                sorted = allProducts.filter(
                    product => product.category === val
                );
            }
            setSortedProducts(sorted);
        }
    }

    function filterRadioData(name, val) {
        let filtered;

        if (allProducts) {
            filtered = allProducts;
        }

        if (name === "Color") {
            filtered = filtered.filter(product => {
                if (val) {
                    return product[name] === val;
                } else {
                    return product;
                }
            });
        }
        if (name === "brand") {
            filtered = filtered.filter(product => {
                if (val) {
                    return product[name] === val;
                } else {
                    return product;
                }
            });
        }
        if (name === "price") {
            filtered = filtered.filter(product => {
                if (val) {
                    if (val > 899) {
                        return product.price > val;
                    } else if (val > 599) {
                        return product.price > val && product.price < 899;
                    } else if (val > 299) {
                        return product.price > val && product.price < 599;
                    } else if (val == 1) {
                        return product.price > val && product.price < 299;
                    }
                } else {
                    return product;
                }
            });
        }

        filterByCategory(category, filtered);
    }
    function sortByNameAndPrice(arr, criteria) {
        let sortedArr = [];

        switch (criteria) {
            case "name+":
                sortedArr = arr.sort((a, b) => {
                    let first = a.title.toLowerCase().split(" ").join("");
                    let second = b.title.toLowerCase().split(" ").join("");
                    return first.localeCompare(second);
                });

                setSortedProducts(sortedArr);
                break;
            case "name-":
                sortedArr = arr.sort((a, b) => {
                    let first = a.title.toLowerCase().split(" ").join("");
                    let second = b.title.toLowerCase().split(" ").join("");
                    return second.localeCompare(first);
                });

                setSortedProducts(sortedArr);
                break;
            case "num+":
                sortedArr = arr.sort((a, b) => {
                    let first = a.price;
                    let second = b.price;
                    return first - second;
                });

                setSortedProducts(sortedArr);
                break;
            case "num-":
                sortedArr = arr.sort((a, b) => {
                    let first = a.price;
                    let second = b.price;
                    return second - first;
                });

                setSortedProducts(sortedArr);
                break;
        }
    }

    const contentValues = {
        allProducts,
        filterRadioData,
        getAllProducts,
        filterByCategory,
        sortedProducts,
        sortByNameAndPrice,
        setSortedProducts,
        setCartItem,
        cartItem,
        searchWord,
        setSearchWord,
        showFilter,
        setShowFilter,
        isOpen,
        setIsOpen,
        setCategory,
    };

    return (
        <>
            <ContentContext.Provider value={contentValues}>
                {children}
            </ContentContext.Provider>
        </>
    );
}
