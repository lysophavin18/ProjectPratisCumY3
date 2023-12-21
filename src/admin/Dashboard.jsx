import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboad.css";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenus__box">
                <h5>ToTal Sales</h5>
                <span>$5768</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="orders__box">
                <h5>Orders</h5>
                <span>$5768</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5>ToTal Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5>ToTale User</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Dashboard;
