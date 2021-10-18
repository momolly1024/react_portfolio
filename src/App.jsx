import React, { useContext, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Tntro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
    // const [dark, setDark] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div
            style={{
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode && "white",
            }}
        >
            <Toggle />
            <Tntro />
            <About />
            <ProductList />
            <Contact />
        </div>
    );
}

export default App;
