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
const RedButton = styled.div`
  display:block;
  text-align: center;
  float:none;
  margin:5px auto;
  background:#e51616;
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
	activeButton: "",
	buttonToggles: [
	false, 
	false, 
	false, 
	false, 
	false, 
	false, 
	false, 
	false]
  }
  toggleShowForm = (buttonNumber) => {
    this.setState({ showForm: !this.state.showForm,
					activeButton: buttonNumber})
  }

  toggleButtonColor = (activeButton) => {
	  let array = [...this.state.buttonToggles]
	  array[activeButton] = true
    this.setState({ buttonToggles: array })
  }


    render(){  
    return (
        <DateList>
    {this.state.buttonToggles[0] ? <RedButton>9am - 10am</RedButton> 
	: <Button onClick={(a) => this.toggleShowForm(0)}>9am - 10am</Button>}

       {this.state.buttonToggles[1] ? <RedButton>10am - 11am</RedButton> 
	: <Button onClick={(b) => this.toggleShowForm(1)}>10am - 11am</Button>}


        {this.state.buttonToggles[2] ? <RedButton>11am - 12pm</RedButton> 
  : <Button onClick={(c) => this.toggleShowForm(2)}>11am - 12pm</Button>}
  

         {this.state.buttonToggles[3] ? <RedButton>12pm - 1pm</RedButton> 
  : <Button onClick={(d) => this.toggleShowForm(3)}>12pm - 1pm</Button>}


         {this.state.buttonToggles[4] ? <RedButton>1pm - 2pm</RedButton> 
  : <Button onClick={(e) => this.toggleShowForm(4)}>1pm - 2pm</Button>}


         {this.state.buttonToggles[5] ? <RedButton>2pm - 3pm</RedButton> 
  : <Button onClick={(f) => this.toggleShowForm(5)}>2pm - 3pm</Button>}

         {this.state.buttonToggles[6] ? <RedButton>3pm - 4pm</RedButton> 
  : <Button onClick={(g) => this.toggleShowForm(6)}>3pm - 4pm</Button>}


         {this.state.buttonToggles[7] ? <RedButton>4pm - 5pm</RedButton> 
  : <Button onClick={(h) => this.toggleShowForm(7)}>4pm - 5pm</Button>}

        {this.state.showForm ? <SignUpForm activeButton={this.state.activeButton}  toggleButtonColor={this.toggleButtonColor} /> : null}
        </DateList>
    );
}
};

export default DateTable;