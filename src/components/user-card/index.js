import { Card, Icon, Avatar } from 'antd';
import React, { Component } from 'react';

const { Meta } = Card;

class CardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card
                style={{ width: 250,height:100, borderRadius:'20px',borderStyle:'groove',margin:'10px' }}
            >
                <Meta
                    avatar={<Avatar src="https://img.icons8.com/officel/16/000000/person-male.png" />}
                    title="Nghi Nguyen"
                    description="0987654321"
                />
            </Card>
        );
    }
}

export default CardUser;

