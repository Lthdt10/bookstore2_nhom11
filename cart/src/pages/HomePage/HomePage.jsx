import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct, WrapperProducts } from './styleHome'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import { Col } from 'antd'

const HomePage = () => {
  const arr = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá cao đến thấp', 'Giá thấp đến cao']
  return (
    <div style={{backgroundColor: '#efefef',padding: '0 100px', display: 'flex', width: 'fit-content'}}>HomePage
      <div style={{backgroundColor: '#efefef'}}><NavBarComponent style={{textAlign: 'left', float: 'left', marginRight: '15px', padding: '10px'}}/> </div>
      <div style={{float: 'right', padding: '0 0 0 15px', backgroundColor: '#efefef', display: 'flex'}}>
      <Col>
        <div style={{backgroundColor: '#fff', fontSize: '20px', marginTop: '22px', height: '60px', width: '1000px', float: 'right', padding: '0 5px'}}>
          <WrapperTypeProduct>
            <p style={{textAlign: 'left',  fontSize: '20px', width: '5px', marginTop: '1px', paddingBottom: '15px', flexWrap: 'nowrap'}}>UETHUVIENSACH</p>
          
            {arr.map((item) => {
              return(
                <TypeProduct style={{paddingLeft: '0px'}} name={item} key={item}/>
              )
            })}
          
          </WrapperTypeProduct>
        </div>    
        <Col span={100}>
        <WrapperProducts style={{marginTop: '15px', float: 'right', alignItems: 'left', paddingLeft: '0%'}}>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
          </WrapperProducts> 
          </Col>
        </Col>
      </div>
      <div style={{ padding: '0 10px', backgroundColor: '#efefef'}}>
          
          
    </div>
    </div>
  )
}

export default HomePage