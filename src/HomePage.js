import React from "react";

import StepsComponent from "./components/StepsComponent";
import ProductInfo from "./components/ProductInfo";

const HomePage = () => {
    return (
        <>
            <div className="Home-text text-center p-2">
                <h1 >Wait ! Your Order In Progress.</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </div>
            <StepsComponent/>
            <ProductInfo/>
        </>
    )
}

export default HomePage