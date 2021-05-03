import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavA, NavLi, NavUl } from './Styled';

function Navvy() {
    const [showMenu, setShowMenu] = useState(false)
    return (
          <Navbar>
            <NavUl id="myLinks">
                <NavLi> 
                  <Link to="/" passHref><NavA> Home </NavA></Link>
                </NavLi>
                <NavLi> 
                  <Link to="game-page" passHref><NavA> Games </NavA></Link>
                </NavLi>
                <NavLi>
                 <Link to="code-page" passHref><NavA> Code </NavA></Link>
                </NavLi>
            </NavUl>
            <a  class="icon" onclick="myFunction()">
              <i class="fa fa-bars fa-3x"></i>
            </a>
          </Navbar>
          );
          }
export default Navvy;