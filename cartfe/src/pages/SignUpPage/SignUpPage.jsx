import { Checkbox } from 'antd'
import React from 'react'
import { MailTwoTone, EyeInvisibleTwoTone, ContactsTwoTone, PhoneTwoTone } from '@ant-design/icons'

const SignUpPage = () => {
  return (
    <div style={{backgroundColor: ' #efefef', padding: ' 0 120px', height: '1000px', paddingLeft: '380px'}}>
      <div style={{paddingTop: '20px'}}>
      <div style={{backgroundColor: '#fff', paddingTop: '20px', paddingLeft: '30px', width: '700px'}}>
        <div>
          <span style={{fontSize: '25px'}}>Đăng ký</span>
        </div>
        <div style={{display: 'flex', paddingTop: '20px', gap: '50px'}}>
          <div style={{width: '120px', fontSize: '25px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', paddingRight: '150px'}}>
            <ContactsTwoTone style={{width: '20px'}}/>
            <input type="firstname" name="firstname" placeholder='First Name' maxLength={30} style={{border: 'none', fontSize: '20px', outline: 'none'}}/>
          </div>
          <div style={{width: '150px'}}>
            <input type="lastname" name="lastname" placeholder='Last Name' maxLength={30} style={{width: '275px', padding: '10 0px', fontSize: '20px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}/>
          </div>
        </div>
        <div style={{paddingTop: '20px'}}>
          <div style={{width: '600px', padding: '10 0px', fontSize: '25px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex'}}>
            <MailTwoTone style={{width: '20px'}}/>
            <div style={{outline: 'none', border: 'none'}}>
            <input type="email" name="email" placeholder='Email' maxLength={30} style={{border: 'none', fontSize: '20px', outline: 'none'}}/>
            </div>
          </div>
        </div>
        <div style={{paddingTop: '20px'}}>
          <div>
            <input type="email" name="email" placeholder='Confirm Email' maxLength={30} style={{width: '596px', padding: '10 0px', fontSize: '20px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}/>
          </div>
        </div>
        <div style={{paddingTop: '20px'}}>
          <div style={{width: '600px', padding: '10 0px', fontSize: '25px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex'}}>
            <PhoneTwoTone style={{width: '20px'}}/>
            <div style={{outline: 'none', border: 'none'}}>
            <input type="phone" name="phone" placeholder='Phone Number' maxLength={30} style={{fontSize: '20px', border: 'none', outline: 'none'}}/>
            </div>
          </div>
        </div>
        <div style={{paddingTop: '20px'}}>
          <div style={{width: '600px', padding: '10 0px', fontSize: '25px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}>
            <EyeInvisibleTwoTone style={{width: '20px'}}/>
            <input type="password" name="password" placeholder='Password' maxLength={30} style={{fontSize: '20px', border: 'none', outline: 'none'}}/>
          </div>
        </div>
        <div style={{paddingTop: '20px'}}>
          <div>
            <input type="password" name="password" placeholder='Confirm Password' maxLength={30} style={{width: '596px', padding: '10 0px', fontSize: '20px', border: '1px solid rgb(120, 120, 120)', outline: 'none', fontFamily: 'inherit', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}/>
          </div>
        </div>
        <div style={{paddingTop: '50px'}}>
          <Checkbox>Đồng ý với điều khoản và chính sách</Checkbox>
        </div>
        <div style={{paddingTop: '20px', paddingLeft: '82px', paddingBottom: '20px'}}>
          <button style={{backgroundColor: 'rgb(255, 57, 69)', border: '1px solid rgb(255, 57, 69)', width: '500px', height: '45px'}}><span style={{fontSize: '15px', color: '#fff'}}>Đăng ký</span></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUpPage
