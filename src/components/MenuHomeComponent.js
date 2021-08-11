

// UNCOMMENT REVIEW

// import React from "react";
// import { Switch, Link } from "react-router-dom";
// import menu from './MenuArray';
// // import displayMenuItems from './DisplayMenuItems';
// // import displayMenuButtons from './DisplayMenuButtons';
// // import seeMenu from './MenuJS';
// import '../styles.css';
// import { MenuNav, MenuUl, MenuLi, MenuA, MenuBody, MenuTitle, SpecialsTitle, Underlines, Underline, TitleDiv, SectionCenter, Photo } from './Styled';
// import displayMenuItems from "./MenuJS";

// function MenuHome(item) {
// return(
// <MenuBody>
// <>
// <MenuNav>
//        <MenuUl>
//            <MenuLi>
//               <Link to="/menu-home"><MenuA>Menu</MenuA></Link>
//            </MenuLi>
//            <MenuLi>
//               <Link to="aboutus"><MenuA>About Us</MenuA></Link> 
//            </MenuLi>
//        </MenuUl>
//    </MenuNav>
//     <TitleDiv>
//         <MenuTitle> <span className="opac"> The Drunken Diner </span> </MenuTitle>
//     </TitleDiv>
//         <Underlines></Underlines>
//         <h3 className="hours"> <span className="opac"> Open: 10 <u>PM</u> - 6 <u>AM</u> </span> </h3>
//         <section className="menu">
        
//       <div className="btn-container">
//         <button className="filter-btn" type="button" data-id="all">all</button>
//         <button className="filter-btn" type="button" data-id="breakfast">breakfast</button>
//         <button className="filter-btn" type="button" data-id="lunch">lunch</button>
//         <button className="filter-btn" type="button" data-id="shakes">shakes</button>
//         <button className="filter-btn" type="button" data-id="dinner">dinner</button>
//       </div>
//       <div className="section-center">
//         <displayMenuItems />
        
//       </div>
//     </section>

    
//     </>
//     </MenuBody>
// );
// }

// KEEP COMMENTED REVIEW

// function displayMenuButtons() {
//   const container = document.querySelector('.btn-container');
//   const categories = menu.reduce(function(values, item) {
//     if(!values.includes(item.category)) {
//       values.push(item.category);
//     }
//     return values
//   },
//     ['all']
//   );
//   const categoryBtns = categories.map(function(category) {
//     return `<button className="filter-btn" type="button" data-id=${category}>${category}</button>`;
//   })
//   .join("");
//   container.innerHTML = categoryBtns;
//   const filterBtns = document.querySelectorAll('.filter-btn');
  
//   //filter items
// filterBtns.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     const category = e.currentTarget.dataset.id;
//     const menuCategory = menu.filter(function(menuItem) {
//       if(menuItem.category === category) {
//         return menuItem;
//       };
//     });
//       if(category === 'all') {
//         displayMenuItems(menu);
//     } else {
//         displayMenuItems(menuCategory);
//     }
//   });
// });
// }

// function displayMenuItems(menuItems) {
//   const sectionCenter = document.querySelector('.section-center');
//   let displayMenu = menuItems.map(function(item) {
//     return `<article className="menu-item">
//       <img src=${item.img} className="photo" alt=${item.title} />
//       <div className="item-info">
//         <header>
//         <h4>${item.title}</h4>
//         <h4 className="price"> $${item.price}</h4>
//         </header>
//         <span className="opac">
//         <p className="item-text">
//           ${item.desc}
//         </p>
//         </span>
//       </div>
//     </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   sectionCenter.innerHTML = displayMenu;
// };

// const seeMenu = () => {
//   displayMenuItems(menu);
//   displayMenuButtons();
// }
// seeMenu();


// UNCOMMENT REVIEW

// export default MenuHome;