import React from "react";
import { Switch, Link } from "react-router-dom";
import menuitem from './menuitem.jpeg';
import { MenuNav, MenuUl, MenuLi, MenuA, MenuBody, MenuTitle, SpecialsTitle, Underlines, TitleDiv, SectionCenter, Photo } from './Styled';
function MenuHome() {
return(
<MenuBody>
<>
<MenuNav>
       <MenuUl>
           <MenuLi>
              <Link passHref to="/"><MenuA>Home</MenuA></Link>
           </MenuLi>
           <MenuLi>
              <Link passHref to="/menu"><MenuA>Menu</MenuA></Link> 
           </MenuLi>
       </MenuUl>
   </MenuNav>
    <TitleDiv>
        <MenuTitle> Jake's Famous Diner </MenuTitle>
    </TitleDiv>
        <SpecialsTitle> Today's Specials </SpecialsTitle>
        <Underlines></Underlines>
        <SectionCenter className="section-center">
          <article class="menu-item">
              <Photo src={menuitem} />
              <div class="item-info">
                <header>
                <h4>buttermilk pancakes</h4>
                <h4 class="price"> $15</h4>
                </header>
              </div>
            </article> 
          </SectionCenter> 
    </>
    </MenuBody>
);
}

export default MenuHome;