import React, { useContext, useState } from 'react'
import { Form, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import basket from '../../assets/icons/basket.png'
import { Context } from '../..';
import BasketItem from '../BasketItem';
import { observer } from 'mobx-react-lite';

const BasketModal = observer(() => {
  const {product} = useContext(Context)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showItems = () => {
    return(
      <div>
        {product.basketProducts.map(item => 
          <BasketItem key={item.id} item={item} />
        )}
      </div>
    )
  }
  const showNothing = () => {
    return(
      <div>
        <h2 style={{textAlign: 'center'}}>Basket is lonely without products</h2>
      </div>
    )
  }
  const totalPrice = () => {
    let sum = 0
    for(let i = 0; i < product.basketProducts.length; i++) {
      sum += product.basketProducts[i].price * product.basketProducts[i].count
    }
    return sum
  }
  return (
    <>
      <Image className='m-1 product-card' width={30} height={30} style={{color: 'white'}} src={basket} onClick={handleShow}/>
      <span 
        className=' '
        style={{border:'1px solid lightgray', color:'black', background:'white', borderRadius:'50%', width:'10', height:'10', fontSize:12}}
      >
        {product.basketProducts.length}
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {
              product.basketProducts.length > 0 ? showItems() : showNothing()
            }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>Total price:  {totalPrice()}$</div>
          <Button variant="primary" onClick={handleClose}>
            Make an order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
})

export default BasketModal