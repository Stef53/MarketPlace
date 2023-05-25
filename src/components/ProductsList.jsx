import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row as Form } from 'react-bootstrap'
import ProductItem from './ProductItem'
import useList from './hooks/useList'

const ProductsList = observer(() =>  {
  const {product} = useContext(Context)
  
  return (
    <Form className='d-flex'>
      {useList(product).filter(item => item.title.toLowerCase().includes(product.searchValue.toLowerCase())).map(item => 
        <ProductItem key={item.id} item={item} />
      )}
    </Form>
  )
})

export default ProductsList