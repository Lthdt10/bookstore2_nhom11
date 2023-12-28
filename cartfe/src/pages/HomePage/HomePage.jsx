import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './styleHome'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import { Col, Pagination } from 'antd'

const HomePage = () => {
  const arr = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá cao đến thấp', 'Giá thấp đến cao']
  return (
    <div style={{backgroundColor: '#efefef',padding: '0 100px', display: 'flex', width: 'fit-content', paddingLeft: '50px', paddingRight: '20px'}}>HomePage
      <div style={{backgroundColor: '#efefef'}}><NavBarComponent style={{textAlign: 'left', float: 'left', marginRight: '15px', paddingTop: '10px', paddingLeft: '10px'}}/> </div>
      <div style={{float: 'right', padding: '0 0 0 15px', backgroundColor: '#efefef', display: 'flex'}}>
      <Col span={120} style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{backgroundColor: '#fff', fontSize: '20px', marginTop: '22px', height: '80px', width: '1030px', float: 'right', padding: '0 5px'}}>
          <WrapperTypeProduct style={{width: '900px', display: 'inline-block'}}>
            <div>
              <p style={{textAlign: 'left', fontSize: '18px', marginTop: '9px', height: '15px'}}>UETHUVIENSACH</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'flex-end', gap: '40px', paddingTop: '8px', cursor: 'pointer', position: 'relative', content: "", paddingBottom: '8px'}}>
            {arr.map((item) => {
              return(
                <div style={{borderBottom: '4px solid rgb(11, 116, 229)', borderRadius: '2px', display: 'flex'}}>
                <TypeProduct style={{paddingLeft: '0px'}} name={item} key={item}/>
                </div>
              )
            })}
            </div>
          </WrapperTypeProduct>
        </div>    
        <div style={{marginTop: '15px', float: 'right', alignItems: 'left', paddingLeft: '0%', display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
                <a href='http://localhost:3000/product-details'><CardComponent/></a>
          </div> 
          <div style={{paddingTop: '20px', paddingLeft: '340px', paddingBottom: '30px'}}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </Col>
      </div>
      <div style={{ padding: '0 10px', backgroundColor: '#efefef'}}>
          
          
    </div>
    </div>
  )
}

export default HomePage
