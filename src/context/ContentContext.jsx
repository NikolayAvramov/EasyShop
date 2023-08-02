import { useState, createContext } from "react";
import { fetchAllProducts } from "../services/dataService";
export const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [allProducts, setAllProducts] = useState(null);
    const [sortedProducts, setSortedProducts] = useState(null);
    const [cartItem, setCartItem] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [category, setCategory] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    function getAllProducts() {
        fetchAllProducts().then(result => setAllProducts(result));
    }
    function filterData(cat, val) {
        let sorted = allProducts;
        if (category) {
            sorted = sorted.filter(product => product.category === category);
        }

        if (val === "All" || val === "") {
            setSortedProducts(allProducts);
        } else {
            if (cat === "price") {
                sorted = sorted.filter(product => product[cat] <= val);
            } else {
                sorted = sorted.filter(product => product[cat] === val);
            }
        }

        setSortedProducts(sorted);
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
                    // console.log(first, second);
                    return second - first;
                });

                setSortedProducts(sortedArr);
                break;
        }
    }

    function handleChange(e) {
        filterData(e.target.name, e.target.value);
    }
    function delItem(item) {
        setCartItem(state =>
            state.filter(product => product.objectId !== item.objectId)
        );
    }
    const contentValues = {
        allProducts,
        getAllProducts,
        filterData,
        setCategory,
        sortedProducts,
        sortByNameAndPrice,
        setSortedProducts,
        setCartItem,
        cartItem,
        searchWord,
        setSearchWord,
        handleChange,
        showFilter,
        setShowFilter,
        isOpen,
        setIsOpen,
        delItem,
    };

    return (
        <>
            <ContentContext.Provider value={contentValues}>
                {children}
            </ContentContext.Provider>
        </>
    );
}
