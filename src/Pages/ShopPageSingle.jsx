import React from 'react'
import Layout from '../Layout/Layout'
import { useLocation } from "react-router-dom";
import ShopPageSingleComp from '../Components/PageFive/ShopPageSingleComp';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Col, Row } from 'antd';

const ShopPageSingle = () => {
    const location = useLocation();
    const product = location.state.product;
    const sample = location.state.sample;

    let pics = sample.map((e) => e.src);

    return (
        <Layout>
            <Row justify={'center'}>
                <Col xs={24} md={22}>
                    <BreadCrumbs />
                    < ShopPageSingleComp ProductData={product} samplePicOne={pics} />
                </Col>
            </Row>
        </Layout>
    )
}

export default ShopPageSingle



