import React, { Component } from 'react';
import styled from 'styled-components'
import {CreateForm} from '../../components/create'
import {WeatherBar, Header, Footer} from '../../components/common'

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <>
      <Header/>
      <WeatherBar/>
      <CreateForm/>
      <Footer/>
      </>
      )
  }
}
 
export default CreatePage