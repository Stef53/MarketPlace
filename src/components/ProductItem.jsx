import React, { useContext } from 'react'
import { Col, Image, Card } from 'react-bootstrap'
import star from '../assets/icons/star.png'
import plus from '../assets/icons/plus.png'
import liked from '../assets/icons/liked.svg'
import unliked from '../assets/icons/unliked.svg'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/consts'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { toast } from 'react-toastify'

const ProductItem = observer(({item}) => {
  const {product} = useContext(Context)
  const history = useNavigate()

  const onHeartClick = (item) => {
    item.isLiked = !item.isLiked
    localStorage.setItem('favorite', JSON.stringify(product.products.filter((el) => el.isLiked === true)))
  }

  function addToBasket(item) {
    if(product.basketProducts.includes(item)){
      item.count = item.count + 1
    }
    else {
      item.count = 1
      product.setAddBasketProducts(item)
    }
  }

  const notify = () => toast(`${item.title} added to cart!`)

    return (
    <Col md={3} className='mt-3'>
      <Card className='product-card' border={"lightgray"}>
        <div>
          <div className='product-card'>
            <Image className='card-img' src={item.image}
              onClick={() => {
                product.setCurrentPage('product')
                history(PRODUCT_ROUTE + '/' + item.id)
              }} 
            />
          </div>
              <div>
              <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center' >
              <div>{item.category}</div>
              <div className='d-flex align-items-center'>
                <div>{item.rating.rate}</div>
                <Image src={star} width={13} height={13}/>
              </div>
            </div>
            <div className='product-title'>{item.title}</div>
            <div className='card d-flex bg-white'>
              <div className='mt-1 d-flex justify-content-between align-items-center'>
                <div className='m-1'>Price: {item.price}$</div>
                <div className=''>
                <Image className='m-1 product-card' src={item.isLiked ? liked: unliked} width={20} height={20}
                   onClick={() => {
                    onHeartClick(item)
                  }}
                /> 
                <Image 
                  className='m-1 product-card' src={plus} width={20} height={20}
                  onClick={() => {
                    addToBasket(item)
                    notify()
                  }}
                /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  )
})

export default ProductItem