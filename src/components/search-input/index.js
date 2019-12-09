import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Select } from 'antd';

const { Option } = Select;

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 600,marginLeft:'400px' }}
                    placeholder="Chọn môn thể thao"
                >
                    <Option value='football' >Môn đá banh</Option>
                    <Option value='basketball'>Môn bóng rổ</Option>
                    <Option value='volleyball' >Môn bóng chuyền</Option>
                </Select>
                <Link to='/create'>
                    <Button type='primary' style={{ float: "right" }}> + Tạo hội</Button>
                </Link>
            </div>
        );
    }
}

export default SearchInput;

