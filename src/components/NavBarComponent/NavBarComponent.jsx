import React from 'react'
import { Checkbox, Rate } from 'antd'
import { WrapperBelowText, WrapperContent, WrapperLabelText } from './styleNav'

const NavBarComponent = () => {
  const onChange = () => {

  }
  const RenderContent = (type, options) => {
    switch(type) {
      case 'checkbox':
          return (
            <Checkbox.Group style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '6px', marginLeft: '5px' }} onChange={onChange}>
                {options.map((option) => {
                  return (
                    <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>           
                  )
                })}
          </Checkbox.Group>
          )
      case 'star': 
                return options.map((option) => {
                  return (
                    <div style={{display: 'flex'}}>
                      <Rate style={{fontSize: '10px', marginLeft: 0, marginTop: '10px', marginLeft: '5px'}} disabled defaultValue={option} />          
                      <span> {`tu ${option} sao`}</span>
                    </div>
                    
                  )
                })
      case 'price': 
                return options.map((option) => {
                  return (
                    <div style={{padding: '4px', color: 'rgb(56, 56, 61)', borderRadius: '10px', backgroundColor: 'rgb(238, 238, 238)', width: 'fit-content', marginLeft: '5px'}}>{option}</div>
                  )
                }) 
      default: 
        return {}
    }
  }
  return (
    <div style={{backgroundColor: '#efefef',  paddingTop: '22px'}}>
        <div>
        <WrapperContent style={{backgroundColor: '#fff', width: 'fit-content'}}>
          <div>
          <div style={{width: '22px', backgroundColor:'#efefef'}}></div>
            <WrapperLabelText style={{marginLeft: '5px', width: 'fit-content', backgroundColor: '#fff'}}>Bộ lọc tìm kiếm</WrapperLabelText>
          </div>
          <div><WrapperBelowText style={{marginLeft: '5px'}}>Thể loại</WrapperBelowText></div>
          <div>
            {RenderContent('checkbox', [
              {value: 'a', label: 'Văn học hiện đại'},
              {value: 'b', label: 'Văn học kinh điển'},
              {value: 'c', label: 'Kinh dị'},
              {value: 'd', label: 'Lãng mạn'},
              {value: 'e', label: 'Văn học thiếu nhi'},
              {value: 'f', label: 'Kinh doanh'},
              {value: 'g', label: 'Nghệ thuật'},
              {value: 'h', label: 'Khác'},
            ])}
          </div>
        </WrapperContent>
        <WrapperContent style={{backgroundColor: '#fff'}}>
            <WrapperBelowText style={{marginTop: '15px', marginLeft: '5px'}}>Giá</WrapperBelowText>
            {RenderContent('price', ['Dưới 80.000', '80.000 - 120.000', '120.000 - 280.000', 'Trên 280.000'])}
        </WrapperContent>
          <WrapperContent style={{backgroundColor: '#fff', width: '245px', height: '200px'}}>
            <div><WrapperBelowText style={{marginTop: '15px', marginLeft: '5px'}}>Đánh giá</WrapperBelowText></div>
            {RenderContent('star', [3, 4, 5])}
          </WrapperContent>
        </div>
    </div>
  )
}

export default NavBarComponent