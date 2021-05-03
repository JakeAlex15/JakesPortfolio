import React from "react";
import { Switch, Link } from "react-router-dom";
// import MenuJS from './MenuJS';
import { MenuNav, MenuUl, MenuLi, MenuA, MenuBody, MenuSection, MenuTitle, Underline, SectionCenter } from './Styled';
// import {displayMenuItems, displayMenuButtons} from './MenuJS';
function menuPage() {
    return(
    <MenuBody>
    <>
    <MenuNav>
       <MenuUl>
           <MenuLi>
              <Link passHref to="/menu-home"><MenuA>Home</MenuA></Link>
           </MenuLi>
           <MenuLi>
              <Link passHref to="/menu"><MenuA>Menu</MenuA></Link> 
           </MenuLi>
       </MenuUl>
   </MenuNav>
    <MenuSection>
      <div class="title">
        <MenuTitle>Our Menu</MenuTitle>
        <Underline></Underline>
      </div>
     
      {/* <div class="btn-container">
        <button class="filter-btn" type="button" data-id="all">all</button>
        <button class="filter-btn" type="button" data-id="breakfast">breakfast</button>
        <button class="filter-btn" type="button" data-id="lunch">lunch</button>
        <button class="filter-btn" type="button" data-id="shakes">shakes</button> 
      </div> */}
     
      <SectionCenter className="section-center">
      
       {/* <article class="menu-item">
          <img src="menu-item.jpeg" class="photo" alt="menu item" />
          <div class="item-info">
            <header>
            <h4>buttermilk pancakes</h4>
            <h4 class="price"> $15</h4>
            </header>
            <p class="item-text">
              I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed 
            </p>
          </div>
        </article>  */}
       
      </SectionCenter>
    </MenuSection>
   
    </>
    </MenuBody>
);
}


export default menuPage;