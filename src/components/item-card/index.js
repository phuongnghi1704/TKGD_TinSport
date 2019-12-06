import React, { Component } from 'react';
import {Link} from'react-router-dom'
import {Button} from 'antd'
class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( 
            <div style={{background:'white',borderStyle:'groove',borderRadius:'15px',width:900,height:120,margin:'20px',padding:'10px',display:'flex'}}>
                <div style={{width:500}}>
                <h3>{item.type} || {item.time} || {item.address} </h3>
                <p>{item.detail}</p>
                </div>    
                <Link to='/join'>
                <Button style={{float:'right',margin:'10px 10px 10px 400px'}} type='primary'>Xem chi tiết</Button>
                </Link>
            </div>
         );
    }
}
 
export default ItemCard;