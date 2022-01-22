import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HealthySkin.css'
import { BsArrowRight } from "react-icons/bs";
const HealthySkin = () => {
    return (
        <div>
            <Row className='healthy-skin'>
                <Col className='healthy-skin-info'>
                    <p className='healthy-skin-paragraph'>The value of time</p>
                    <h2>Healthy skin cannot be rushed</h2>
                    <p>Years of contemplation and rigour go into each Aesop formulation–hydrators are no exception. Scientifically validated ingredients, combined with acquired wisdom, impart lasting benefits.</p>
                    <Link className='store-locator-btn text-decoration-none' to='/'><p className='mb-0 btn-des'>Discover deliberate nourishment</p> <BsArrowRight className='banner-icon' /></Link>
                </Col>
                <Col className='healthy-skin-img'>
                    <img height='600' src="https://www.aesop.com/u1nb1km7t5q7/2a9toBA6YVvZPntYn1qdLH/b5f611688860aee184a8b519f298ee04/Aesop_Healthy_Skin_Nourish_2022_Web_Homepage_Secondary_Warm_Mid_Desktop_2560x1440px.jpg" alt="" />

                </Col>
            </Row>
        </div>
    );
};

export default HealthySkin;