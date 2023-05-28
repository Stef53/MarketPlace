import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import ProductsList from '../components/ProductsList'
import { Context } from '..'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts'
import { useNavigate } from 'react-router-dom'

const FavoritePage = observer(() => {
  const {product} = useContext(Context)
  const history = useNavigate()
  

  const showItems = () => {
    return(
      <div>
        <div className='container-fluid favorite-header my-3 bg-light'>Favorite</div>
        <ProductsList />
      </div>
    )
  }
  return (
    <Container className='content-wrapper w-75 bg-light bg-gradient mt-5 px-4'>
      <Row>
        <Col>
          {
            product.products.filter((el) => el.isLiked === true).length > 0 ? showItems() : <h2 className=''>No favorites</h2>
          } 
          <div className=' d-flex justify-content-center my-4'>
            <Button className='back-btn' variant="primary" 
              onClick={() => {
                product.setCurrentPage('shop')
                history(SHOP_ROUTE)
              }}>
                Back to main page
              </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
})

export default FavoritePage