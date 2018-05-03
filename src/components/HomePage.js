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
       <h1>Come Schedule a Meeting with</h1>
       <img src ="https://vignette.wikia.nocookie.net/logopedia/images/b/b4/Cox_Automotive.jpg/revision/latest?cb=20171022133417" />
        <h3>~Select a slot below and enter your information to schedule~</h3>
        <h4>Created By Jonathan Hamer</h4>
        
        </HomePageStyles>
    );
};

export default HomePage;