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
          <NavLink
            className='logo' 
            onClick={() => {
              product.setCurrentPage('shop')
              history(SHOP_ROUTE)
            }} 
          >
            MarketPlace
          </NavLink>
          <Container className=' d-flex justify-content-end'>
            <Image 
              src={liked} width={25} height={25} className='m-2 product-card'
              onClick={() => {
                product.setCurrentPage('favorite')
                history(FAVORITE_ROUTE)
              }} 
            />
            <NavLink>
              <BasketModal />
            </NavLink>
          </Container>
        </Container>
      </Navbar>
  )
}
