import React from "react";
import Nav from 'react-bootstrap/Nav';

import Carousel from 'react-bootstrap/Carousel';


const HeaderComponent = () => {
    const navInfo = [
        {
            icon: <i class="bi bi-patch-check"></i>,
            text: "30-Day SATISFACTION GUARANTEE"
        },
        {
            icon: <i class="bi bi-truck"></i>,
            text: "FREE DELIVERY ON ORDERS OVER $40.00"
        },
        {
            icon: <i class="bi bi-heart"></i>,
            text: "50.000+ HAPPY CUSTOMERS"
        },
        {
            icon: <i class="bi bi-arrow-repeat"></i>,
            text: "100% MONEY BACK GUARANTEE"
        }
    ]

    return (
        <>
            <Nav className='header text-white d-flex justify-content-around ' >
                {navInfo.map((item, i) => (
                    <div className="test mt-3" key={i}>
                        {item.icon} {item.text}
                    </div>
                ))}
                <Carousel data-bs-theme="white" className=" text-center">
                    {navInfo.map((item, i) => (
                        <Carousel.Item>
                            <div className="" key={i}>
                                {item.icon} {item.text}
                            </div>
                        </Carousel.Item>

                    ))}
                </Carousel>
            </Nav>
            <Nav className="d-flex justify-content-between pb-4">
                <Nav>
                    <img src="/image1.png" className="rounded img-fluid ml-4 mt-4" alt="Responsive image" />
                </Nav>
                <Nav>
                    <img src="/image2.png" className="rounded img-fluid mr-4 mt-4" alt="Responsive image" />
                    <img src="/image3.png" className="rounded img-fluid mr-4 mt-4" alt="Responsive image" />
                </Nav>

            </Nav>

        </>
    )
}

export default HeaderComponent;