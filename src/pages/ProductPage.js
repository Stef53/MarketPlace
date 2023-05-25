import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI'
import { SHOP_ROUTE } from '../utils/consts'

export default function ProductPage() {
  const [product, setProduct] = useState({info: []})
  const {id} = useParams()
  const history = useNavigate()

  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))
  },[id])

  return (
    <Container 
      className='mt-4 mb-4 p-4 bg-light bg-gradient justify-content-center'
      style={{border:'2px solid lightgray', borderRadius:'30px', boxShadow:'3px 3px 3px gray', minHeight:450}}
    >
      <Row className=''>
        <Col md={4} className='align-items-center'>
          <Container
            style={{width:260, height:40, fontSize:24, color:'white', background: 'gray', textTransform: 'uppercase', borderRadius:30}}
            className='mt-4 d-flex flex-column'
          >
            {product.category}
          </Container>
          <Image fluid style={{height:300, width:300}}  src={product.image} className='m-5'/>
        </Col>
        <Col md={8}>
            <div>
              <h2 className='m-3'>{product.title}</h2>
              <p
                className='m-3'
                style={{fontSize:20}}
              >
                {product.description}
              </p>
            </div>
            <div className=' d-flex justify-content-between'>
              <h3 className='m-2'>Price: {product.price}$</h3>
            </div>  
            <div className=' justify-content-center'>
            <Button style={{fontSize:20, width:300}} variant="secondary" className='m-4 fixed-bottom'onClick={() => history(SHOP_ROUTE)}>Back to main page</Button>
            </div>
        </Col>
      </Row>
    </Container>
  )
}
