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
    function sortByName(arr) {
        let sortedArr = [];
        sortedArr = arr.sort((a, b) => {
            let first = a.title.toLowerCase().split(" ").join("");
            let second = b.title.toLowerCase().split(" ").join("");
            console.log(first, second);
            return first.localeCompare(second);
        });

        setSortedProducts(sortedArr);
    }
    const contentValues = {
        allProducts,
        getAllProducts,
        sortByCategory,
        category,
        sortedProducts,
        sortByName,
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
