import React, { Component } from 'react';
import LayoutContent from '../../components/layout'
import CardUser from '../../components/user-card'
import {Icon, Button, Row} from'antd'
import './style.css'
class JoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LayoutContent title='Tham gia hội'>
                <div className='item-info'>
                  <h2>Thông tin hội</h2>
                  <div className='user-create'>
                  <span style={{fontSize:'16px',fontWeight:500}}>Người tạo</span>
                  <CardUser />
                  </div>
                  <Row></Row>
                  <div>
                    <Button style={{transform: 'translateX(350px)', color: 'black'}} type='primary' htmlType='submit'>Tham gia hội</Button>
                  </div>
                
                </div>
                <div className='users-info'>
                    <CardUser/> 
                    <CardUser/> 
                    <CardUser/> 
                    <CardUser/> 
                    <div className='div-icon-user-more'>
                    <Icon className='icon-more' type="double-right" />
                    </div>
                </div>
            </LayoutContent>
         );
    }
}
 
export default JoinPage;