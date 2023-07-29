import { useState } from "react";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { Alert } from "./components/Alert/Alert";
import { Footer } from "./components/Footer/Footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    }

    return (
        <>
            {isOpen && <Alert />}
            <Card setIsOpen={setIsOpen} />
            <Footer />
        </>
    );
}

export default App;
