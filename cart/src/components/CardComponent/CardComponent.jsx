import React from 'react'
import { StyleNameProduct, WrapperPriceText, WrapperDiscountText, WrapperCardStyle } from './styleCard'
import { WrapperReportText } from './styleCard'
import { StarFilled } from '@ant-design/icons'

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        style={{ width: 240 }}
        headStyle={{width: '200px', height: '200px'}}
        style={{width: 200}}
        bodyStyle={{padding: '10px'}}
        cover={<img alt="example" src="cart\tamlyhocvetien.jpg" />}
    >
        <StyleNameProduct>Tâm Lý Học Về Tiền</StyleNameProduct>
        <WrapperReportText>
            <span><StarFilled style={{fontSize:'10px', color:'orange' }}/><StarFilled style={{fontSize:'10px', color:'orange' }}/><StarFilled style={{fontSize:'10px', color:'orange' }}/><StarFilled style={{fontSize:'10px', color:'orange' }}/><StarFilled style={{fontSize:'10px', color:'orange' }}/></span>
            <span style={{color: '#ddd'}}> | Đã bán 5k+</span>
        </WrapperReportText>
        <WrapperPriceText style={{marginTop: '30px'}}>
            125.000<sup>đ</sup>
            <WrapperDiscountText style={{backgroundColor: '#ddd', borderRadius:'25px', alignItems: 'center', width:'20px'}}>-34%</WrapperDiscountText>
        </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent