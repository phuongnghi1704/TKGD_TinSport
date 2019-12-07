import React, { Component } from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { Row, Col, Tag, Icon,
  Input, Button, Select, Menu, message,
  DatePicker } from "antd";
import SuccessMessageImage from '../../success.png'
import FailureMessageImage from '../../failure.png'

const { Option } = Select
const { TextArea } = Input

const Wrapper = styled.div`
   margin: 30px 0;
`
const Title = styled.div`
  display: block;
  transform: translateX(-250px);
  justify-content: start;
  align-items: center;
  text-align: center;
`

const Form = styled.form`
  width: 900px
  transform: translateX(90px)
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 15px;
`

const RowElement = styled(Row)`
  text-align: center;
  margin: 30px 0;
`

const DateBox = styled(Col)`
  text-align: left
`

const Message = styled.div`
  position: absolute;
`
// option
function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}


//date
function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select: '',
      date: null,
      address: '',
      isMale: true,
      content: '',
      isSubmitted: false,
      onSuccessSubmit: true
    }

    //this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  onSelectChange = value => {
    this.setState({select: value})
  }

  onDateChange = value => {
    this.setState({date: value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateInput(event.target)
  }
  validateInput = (input) => {
    if (this.state.select === '' || this.state.date === '' ||
    input[1].value === '' || input[4].value === '') {
      this.onFailureSubmit()
    }
    else {
      this.onSuccessSubmit()
    }
  }

  onSuccessSubmit = () => {
    this.setState({
      isSubmitted: true,
      onSuccessSubmit: true
    })

    setTimeout(() => {
      this.setState({
        isSubmitted: false
      })}, 3000)
  }

  onFailureSubmit = () => {
    this.setState({
      isSubmitted: true,
      onSuccessSubmit: false
    })
    
    setTimeout(() => {
      this.setState({
        isSubmitted: false
      })}, 3000)
  }

  render() {

    return (
      <Wrapper className='create-form-wrapper'>
        <Form className='create-form' onSubmit={this.handleSubmit}>
          <Title style={{margin: '20px 0 0', display: ''}}>Nhập thông tin kèo</Title>
          <RowElement>
            <Col span={12} >
            <Select
              className='selectButton'
              style={{ width: 200 }}
              placeholder="Chọn môn thể thao"
              optionFilterProp="children"
              onChange={this.onSelectChange}
              on
              onFocus={onFocus}
              onBlur={onBlur}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="football">Bóng đá</Option>
              <Option value="basketball">Bóng rổ</Option>
              <Option value="badminton">Cầu lông</Option>
            </Select>
            </Col>
            <Col style={{verticalAlign: 'middle', height: '32px', lineHeight: '32px'}} span={4}>Đặt thời gian:</Col>
            <DateBox span={8}>
              <DatePicker
                placeholder=''
                format='YYYY-MM-DD HH:mm:ss'
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                onChange={this.onDateChange}/>
            </DateBox>
          </RowElement>
          <RowElement>
            <Col style={{transform: 'translateX(35px)'}} span={12}>
              <TextArea style={{width: '60%'}} rows={4} placeholder='Nhập địa chỉ ...'/>
            </Col>
            <Col style={{transform: 'translateX(35px)'}} span={8}>
              <label for='gender'>
                  <input type='radio' name='gender'/>
                    <Icon type='woman' />
                </label>
              <label for='gender'>
                <input type='radio' name='gender' id='gender' checked/>
                  <Icon type="man" />
                </label>
            </Col>
          </RowElement>
          <RowElement style={{display: 'flex', justifyContent: 'center'}}>
          <Col style={{transform: 'translateX(35px)', width: '80%'}} span={12}>
              <TextArea rows={10} placeholder='Nhập ghi chú ...'/>
              {
          this.state.isSubmitted &&
          <Message>
            {
              this.state.onSuccessSubmit ? 
              <img style={{transform: 'translate(200%, -250%)'}} src={SuccessMessageImage}></img>
              : <img style={{transform: ' translate(120%, -200%)'}} src={FailureMessageImage}></img>
            }
          </Message>
        }
            </Col>
          </RowElement>
          <RowElement>
          <Button style={{transform: 'translateX(350px)', color: 'black'}} type='danger' htmlType='submit'>+ Tạo kèo</Button>
          </RowElement>
        </Form>
      </Wrapper>
    );
  }
}
 
export default CreateForm
