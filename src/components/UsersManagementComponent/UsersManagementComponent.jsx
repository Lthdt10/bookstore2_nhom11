import React from 'react'
import {WrapperTable} from './styleUsersManagement'
import { Table } from 'antd';
const dataSource = [
    {
      key: '1',
      name: '1',
      age: 'khoa',
      address: 'abcxyz@gmail.com',
      phonenumber: '0987654321',
    },
    {
      key: '2',
      name: '2',
      age: 'khoa' ,
      address: 'abcxyz@gmail.com',
      phonenumber: '0987654321',
    },
    {
        key: '3',
        name: '3',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
    },
    {
        key: '4',
        name: '4',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
    },
    {
        key: '5',
        name: '5',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
    {
        key: '6',
        name: '6',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
      {
        key: '7',
        name: '7',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
      {
        key: '8',
        name: '8',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
      {
        key: '9',
        name: '9',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
      {
        key: '10',
        name: '10',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
      {
        key: '11',
        name: '11',
        age: 'khoa',
        address: 'abcxyz@gmail.com',
        phonenumber: '0987654321',
      },
  ];
  
  const columns = [
    {
      title: 'STT',
      dataIndex: 'name',
      key: 'name',
      backgroundColor: '#efefef',
    },
    {
      title: 'Tên tài khoản',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'address',
      key: 'address',
    },
    {  
      title: 'Số điện thoại',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
    },
  ];
const UsersManagementComponent = () => {
  return (
    <div style={{backgroundColor: '#fff'}}>
        <div style={{paddingTop: '50px'}}>
            <span style={{fontSize: '20px', fontWeight: 'bold'}}>Danh sách người dùng</span>
        </div>
        <WrapperTable style={{paddingRight: '100px'}}>
            <Table dataSource={dataSource} columns={columns}/> 
        </WrapperTable>
        <div style={{paddingTop: '10px', paddingBottom: '20px'}}>
            <button style={{backgroundColor: '#107c41', borderColor: '#107c41', borderRadius: '5px', height: '30px', width: '190px'}}><span style={{fontSize: '15px', color: '#fff'}}>Xuất file Excel</span></button>
        </div>
    </div>
  )
}

export default UsersManagementComponent