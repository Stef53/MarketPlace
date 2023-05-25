import React, { useContext } from 'react'
import { Image, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FAVORITE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import BasketModal from './modals/BasketModal';
import { useNavigate } from 'react-router-dom';
import liked from '../assets/icons/liked.svg'
import { Context } from '..';


export default function Header() {
  const {product} = useContext(Context)
  const history = useNavigate()
  return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <NavLink onClick={() => {
              product.setCurrentPage('shop')
              history(SHOP_ROUTE)
            }} 
            style={{color: 'black', fontSize: 40}}
            >
              MarketPlace
            </NavLink>
          <Container className=' d-flex justify-content-end'>
            <Image onClick={() => {
              product.setCurrentPage('favorite')
              console.log(product.currentPage)
              history(FAVORITE_ROUTE)
            }} 
              src={liked} width={25} height={25} className='m-2 product-card' style={{cursor:'pointer'}}
            />
            <NavLink style={{color: 'black'}} >
              <BasketModal />
            </NavLink>
          </Container>
        </Container>
      </Navbar>
  )
}
