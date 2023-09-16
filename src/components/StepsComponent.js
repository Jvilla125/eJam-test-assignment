import React from "react";
import { Container } from "react-bootstrap";


const StepsComponent = () => {
    return (
        <>
            <Container className="Home-text">
                <div className="steps d-flex justify-content-between p-2">
                    <div className="d-flex steps-div" >
                        <i className="icon green-check bi bi-check-circle-fill mr-1"></i>
                        <p className="stepCount">Step 1:</p>
                        <p className="stepInfo pl-1"> Cart Review</p>
                    </div>
                    <div className="d-flex steps-div" >
                        <i className="icon green-check bi bi-check-circle-fill mr-1"></i>
                        <p className="stepCount">Step 2:</p>
                        <p className="stepInfo pl-1"> Checkout</p>
                    </div>
                    <div className="d-flex steps-div" >
                        <i class="icon bi bi-3-circle-fill text-primary mr-1"></i>
                            <p className="stepCount"><b>Step 3:</b></p>
                            <p className="stepInfo pl-1"> <b>Special Offer </b></p>
                    </div>
                    <div className="d-flex steps-div" >
                        <i class="icon bi bi-4-circle text-primary mr-1"></i>
                        <p className="stepCount">step 4:</p>
                        <p className="stepInfo pl-1"> Confirmation</p>
                    </div>

                </div>

            </Container>
        </>
    )
}

export default StepsComponent;