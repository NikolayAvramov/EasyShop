import { useState, createContext } from "react";
import { fetchAllProducts } from "../services/dataService";
export const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [allProducts, setAllProducts] = useState(null);
    const [category, setCategory] = useState(null);
    const [sortedProducts, setSortedProducts] = useState(null);
    function getAllProducts() {
        fetchAllProducts().then(result => setAllProducts(result));
    }
    function sortByCategory(cat) {
        setCategory(cat);
        let sorted = allProducts;
        if (cat == "All") {
            setSortedProducts(sorted);
        } else {
            sorted = sorted.filter(product => product.category === cat);
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
                    // console.log(first, second);
                    return first.localeCompare(second);
                });
                console.log(sortedArr);
                setSortedProducts(sortedArr);
                break;
            case "name-":
                sortedArr = arr.sort((a, b) => {
                    let first = a.title.toLowerCase().split(" ").join("");
                    let second = b.title.toLowerCase().split(" ").join("");
                    // console.log(first, second);
                    return second.localeCompare(first);
                });
                console.log(sortedArr);
                setSortedProducts(sortedArr);
                break;
            case "num+":
                sortedArr = arr.sort((a, b) => {
                    let first = a.price;
                    let second = b.price;
                    // console.log(first, second);
                    return first - second;
                });
                console.log(sortedArr);
                setSortedProducts(sortedArr);
                break;
            case "num-":
                sortedArr = arr.sort((a, b) => {
                    let first = a.price;
                    let second = b.price;
                    // console.log(first, second);
                    return second - first;
                });
                console.log(sortedArr);
                setSortedProducts(sortedArr);
                break;
        }
    }
    const contentValues = {
        allProducts,
        getAllProducts,
        sortByCategory,
        category,
        sortedProducts,
        sortByNameAndPrice,
        setSortedProducts,
    };

    return (
        <>
            <ContentContext.Provider value={contentValues}>
                {children}
            </ContentContext.Provider>
        </>
    );
}
