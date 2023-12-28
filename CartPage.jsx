import React from 'react'
import CartComponent from '../../components/CartComponent/CartComponent'

const CartPage = () => {
  return (
    <div style={{padding: '0 120px', backgroundColor: '#efefef', height: '700px'}}>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <span style={{fontSize: '20px'}}>Giỏ hàng</span>
        </div>
        <div><CartComponent></CartComponent></div>
    </div>
  )
}

export default CartPage