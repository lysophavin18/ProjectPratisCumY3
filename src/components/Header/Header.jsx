import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import { Container, Row } from "reactstrap";
import { motion } from 'framer-motion'


const nav__links = [
  {
    Path:'home',
    display:'Home'
  },
  {
    Path:'shop',
    display:'Shop'
  },
  {
    Path:'cart',
    display:'Cart'
  }

]



const Header = () => {
  return(
   <header className='header'>
       <Container>
         <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>
                  HOME ASR
                </h1>
              </div>
            </div>

            <div className="navigation">
                <ul className="menu">
                 {
                  nav__links.map((item,index )=> (
                    <li className='nav__item' key={index}>
                      <NavLink to ={item.Path} className={(navClass)=>navClass.isActive ? 'nav__active':''}>{item.display}</NavLink>
                    </li>
                  ))
                 }
                </ul>    
            </div>
            <div className="nav__icons">
              <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <span className='badge'>1</span>
              </span>
                
              <span className='cart__icon'>
              <i class="ri-shopping-bag-line"></i>
              <span className='badge'>1</span>
              </span>

              <span><motion.img whileTap={{scale:1.3}} src={user_icon} alt="" /></span>
            </div>

            <div className="mobile__menu"></div>
               <span>
               <i class="ri-menu-line"></i>
               </span>
          </div>
         </Row>
       </Container>
   </header>
  );
};

export default Header;