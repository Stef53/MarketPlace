import React, { useContext } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Context } from '..'
import plus from '../assets/icons/plus.png'
import minus from '../assets/icons/minus.png'
import { observer } from 'mobx-react-lite'

const BasketItem = observer(({item}) => {
  const {product} = useContext(Context)

  function addToBasket(item) {
    if(product.basketProducts.includes(item)){
      item.count = item.count + 1
    }
    else {
      item.count = 1
      product.setAddBasketProducts(item)
    }
  }

  function deleteBasketItem(item) {
    if(item.count === 1){
      product.setDeleteBasketProducts(item)
    } else item.count = item.count - 1
  }
  return (
    <Container 
      className='mt-2 mb-2 p-2 bg-light bg-gradient'
      style={{border:'2px solid lightgray', borderRadius:'30px', boxShadow:'3px 3px 3px gray'}}
    >
      <Row>
        <Col xs={4}>
          <Image width={100} height={100} src={item.image} className='m-1'/>
        </Col>
        <Col xs={5} className='mt-2'>
          <p >{item.title}</p>
        </Col>
        <Col xs={3} className='mt-3 align-items-center'>
          <div className=''>Price:</div>
          <div className=''>{item.price * item.count}$</div>
          <div className=' d-flex'>
            <Image 
              className='m-1 product-card' src={minus} width={20} height={20} style={{cursor: 'pointer',}} 
              onClick={() => deleteBasketItem(item)}
            /> 
            <div className='ml-1'>{item.count}</div>
            <Image 
                className='m-1 product-card' src={plus} width={20} height={20} style={{cursor: 'pointer',}} 
                onClick={() => addToBasket(item)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
})

export default BasketItem