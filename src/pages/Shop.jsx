import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";

import initialProducts from "../assets/data/products"
import ProductsLists from "../components/UI/ProductsList";

const Shop = () => {
  const [products, setProductsData] = useState(initialProducts);

  const handleFitler = (e) => {
      const filterValue = e.target.value
      if(filterValue==='sofa'){
        const fiteredProducts = products.filter(item => item.category==='sofa')

        setProductsData(fiteredProducts);
      }
      if(filterValue==='chais'){
        const fiteredProducts = products.filter(item => item.category==='chair')

        setProductsData(fiteredProducts);
      }
  };

  const handleSearch = e  => {
   const searchTerm = e.target.value

   const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

   setProductsData(searchedProducts)
  }

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4">
              <div class="filter__widget">
                <select className="form-select" onChange={handleFitler}>
                  <option>Category</option>
                  <option value="sofa">Living Room</option>
                  <option valuue="chair">Dining Table</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="office">Office Furniture</option>
                  <option value="bedroom">Bed room</option>
                  <option value="bathroom">Bathroom</option>
                </select>
              </div>
            </Col>
            <Col lg="2" md="4">
              <div class="filter__widget">
                <select className="form-select ">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search-box">
                <input type="text" placeholder="search...."  onChange={handleSearch}/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {
               products.length === 0? (
               <h1 className="text-center fs-4">No Product are found!</h1>
               ):(
                <ProductsLists data ={products}/>
               )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Shop;
