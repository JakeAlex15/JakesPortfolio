import React from "react";
import { Switch, Link } from "react-router-dom";
import menuitem from './menuitem.jpeg';
import Menu from './MenuJS';
import seeMenu from './MenuJS';
import '../styles.css';
import { MenuNav, MenuUl, MenuLi, MenuA, MenuBody, MenuTitle, SpecialsTitle, Underlines, Underline, TitleDiv, SectionCenter, Photo } from './Styled';

function MenuHome() {
return(
<MenuBody>
<>
<MenuNav>
       <MenuUl>
           <MenuLi>
              <Link passHref to="/menu-home"><MenuA>Menu</MenuA></Link>
           </MenuLi>
           <MenuLi>
              <Link passHref to="aboutus"><MenuA>About Us</MenuA></Link> 
           </MenuLi>
       </MenuUl>
   </MenuNav>
    <TitleDiv>
        <MenuTitle> <span className="opac"> The Drunken Diner </span> </MenuTitle>
    </TitleDiv>
        <Underlines></Underlines>
        <h3 className="hours"> <span className="opac"> Open: 10 <u>PM</u> - 6 <u>AM</u> </span> </h3>
        <section class="menu">
        
      <div class="btn-container">
        <button class="filter-btn" type="button" data-id="all">all</button>
        <button class="filter-btn" type="button" data-id="breakfast">breakfast</button>
        <button class="filter-btn" type="button" data-id="lunch">lunch</button>
        <button class="filter-btn" type="button" data-id="shakes">shakes</button>
        <button class="filter-btn" type="button" data-id="dinner">dinner</button>
      </div>
      <div className="section-center">
      
        <button className="see-menu-btn" onClick={seeMenu}> See Menu </button>
        
      </div>
    </section>
    </>
    </MenuBody>
);
}

export default MenuHome;