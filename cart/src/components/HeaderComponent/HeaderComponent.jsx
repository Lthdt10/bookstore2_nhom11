import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';
import ButtoninputSearch from '../ButtoninputSearch/ButtoninputSearch';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import SignInPage from '../../pages/SignInPage/SignInPage';

const HeaderComponent = () => {
  const singinlink = () => {
    <SignInPage/>
  };
  return (
    <div>
      
        <WrapperHeader>
          <Col span={4}>
            <WrapperTextHeader>UETHUVIENSACH</WrapperTextHeader>
          </Col>
          <Col span={12}>
          <ButtoninputSearch size="large" placeholder="Bạn đọc gì hôm nay" textButton="Tìm kiếm"  style={{borderColor: 'rgb(120, 120, 120)'}}/>
          </Col>
          <Col span={8} style={{display: 'flex', gap: '25px', float: 'right', alignItems: 'center'}}>
            <WrapperHeaderAccount>
              <HomeOutlined style={{fontSize: '25px', marginLeft: '15px'}}/>
              <div>
                <WrapperTextHeaderSmall >Trang chủ</WrapperTextHeaderSmall>
              </div>
            </WrapperHeaderAccount>
            <WrapperHeaderAccount>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{fontSize: '27px', color: 'rgb(26, 148, 255)'}}/>
            </Badge>
              <div>
                <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
              </div>
              <div>
                <Button size={'10px'} onClick={singinlink} style={{marginLeft: '30px'}}>Quản lý tài khoản</Button>
              </div>
            </WrapperHeaderAccount>
          </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent