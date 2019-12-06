import React, { Component } from 'react';
import LayoutContent from '../../components/layout'
import CardUser from '../../components/user-card'
import {Icon} from'antd'
import './style.css'
class JoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LayoutContent title='Tham gia kèo'>
                <div className='item-info'>
                  <h2>Thông tin kèo</h2>
                  <div className='user-create'>
                  <span style={{fontSize:'16px',fontWeight:500}}>Người tạo</span>
                  <CardUser />
                  </div>
                  <div>
                
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