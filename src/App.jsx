import { useState } from "react";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { Alert } from "./components/Alert/Alert";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import { Cart } from "./components/Cart/Cart";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    }

    return (
        <div className="app">
            <Cart />
            {/* <Navigation />
            {isOpen && <Alert />}
            <Home setIsOpen={setIsOpen} />
            <Footer /> */}
        </div>
    );
}

export default App;
