import { useEffect, useState } from "react";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { Alert } from "./components/Alert/Alert";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import { Cart } from "./components/Cart/Cart";
import { DiscountAlert } from "./components/DoscountAlert/DiscountAlert";

import { ContentProvider } from "./context/ContentContext";
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDiscount, setOpenDiscount] = useState(true);
    const [openCart, setOpenCart] = useState(false);
    if (isOpen) {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    }

    return (
        <div className="app">
            <ContentProvider>
                {openDiscount && (
                    <DiscountAlert setOpenDiscount={setOpenDiscount} />
                )}
                {openCart && <Cart setOpenCart={setOpenCart} />}
                <Navigation setOpenCart={setOpenCart} />
                {isOpen && <Alert />}
                <Home setIsOpen={setIsOpen} />
                <Footer />
            </ContentProvider>
        </div>
    );
}

export default App;
