import React, { useContext, useEffect } from 'react'
import CategoryBar from '../components/CategoryBar';
import { Col, Container, Row as Form } from 'react-bootstrap';
import ProductsList from '../components/ProductsList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchProducts } from '../http/productAPI';
import Pages from '../components/Pages';
import Filters from '../components/Filters'
import 'react-toastify/dist/ReactToastify.css'


const ShopPage = observer(() => {
  const {product} = useContext(Context)
  
  useEffect(() => {
    fetchProducts().then(data => {
      product.setProducts(data)
      let favotireProducts = JSON.parse(localStorage.getItem('favorite'))
      product.products.map((el) => {
        for(let i = 0; i < favotireProducts.length; i++){
          if(el.id === favotireProducts[i].id){
            el.isLiked = true
            break
          } else {
              el.isLiked = false
          }
        }
        return el
      })
      product.setTotalCount(data.length)
    })
  },[product])
  
  return (
    <Container className=' align-items-center bg-light bg-gradient mt-5 mb-5' style={{border:'2px solid lightgray', borderRadius:30, boxShadow:'3px 3px 3px gray'}}>
      <Form className='mt-5'>
        <Col md={2}>
          <CategoryBar />
        </Col>
        <Col md={9}>
          <Filters />
          <ProductsList />
          <Pages />
        </Col>
      </Form>
    </Container>
  )
})


export default ShopPage