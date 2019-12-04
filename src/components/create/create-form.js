import React, { Component } from 'react';
import styled from 'styled-components'
import { Row, Col, Tag, Icon, Form,
  Input, Button, Radio, Dropdown, Menu, message,
  DatePicker } from "antd";

const Wrapper = styled.div`
   margin: 30px 0;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
`

const DropdownWrapper = styled.div`
  transform: translateX(100px);
`
const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
}

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
}

const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

const onOk = (value) => {
  console.log('onOk: ', value);
}

const menu = (
<Menu onClick={handleMenuClick}>
  <Menu.Item key="1">
    <Icon type="user" />
    1st menu item
  </Menu.Item>
  <Menu.Item key="2">
    <Icon type="user" />
    2nd menu item
  </Menu.Item>
  <Menu.Item key="3">
    <Icon type="user" />
    3rd item
  </Menu.Item>
</Menu>
)

class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      formLayout: 'horizontal',
     }
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return (
      <Wrapper>
        <Form layout={formLayout}>
          <Form.Item {...formItemLayout}>
         <Row>
           <Col span='12'>
           <DropdownWrapper id="components-dropdown-demo-dropdown-button">
            <Dropdown overlay={menu}>
              <Button>
                Chon mon the thao <Icon type="down" />
              </Button>
            </Dropdown>
          </DropdownWrapper>
           </Col>
           <Col span='12'>
           <DatePicker showTime placeholder="Dat thoi gian" onChange={onChange} onOk={onOk} />
           </Col>
         </Row>
          </Form.Item>
          <Form.Item label="Field A" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Wrapper>
    );
  }
}
 
export default CreateForm