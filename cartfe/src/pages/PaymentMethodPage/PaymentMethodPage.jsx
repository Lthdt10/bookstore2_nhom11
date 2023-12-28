import React from 'react'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'

const PaymentMethodPage = () => {
  return (
    <div style={{padding: '0 120px', backgroundColor: '#efefef', height: '500px', paddingLeft: '270px'}}>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <span style={{fontSize: '20px'}}>Thanh toán</span>
        </div>
        <div><PaymentMethod/></div>
    </div>
  )
}

export default PaymentMethodPage
