import React, { Component } from 'react';
import styled from 'styled-components'
import { Layout, Breadcrumb } from 'antd';
import CardUser from '.././user-card'
import { Row, Col, Tag, Icon } from "antd";

const { Header, Footer, Content } = Layout;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #bfbfbf;
`
const Item = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
`

class WeatherBar extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }


  render() { 
    return ( 
      <Wrapper>
        <Item>10/11/2019</Item>
        <Item>8:30</Item>
        <Item>TP.HCM</Item>
        <Item>Ngay dep troi</Item>
      </Wrapper>
    )
  }
}
 
export default WeatherBar