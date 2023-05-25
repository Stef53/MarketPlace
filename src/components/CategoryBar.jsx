import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryBar = observer(() => {
  const {product} = useContext(Context) 
  return (
    <ListGroup as="ul">
      {product.categories.map(category =>
      <ListGroup.Item 
        style={{cursor: 'pointer'}}
        active = {category.id === product.selectedCategory.id}
        key={category.id} 
        onClick={() => product.setSelectedCategory(category)}
      >
        {category.name}
      </ListGroup.Item>
      )}
    </ListGroup>
  )
})

export default CategoryBar