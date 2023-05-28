import { observer } from 'mobx-react-lite'
import React, { useContext, } from 'react'
import { Container, Dropdown, Form, } from 'react-bootstrap'
import { Context } from '..'

const Filters = observer(() => {
  const {product} = useContext(Context)

  const sortProducts = (name, value) => {
    switch(name) {
      case 'Alfabeticaly': product.setProducts([...product.products].sort((a, b) => a[value].localeCompare(b[value])))
        break
      case 'Сheap first': product.setProducts([...product.products].sort((a, b) => a[value] - b[value]))
        break
      case 'Expensive first': product.setProducts([...product.products].sort((a, b) => b[value] - a[value]))
        break
      default: alert('Filter erorr')
    }
  }

  return (
    <Container className=' d-flex align-items-end'>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Filters
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {product.filters.map(filter =>
            <Dropdown.Item 
              key={filter.id} 
              value={filter.value}
              onClick={() => {
                product.setSelectedFilter(filter)
                sortProducts(filter.name, filter.value)
              }}
            >
              {filter.name}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
      <Container className='d-flex justify-content-end' >
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => {
              product.setSearchValue(event.target.value)
              product.setTotalCount(product.products.filter(item => item.title.toLowerCase().includes(product.searchValue.toLowerCase())).length)
            }}
          />
        </Form>
      </Container>
    </Container>

  )
})

export default Filters