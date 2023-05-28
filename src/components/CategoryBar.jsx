import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryBar = observer(() => {
  const {product} = useContext(Context) 

  const paginationControl = (category) => {
    product.setSelectedCategory(category)
    product.setPage(1)
    if(category.name === 'all categories'){
      product.setTotalCount(product.products.length)
    } else product.setTotalCount(product.products.filter((el) => el.category === category.name).length)
  }
  return (
    <ListGroup as="ul">
      {product.categories.map(category =>
      <ListGroup.Item 
        className='category-bar-item'
        active = {category.id === product.selectedCategory.id}
        key={category.id} 
        onClick={() => paginationControl(category)}
      >
        {category.name}
      </ListGroup.Item>
      )}
    </ListGroup>
  )
})

export default CategoryBar