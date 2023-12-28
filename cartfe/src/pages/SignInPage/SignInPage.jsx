import React from 'react'
import { Image } from 'antd'
import imageTikiSignin from '../../images/tikisignin.jpg'
import imageFaceBookIcon from '../../images/facebookicon.jpg'
import imageGoogleIcon from '../../images/googleicon.jpg'

const SignInPage = () => {
  return (
    <div style={{backgroundColor: '#efefef', padding: '0 120px', paddingTop: '30px', display: 'flex', borderRadius: '5px', paddingLeft: '350px', height: '800px'}}>
      <div style={{paddingBottom: ' 20px', display: 'flex', height: '500px'}}>
        <div style={{backgroundColor: '#fff', paddingLeft: '10px', width: '560px', paddingBottom: '20px'}}>
          <div style={{paddingTop: '15px', paddingLeft: '20px'}}>
            <span style={{fontSize: '25px', fontWeight: 'bold'}}>Xin chào,</span>
          </div>
          <div style={{paddingTop: '5px'}}>
            <span style={{fontSize: '18px', paddingLeft: '20px'}}>Đăng nhập hoặc tạo tài khoản</span>
          </div>
          <form>
            <div style={{paddingLeft: '20px', paddingTop: '25px'}}>
              <input type="tel" name="tel" placeholder='Số điện thoại' maxLength={15} style={{width: '496px', padding: '10 0px', borderTop: 'none',borderRight: 'none',borderLeft: 'none', fontSize: '25px', color: 'rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderBottomWidth: 'thin'}}/>
            </div>
            <div style={{paddingTop: '35px', paddingLeft: '20px'}}>
              <button style={{backgroundColor: 'rgb(255, 57, 69)', borderRadius: '5px', width: '500px', height: '40px', borderColor: 'rgb(255, 57, 69)', offset: '0px'}}><span style={{fontSize: '20px', color: '#fff', fontWeight: '50px'}}>Tiếp tục</span></button>
            </div>
          </form>
          <div style={{ paddingLeft: '180px', paddingTop: '15px'}}>
            <span style={{color: 'rgb(13, 92, 182)', fontSize: '18px'}}>Đăng nhập bằng email</span>
          </div>
          <div style={{ paddingLeft: '200px', paddingTop: '50px'}}>
            <span style={{fontSize:'17px'}}>Hoặc tiếp tục bằng</span>
          </div>
          <div style={{paddingLeft: '207px', paddingTop: '10px'}}>
            <Image src={imageFaceBookIcon} alt="image FaceBookIcon" preview={false} style={{width: '55px'}}></Image>
            <Image src={imageGoogleIcon} alt="image GoogleIcon" preview={false} style={{width: '70px', paddingLeft: '15px'}}></Image>
          </div>
          <div style={{paddingLeft: '20px', paddingTop: '15px'}}>
            <span style={{fontSize: '15px', color: 'rgb(120, 120, 120)'}}>Bằng việc tiếp tục bạn đã đọc và đồng ý với <a href='https://hotro.tiki.vn/s/article/dieu-khoan-su-dung?_gl=1*yty7sk*_ga*MTY1NzczMTI0NS4xNjk1NzI1NTYy*_ga_S9GLR1RQFJ*MTcwMDY1NTcxNy4xNC4xLjE3MDA2NTU5MzcuNjAuMC4w' style={{color: 'rgb(120, 120, 120)'}}>điều khoản sử dụng</a> và <a href='https://tiki.vn/bao-mat-thong-tin-ca-nhan' style={{color: 'rgb(120, 120, 120)'}}>Chính sách bảo mật thông tin cá nhân</a> của UEThuVienSach</span>
          </div>
        </div>
        <div style={{backgroundColor: 'rgb(219, 238, 255)', width: '280px'}}>
          <Image src={imageTikiSignin} alt="image TikiSignin" preview={false} style={{width: '250px', paddingTop: '120px', paddingLeft: '50px', paddingRight: '15px'}}></Image>  
          <div style={{paddingTop: '20px', paddingLeft: '34px'}}>
            <span style={{color: 'rgb(11, 116, 229)', fontWeight: 'bold', fontFamily: 'inherit'}}>Mua sắm tại UEThuVienSach</span>
          </div>
          <div style={{paddingTop: '5px', paddingLeft: '62px'}}>
            <span style={{color: 'rgb(11, 116, 229)', fontFamily: 'inherit'}}>Siêu ưu đãi mỗi ngày</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
