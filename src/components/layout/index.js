import React, { Component, Children } from 'react';
import { Layout, Breadcrumb } from 'antd';
import CardUser from '.././user-card'
import { Row, Col, Tag, Icon } from "antd";

const { Header, Footer, Content } = Layout;

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
        <h1 style={{color:'white',fontSize:'70px',marginTop:'24px'}}>TinSport</h1>
        <CardUser   />
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
      <Footer style={{  }}>
        <div>
          <span style={{fontSize:'18px',fontWeight:550}}>Thông tin liên hệ</span>
          <img style={{paddingLeft:'150px',paddingRight:'100px'}} src="https://img.icons8.com/color/40/000000/facebook-new.png"></img>
          <img style={{paddingLeft:'150px',paddingRight:'100px'}} src="https://img.icons8.com/cute-clipart/40/000000/instagram-new.png"></img>
          <img style={{paddingLeft:'150px',paddingRight:'100px'}} src="https://img.icons8.com/color/40/000000/gmail.png"></img>
          <img style={{paddingLeft:'150px',paddingRight:'100px'}} src="https://img.icons8.com/android/40/000000/google-plus.png"></img>

        </div>
      </Footer>
    </Layout>
    
    );
  }
}

export default LayoutContent;