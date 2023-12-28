import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'

const ProductDetailPage = () => {
  return (
    <div style={{padding: '0 120px', backgroundColor: '#efefef', paddingLeft: '300px', height: '700px'}}>
      <div style={{paddingTop: '20px'}}>
        <span style={{fontSize: '20px'}}>Thông tin sách</span>
      </div>
      <div>
        <ProductDetailComponent/>
      </div>
    </div>
  )
}

export default ProductDetailPage
