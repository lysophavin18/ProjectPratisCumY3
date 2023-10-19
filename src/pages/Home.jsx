import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import products from '../assets/data/products'

import { motion } from "framer-motion";
import Clock from "../components/UI/Clock";
import ProductsList from "../components/UI/ProductsList"
import Services from "../services/Services"
import { Container, Row , Col } from "reactstrap";
import { Link } from "react-router-dom";



   const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdTrebdingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filterdBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setTrendingProducts(filterdTrebdingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in</p>
                <h2>Make Your Interior More Minimalistic & Modern </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perferendis enim obcaecati saepe ea rem labore commodi! Sequi,
                  illum ullam.
                </p>
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="buy__btn"
                >
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>                            
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>{" "}
          <Col lg="6" md="6"></Col>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <Col lg="6" md="6"></Col>
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
