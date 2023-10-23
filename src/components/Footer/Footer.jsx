import React from "react";
import "./Footer.css";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo">
              <div>
                <h1 className="text-white">HOME ASR</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              reiciendis tenetur autem eligendi corporis illo ratione, dolore
              aperiam neque repellendus?
            </p>
          </Col>

          <Col lg="4"><div className="footer__quick-link">
               <h4 className="quick__link-title text-white">
                 Privacy Policy
               </h4>

               <ListGroup className="mb-3">
                 <ListGroupItem className="ps-0 border-0">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero?</p>
                 </ListGroupItem >
               </ListGroup>
              </div> 
            
            </Col>
            
 


          <Col lg="3">
            <div className="footer__quick-link">
               <h4 className="quick__link-title text-white">
                Contanct
               </h4>

               <ListGroup className="footer__contact mb-3">
                 <ListGroupItem className="ps-0 border-0"><Col lg='12'>
            </Col>
        
                   <span><i class="ri-map-pin-user-line"></i></span>
                   <p>123,keansvay, Phnom penh, Cambodia</p>
                 </ListGroupItem >

                 <ListGroupItem className="ps-0 border-0">
                    <span><i class="ri-phone-line"></i></span>
                    <p>+885 962352608</p>
                 </ListGroupItem><Col lg='12'>
            </Col>
        

                 <ListGroupItem className="ps-0 border-0">
                    <span><i class="ri-facebook-fill"></i></span>
                    <p>VINNZz</p>
                 </ListGroupItem>

                 <ListGroupItem className="ps-0 border-0">
                    <span><i class="ri-mail-line"></i></span>
                    <p>ly.sophavin@gmail.com</p>
                 </ListGroupItem>

               </ListGroup>
            </div>
              
         </Col>

          
            
            <Col lg='12'>
               <p className="footer__copyright"> Copyright {year} developed by @sophainly All rights reserved</p>
            </Col> 
        

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
