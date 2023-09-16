import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rating } from "react-simple-star-rating";

const ProductInfo = () => {
    return (
        <>
            <Container className="product-info-container" >
                <Row>
                    <Col className="first-col">
                        <Col>

                            <img src="/image4.png" className="img-fluid p-2" alt="Responsive image" />
                        </Col>
                        <Col>
                            <br />
                            <div class="card border border-0">
                                <Row className="pl-4 pt-4">
                                    <Col className="col-1">
                                        <img src="./avatar.png" class="rounded-circle" />
                                    </Col>
                                    <Col className="col-9 ml-2">
                                        <div className="d-flex flex-column">
                                            <Rating size={18} initialValue={5} />
                                            <div className="d-flex flex-row ">
                                                <b className="pr-2">Ken T.</b> <i className="green-check bi bi-patch-check-fill"></i> <p className="green pl-2">Verfied Customer</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div class="card-body">
                                    <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col>
                        <Col>
                            <h2 className="text-break pt-2 pb-4 w-auto">
                                <a href="#" className="text-decoration-none">ONE TIME ONLY </a>special price for 6 extra Clarifion for only <a href="#" className="text-decoration-none" >$14 each</a> ($84.00 total!)
                            </h2>
                        </Col>
                        {/* Clarifon Air Ionizer */}
                        <Row>
                            <Col className="col-3">
                                <img src="/image5.png" className="bg-primary rounded img-fluid" alt="Responsive image" />
                            </Col>
                            <Col className="col-8">
                                <div className="d-flex justify-content-between">
                                    <div className="fw-semibold">
                                        Clarifion Air Ionizer
                                    </div>
                                    <div className="d-flex">
                                        <p class="text-muted text-decoration-line-through mr-2">$180</p>
                                        <a href="#" className="text-decoration-none">$84 </a>
                                    </div>
                                </div>
                                <div>
                                    <Rating size={18} initialValue={5} />
                                </div>
                                <div>
                                    <i class="bi bi-circle-fill text-primary pr-3"></i>
                                    12 left in Stock
                                </div>
                                <br />
                                <div className="info-div">
                                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                                </div>
                                <br />
                            </Col>
                            <div className="info-div2">
                                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                            </div>
                        </Row>
                        <Row >
                            <div>
                                <div>
                                    <i class="bi bi-check2 text-primary pr-2"></i>
                                    Negative Ion Technology may <b>help with allergens</b>
                                </div>
                                <br />
                                <div>
                                    <i class="bi bi-check2 text-primary pr-2"></i>
                                    Designed for <b>air rejuvenation</b>
                                </div>
                                <br />
                                <div>
                                    <i class="bi bi-check2 text-primary pr-2"></i>
                                    <b>Perfect for every room </b>in all types of places.
                                </div>
                                <br />
                            </div>
                        </Row>
                        <Row>
                            <div className="percent-box d-grid gap-2">
                                <p className="percent-box-text text-left p-2"> <i class="bi bi-percent"></i> Save <a href="#" className="text-decoration-none" >53% </a> and get <a href="#" className="text-decoration-none"> 6 extra Clarifision</a> for only <a href="#" className="text-decoration-none">$14 Each</a>.</p>
                            </div>
                        </Row>
                        <Row className="p-4">
                            <div className="d-grid gap-2" >
                                <button type="button" className="button text-white border-0 rounded-pill p-2 text-center">
                                    Yes - CLAIM MY DISCOUNT <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </Row>
                        <Row>
                            <div className="border border-dark text-center ">
                                <Row>
                                    <Col className="border-right border-dark">
                                        Free Shipping

                                    </Col>
                                    <Col className="border-right border-dark">
                                        <i className="bi bi-lock"></i>Secure 256-bit SSL encryption.
                                    </Col>
                                    <Col>
                                    <div >
                                    <i class="bi bi-credit-card"></i>
                                    <i class="bi bi-credit-card"></i>
                                    <i class="bi bi-credit-card"></i>
                                    <i class="bi bi-credit-card"></i>
                                    <i class="bi bi-credit-card"></i>
                                    <i class="bi bi-credit-card"></i>
                                    <i class="bi bi-credit-card"></i>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                        <Row>
                            <div className="text-center p-3 mb-4">
                                <a href="#" className="text-danger">NO THANKS, I DON'T WANT THIS.</a>
                            </div>

                        </Row>
                        <Row>
                            <Col className="col-2 pr-3">
                                <img src="/image6.png" className="rounded img-fluid" alt="Responsive image" />
                            </Col>
                            <Col className="col-10">
                                If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee.</b> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default ProductInfo;