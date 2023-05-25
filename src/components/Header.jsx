import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { SHOP_ROUTE } from '../utils/consts';
import BasketModal from './modals/BasketModal';


export default function Header() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink href = {SHOP_ROUTE} style={{color: 'white', fontSize: 30}}>MarketPlace</NavLink>
          <NavLink  style={{color: 'white'}} className='justify-content-end product-card'>
            <BasketModal />
          </NavLink>
        </Container>
      </Navbar>
  )
}
