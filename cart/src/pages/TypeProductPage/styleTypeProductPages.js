import { Col } from "antd";
import styled from "styled-components";
//justify-content: flex-start;
//align-items: flex-end;

export const WrapperTypeProductPage = styled.div`
    display: flex;
    justify-content: center; 
    gap: 15px;
    
`
export const WrapperNavBar = styled(Col)`
    background: #fff; 
    marginRight: 10px;
    padding: 10px;
    border-radius: 6px;
    height: fit-content;
`
export const WrapperProducts = styled(Col)`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 2px;
    flex-wrap: wrap;
`
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 20px;
    justify-content: flex-start;
`