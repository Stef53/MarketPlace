import React, { useContext, useEffect } from 'react'
import CategoryBar from '../components/CategoryBar';
import { Col, Container, Row as Form } from 'react-bootstrap';
import ProductsList from '../components/ProductsList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCategoryProducts, fetchProducts } from '../http/productAPI';
import Pages from '../components/Pages';
import Filters from '../components/Filters'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const ShopPage = observer(() => {
  const {product} = useContext(Context)
  
  useEffect(() => {
    fetchProducts().then(data => {
      product.setProducts(data)
    })
  },[product])
  
  async function categoriesProducts(category){
    if(category.name === 'all categories'){
      await fetchProducts().then(data => {
        product.setProducts(data)
        product.setTotalCount(data.length)
      })
    } else{
     await fetchCategoryProducts(category.name).then(data => {
        product.setCategoryProducts(data)
        product.setTotalCount(data.length)
        product.setPage(1)
      })
    }
  }

  return (
    <Container className=' align-items-center bg-light bg-gradient mt-5 mb-5' style={{border:'2px solid lightgray', borderRadius:30, boxShadow:'3px 3px 3px gray'}}>
      <Form className='mt-5'>
        <Col md={2}>
          <CategoryBar onClick={categoriesProducts(product.selectedCategory)}
          />
        </Col>
        <Col md={9}>
          <ToastContainer 
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Filters />
          <ProductsList />
          <Pages />
        </Col>
      </Form>
    </Container>
  )
})


export default ShopPage