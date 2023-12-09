import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Row, Pagination, Col } from 'antd'
import { WrapperTypeProductPage, WrapperProducts, WrapperNavBar } from './styleTypeProductPages'

const TypeProductPage = () => {
  return (
    <div style={{padding: '0 120px', background: '#efefef', height: '100%'}}>
            
        <Row style={{ flexWrap: 'nowrap', paddingTop: '10px'}}>
            <WrapperNavBar span={5} style={{textAlign: 'left'}}>
                <NavBarComponent/>
            </WrapperNavBar>
            <Col span={20}>
            <div style={{padding: '0 120px', height: '1000px', width: '100%', backgroundColor: '#efefef'}}>
                <WrapperTypeProductPage style={{height: '320px'}}>
                    <WrapperProducts style={{display: 'flex', gap: '12px'}}>
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
                </WrapperTypeProductPage>
            </div>
                <Pagination defaultCurrent={1} total={100} style={{textAlign: 'center', marginTop: '10px'}}/>
            </Col>
        </Row>

    </div>
  )
}

export default TypeProductPage