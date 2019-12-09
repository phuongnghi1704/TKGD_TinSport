import React, { Component, Children } from 'react';
import { Layout, Breadcrumb } from 'antd';
import CardUser from '.././user-card'
import { Row, Col, Tag, Icon } from "antd";
import {Link} from 'react-router-dom'
import {Footer} from '../common'
const { Header, Content } = Layout;

class LayoutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout className="layout">
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
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
         <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
    <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
       </Breadcrumb>
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
      </Content>
      <Footer/>
    </Layout>
    
    );
  }
}

export default LayoutContent;