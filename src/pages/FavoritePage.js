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
    <Container className='favorite-container w-75 align-items-center bg-light bg-gradient mt-5 px-4'>
      <Row className=''>
        <Col className=' justify-content-center align-items-center'>
          {
            product.products.filter((el) => el.isLiked === true).length > 0 ? showItems() : <h1 className=' align-items-center' style={{textAlign:'center'}}>No favorites</h1>
          } 
          <div className=' d-flex justify-content-center my-4'>
            <Button style={{fontSize:20, width:300,}} variant="primary" 
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