import React from 'react';
// import displayMenuButtons from './DisplayMenuButtons';
// import displayMenuItems from './DisplayMenuItems';
import menu from './MenuArray';

// KEEP COMMENTED REVIEW

// const menu = [
//     {
//       id: 1,
//       title: "buttermilk pancakes",
//       category: "breakfast",
//       price: 15.99,
//       img: "././images/item-1.jpeg",
//       desc: `A thick slice of sugar-cured ham, two eggs your style, and three buttermilk pancakes. `,
//     },
//     {
//       id: 2,
//       title: "diner double",
//       category: "lunch",
//       price: 13.99,
//       img: "././images/item-2.jpeg",
//       desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//     },
//     {
//       id: 3,
//       title: "godzilla milkshake",
//       category: "shakes",
//       price: 6.99,
//       img: "././images/item-3.jpeg",
//       desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//     },
//     {
//       id: 4,
//       title: "country delight",
//       category: "breakfast",
//       price: 20.99,
//       img: "././images/item-4.jpeg",
//       desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//     },
//     {
//       id: 5,
//       title: "egg attack",
//       category: "lunch",
//       price: 22.99,
//       img: "././images/item-5.jpeg",
//       desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//     },
//     {
//       id: 6,
//       title: "oreo dream",
//       category: "shakes",
//       price: 18.99,
//       img: "././images/item-6.jpeg",
//       desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//     },
//     {
//       id: 7,
//       title: "bacon overflow",
//       category: "breakfast",
//       price: 8.99,
//       img: "././images/item-7.jpeg",
//       desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//     },
//     {
//       id: 8,
//       title: "american classic",
//       category: "lunch",
//       price: 12.99,
//       img: "././images/item-8.jpeg",
//       desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//     },
//     {
//       id: 9,
//       title: "quarantine buddy",
//       category: "shakes",
//       price: 16.99,
//       img: "././images/item-9.jpeg",
//       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//     },
//     {
//       id: 10,
//       title: "steak dinner",
//       category: "dinner",
//       price: 39.99,
//       img: "././images/item-10.jpeg",
//       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//     },
//   ];

  // Load Items
  // window.addEventListener('DOMContentLoaded', function() {
  //   displayMenuItems(menu);
  //   displayMenuButtons();
  // });

  // let loadItems = () => {
  //   displayMenuItems(menu);
  //   displayMenuButtons();
  // };
  // loadItems();
  
  // const seeMenu = () => {
  //   displayMenuItems(menu);
  //   displayMenuButtons();
  // }
  
<<<<<<< HEAD



//  UNCOMMENT REVIEW

  // function displayMenuItems(menuItems) {
  //   const sectionCenter = document.querySelector('.section-center');
  //   let displayMenu = menuItems.map(function(item) {
  //     return `<article class="menu-item">
  //       <img src=${item.img} class="photo" alt=${item.title} />
  //       <div class="item-info">
  //         <header>
  //         <h4>${item.title}</h4>
  //         <h4 class="price"> $${item.price}</h4>
  //         </header>
  //         <p class="item-text">
  //           ${item.desc}
  //         </p>
  //       </div>
  //     </article>`;
  //   });
  //   displayMenu = displayMenu.join("");
  //   sectionCenter.innerHTML = displayMenu
  // };
=======
  function displayMenuItems(menuItems) {
    const sectionCenter = document.querySelector('.section-center');
    let displayMenu = menuItems.map(function(item) {
      return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
          <h4>${item.title}</h4>
          <h4 class="price"> $${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
  };
>>>>>>> c16b78a5bd7551fbacc05d2071dc382026529d91
  
 
  function displayMenuButtons() {
    const container = document.querySelector('.btn-container');
    const categories = menu.reduce(function(values, item) {
      if(!values.includes(item.category)) {
        values.push(item.category);
      }
      return values
    },
      ['all']
    );
    const categoryBtns = categories.map(function(category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    //filter items
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem) {
        if(menuItem.category === category) {
          return menuItem;
        };
      });
        if(category === 'all') {
          displayMenuItems(menu);
      } else {
          displayMenuItems(menuCategory);
      }
    });
  });
  }

<<<<<<< HEAD
  // export default displayMenuItems; //seeMenu;
=======
  export default displayMenuItems; //seeMenu;
>>>>>>> c16b78a5bd7551fbacc05d2071dc382026529d91
