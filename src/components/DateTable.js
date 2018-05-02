import React, { Component } from 'react';
import styled from 'styled-components'
import SignUpForm from './SignUpForm'

const DateList = styled.div`
width: 95%;
margin: 0 auto;
display: flex;
flex-direction: column;
flex-wrap: wrap; 
`
const Button = styled.div`
  display:block;
  text-align: center;
  float:none;
  margin:5px auto;
  background:#80c0ff;
  width:200px;
  border:0;
  padding:5px 15px;
  font-size:1.6em;
  color:#FFF;
  border-bottom:3px solid #4da7ff;
  border-radius:2px;
  clear:both;
`

class DateTable extends Component {
  state = {
    showForm:false,
  }
  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

    render(){  
    return (
        <DateList>
        <Button onClick={this.toggleShowForm}>
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} pushPosts={this.props.pushPosts}  handleSubmit={this.handleSubmit} /> : null}
       9am - 10am
        </Button>
        <Button>
       10am - 11am
        </Button>
        <Button>
        11am - 12pm
        </Button>
        <Button>
        12pm - 1pm
        </Button>
        <Button>
        1pm - 2pm
        </Button>
        <Button>
        2pm - 3pm
        </Button>
        <Button>
        3pm - 4pm
        </Button>
        <Button>
        4pm - 5pm
        </Button>
        </DateList>
    );
}
};

export default DateTable;