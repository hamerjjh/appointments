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
  background:#6bbeff;
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
        <Button onClick={(a) => this.toggleShowForm(a)}>
       9am - 10am
 
        </Button>
        <Button onClick={(b) => this.toggleShowForm(b)}>
       10am - 11am
      
        </Button>
        <Button onClick={(c) => this.toggleShowForm(c)}>
        11am - 12pm

        </Button>
        <Button onClick={(d) => this.toggleShowForm(d)}>
        12pm - 1pm
        </Button>
        <Button onClick={(e) => this.toggleShowForm(e)}>
        1pm - 2pm

        </Button>
        <Button onClick={(f) => this.toggleShowForm(f)}>
        2pm - 3pm

        </Button>
        <Button onClick={(g) => this.toggleShowForm(g)}>
        3pm - 4pm

        </Button>
        <Button onClick={(h) => this.toggleShowForm(h)}>
        4pm - 5pm
       
        </Button>
        {this.state.showForm ? <SignUpForm toggleShowForm={this.toggleShowForm} handleSubmit={this.handleSubmit} /> : null}
        </DateList>
    );
}
};

export default DateTable;