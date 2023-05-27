import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row as Form } from 'react-bootstrap'
import ProductItem from './ProductItem'

const ProductsList = observer(() =>  {
  const {product} = useContext(Context)
  let thisProduct = []
  
  const firstProduct = product.limit * (product.page - 1) - 1
  const lastProduct = product.limit * product.page 
    
  if(product.selectedCategory.name === 'all categories'){
    thisProduct = product.products.filter((el) => {
      return (firstProduct < product.products.indexOf(el)) && (product.products.indexOf(el) < lastProduct)
    })
  } else {
    thisProduct = product.products.filter((el) => {
      return el.category === product.selectedCategory.name
    })
    thisProduct = thisProduct.filter((el) => {
      return (firstProduct < thisProduct.indexOf(el)) && (thisProduct.indexOf(el) < lastProduct)
    })
  }
  if(product.currentPage === 'favorite'){
    thisProduct = product.products.filter((el) => el.isLiked === true)
  }
  
  return (
    <Form className='d-flex'>
      {thisProduct.filter(item => item.title.toLowerCase().includes(product.searchValue.toLowerCase())).map(item => 
        <ProductItem key={item.id} item={item} />
      )}
    </Form>
  )
})

export default ProductsList