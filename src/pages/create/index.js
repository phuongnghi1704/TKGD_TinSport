import React, { Component } from 'react';
import { Layout } from 'antd';
import CardUser from '../../components/user-card'
import {Link} from 'react-router-dom'
import { Row, Col, Tag, Icon } from "antd";
import styled from 'styled-components'
import {CreateForm} from '../../components/create'
import {WeatherBar, Footer} from '../../components/common'
const { Header } = Layout;
class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <>
      <Header style={{background:'#4690DB',height:120}}>
        <div style={{display:'flex'}}>
          <Link to='/'>
          <h1 style={{color:'white',fontSize:'70px',marginTop:'24px'}}>TinSport</h1>
          </Link>
        <div style={{paddingLeft:'700px'}}>
        <CardUser  />
        </div>
        </div>
        <Row>
        </Row>
      </Header>
      <WeatherBar/>
      <CreateForm/>
      <Footer/>
      </>
      )
  }
}
export default CreatePage