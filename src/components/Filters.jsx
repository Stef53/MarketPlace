import { observer } from 'mobx-react-lite'
import React, { useContext, } from 'react'
import { Button, Container, Dropdown, Form, } from 'react-bootstrap'
import { Context } from '..'

const Filters = observer(() => {
  const {product} = useContext(Context)
  let value = product.selectedFilter


  const sortProducts = (value) => {
    if (product.selectedCategory.name === 'all categories'){
      if(value === 'title'){
        let allProducts = [...product.products].sort((a, b) => a[value].localeCompare(b[value]))
        product.setProducts(allProducts)
      } else {
          let allProducts = [...product.products].sort((a, b) => a[value] - b[value])
          product.setProducts(allProducts)
        }
    } else {
      if(value === 'title'){
        let categoryProducts = [...product.categoryProducts].sort((a, b) => a[value].localeCompare(b[value]))
        product.setCategoryProducts(categoryProducts)
      } else {
          let categoryProducts = [...product.categoryProducts].sort((a, b) => a[value] - b[value])
          product.setCategoryProducts(categoryProducts)
        }
    }
  }
  return (
    <Container className=' d-flex align-items-end'>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Filters
        </Dropdown.Toggle>
        <Dropdown.Menu value={value}>
          {product.filters.map(filter =>
            <Dropdown.Item 
              key={filter.value} 
              value={filter.value}
              onClick={() => {
                product.setSelectedFilter(filter)
                sortProducts(filter.value)
              }}
            >
              {filter.name}
            </Dropdown.Item>
          )}
            <Dropdown.Item onClick={() => product.setProducts(product.favoriteProducts)}>
              Favorite
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Container className='d-flex justify-content-end' >
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => product.setSearchValue(event.target.value)}
          />
        </Form>
      </Container>
    </Container>

  )
})

export default Filters