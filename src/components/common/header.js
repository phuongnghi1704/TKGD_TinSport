import React, { Component } from 'react'
import CardUser from '.././user-card'
import { Row, Col, Tag, Icon } from "antd"
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 30px 0;
`

const Title = styled.div`
	font-family: Shadows Into Light;
	font-style: normal;
	font-weight: normal;
	font-size: 80px;
	line-height: 58px;
	text-align: center;
	transform: translateY(20px);
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }


  render() { 
    return ( 
      <Wrapper>
				<Title>TinSport</Title>
				<CardUser/>
      </Wrapper>
    )
  }
}
 
export default Header