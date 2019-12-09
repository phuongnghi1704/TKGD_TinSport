import React, { Component } from 'react';
import LayoutContent from '../../components/layout'
import SearchInput from '../../components/search-input'
import ItemCard from'../../components/item-card'
import { Button, Select,DatePicker } from 'antd';
import { Link } from 'react-router-dom'

const { Option } = Select;
class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: ''
        }
    }
    handleChange = value => {
        this.setState({chosen:value})
    }
    data=[{
        type:'Môn bóng đá',
        time:'20/11/2019',
        address:'Quận 1,TPHCM',
        detail:'Cần tìm người đi đá banh chung...'
    },
    {
        type:'Môn bóng rổ',
        time:'8/12/2019',
        address:'Quận 7,TPHCM',
        detail:'Nhóm đang thiếu người...'
    },
    {
        type:'Môn bóng chuyền',
        time:'20/3/2019',
        address:'Quận 5,TPHCM',
        detail:'Cần lập team đi train giải...'
    }]
    render() {
        const { chosen } = this.state
        return (
            <LayoutContent title="Danh sách hội">
                <div>
                    <Select
                        showSearch
                        style={{ width: 600, marginLeft: '400px' }}
                        placeholder="Chọn môn thể thao"
                        onChange={this.handleChange}
                    >
                        <Option value='football' >Môn đá banh</Option>
                        <Option value='basketball'>Môn bóng rổ</Option>
                        <Option value='volleyball' >Môn bóng chuyền</Option>
                    </Select>
                    <Link to='/create'>
                        <Button type='primary' style={{ float: "right" }}> + Tạo hội</Button>
                    </Link>
                </div>
                {
                    chosen ==='' ? (
                        <></>
                    ) : <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'5px'}}>
                        <div style={{padding:'10px'}}> 
                        <span>Quận</span>
                        <Select
                        size='small'
                        showSearch
                        style={{ width: 400, marginLeft: '5px' }}
                        placeholder="Chọn địa điểm..."
                        onChange={this.handleChange}
                    >
                        <Option value='q1' >Quận 1</Option>
                        <Option value='q2'>Quận 2</Option>
                        <Option value='q3' >Quận 3</Option>
                    </Select>
                        </div>
                        <div style={{padding:'10px'}}>
                        <span>Thời gian</span>
                    <DatePicker  style={{ width: 400, marginLeft: '5px' }} size='small' />
                        </div>
                    
                    </div>
                }
                <h1 align='center' style={{margin:'10px'}}>Hội mới</h1>
                <div style={{padding:'10px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                {this.data.map((obj,i)=> <ItemCard key={i} item ={obj}/>)}
                </div>
            </LayoutContent>
        );
    }
}

export default ListPage;