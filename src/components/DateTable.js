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
       9am - 10am
       {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
       10am - 11am
       {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
        11am - 12pm
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
        12pm - 1pm
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
        1pm - 2pm
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
        2pm - 3pm
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
        3pm - 4pm
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        <Button onClick={this.toggleShowForm}>
        4pm - 5pm
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </Button>
        </DateList>
    );
}
};

export default DateTable;