import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Tntro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
    return (
        <div className="App">
            <Tntro />
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    );
}

export default App;
