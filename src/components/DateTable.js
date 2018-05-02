import React, { Component } from 'react';
import styled from 'styled-components'

const DateList = styled.div`
width: 95%;
margin: 0 auto;
display: flex;
flex-direction: column;
flex-wrap: wrap; 
`

const DateTable = () => {
    return (
        <DateList>
        <div>
       9am - 10am
        </div>
        <div>
       10am - 11am
        </div>
        <div>
        11am - 12pm
        </div>
        <div>
        12pm - 1pm
        </div>
        <div>
        1pm - 2pm
        </div>
        <div>
        2pm - 3pm
        </div>
        <div>
        3pm - 4pm
        </div>
        <div>
        4pm - 5pm
        </div>
        </DateList>
    );
};

export default DateTable;