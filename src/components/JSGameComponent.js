import React from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Navvy from "./Navvy";
import { Body, Navbar, NavA, NavLi, H1, BioDiv, Bio } from './Styled';

function Games() {
    return (
      <Body>
      <>
      <Navvy />
        <div>
        <H1> JS Gaming </H1> 
      </div>
    <BioDiv>
      <Bio> 
        Hello Friend! <br /> <br /> <br />
    
         The purpose of this website is straightforward: <br /> <br />

           1. Create a place to house a few of the games I've made while learning and practicing Javascript <br /> <br />
           2. So others can see how simple it is to create functional games while learning to code! <br /> <br />

           Have fun and try to recreate these on your own!
      </Bio>
    </BioDiv>
      </>
      </Body>
    );
}

export default Games;