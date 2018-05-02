import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const HomePageStyles = styled.div`
   h1{
   text-align: center;
   }
   h3{
    text-align: center;
    }
    a{
      padding: 10px;
    }
    img {
      margin-left: 500px;
      height: 350px;
      width: 500px;
      @media only screen and (min-width: 1600px) {
        margin-left: 600px;
        padding-top: 10px;
      }
    }
`

const HomePage = () => {
    return (
        <HomePageStyles>
       <h1>Come Schedule a Meeting</h1>
        <h3>~Select a slot below and enter your information to schedule~</h3>
        
        <img src ="http://webdesign14.com/wp-content/uploads/2014/12/daily-calendar-template-supmqnng.jpg" />
        </HomePageStyles>
    );
};

export default HomePage;