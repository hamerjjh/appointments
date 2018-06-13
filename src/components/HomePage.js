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
    h4{
    text-align: center;
    }
    a{
      padding: 10px;
    }
    img {
        
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
    }
`

const HomePage = () => {
    return (
        <HomePageStyles>
       <h1>Come Schedule a Meeting</h1>
       <img src ="https://qba.org.au/images/easyblog_articles/177/kick-off-meeting.jpg" />
        <h3>~Select a slot below and enter your information to schedule~</h3>
        <h4>Created By Jonathan Hamer</h4>
        
        </HomePageStyles>
    );
};

export default HomePage;