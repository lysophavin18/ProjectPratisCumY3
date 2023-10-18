  import React from 'react';
  import productImg from '../../assets/images/arm-chair-01.jpg'
  import { motion } from 'framer-motion';
  import '../../styles/product-cart.css';
  import { Col } from 'reactstrap';


  const ProductCard = () => {
    return (
      <Col lg='3' md='4'>
        < div className="product__item">
          <div className="product__img">
             <motion.img whileHover={{scale:1.1}} src={productImg} alt="" />
          </div>
             <div className='p-2 product__info'>
                    <h3 className="product__name">
                        Modern Armchair
                   </h3>
                    <span >Chair</span>
             </div>
          
          <div className="product__cart-bottom d-flex align-items-center 
              justify-content-between p-2 ">
              <span className="price">
                $299
              </span>
                
                <motion.span whileTap={{scale:1.2}} whileHover={{scale:1.2}}>
                     <i class="ri-add-line"></i>
                </motion.span>
          </div>

      </div>
      </Col>
    );
  };
  
  export default ProductCard;