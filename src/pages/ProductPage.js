import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'

export default function ProductPage() {
  const {product} = useContext(Context)
  const [item, setItem] = useState({info: []})
  const {id} = useParams()
  const history = useNavigate()

  useEffect(() => {
    fetchOneProduct(id).then(data => setItem(data))
  },[id])

  return (
    <Container className='mt-4 mb-4 p-4 bg-light bg-gradient content-wrapper'>
      <Row className=''>
        <Col md={4} className='align-items-center'>
          <Container className='mt-4 d-flex justify-content-center product-container'>
            {item.category}
          </Container>
          <Image fluid src={item.image} className='m-5 product-page-img'/>
        </Col>
        <Col md={8}>
            <div>
              <h2 className='m-3'>{item.title}</h2>
              <p className='m-3 product-page-description'>
                {item.description}
              </p>
            </div>
            <div className=' d-flex justify-content-between'>
              <h3 className='m-3'>Price: {item.price}$</h3>
            </div>  
        </Col>
        <div className=' d-flex justify-content-center'>
          < Button variant="primary" className='m-4 back-btn product-page-btn' 
            onClick={() => {
              product.setCurrentPage('shop')
              history(SHOP_ROUTE)
            }} 
            >
              Back to main page
            </Button>
        </div>
      </Row>
    </Container>
  )
}
