
import React from 'react'
import UserProfileComponent from '../../components/UserProfileComponent/UserProfileComponent'

const UserProfile = () => {
  return (
    <div style={{backgroundColor: '#efefef', padding: '0 120px', height: '500px', paddingLeft: '250px'}}>
        <div style={{paddingTop: '10px'}}><span style={{fontSize: '20px'}}>Thông tin tài khoản</span></div>
        <div><UserProfileComponent/></div>
    </div>
  )
}

export default UserProfile
