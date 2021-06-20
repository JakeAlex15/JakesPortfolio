import React from 'react';
import menu from './MenuArray';
import displayMenuItems from './DisplayMenuItems';

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

  export default displayMenuButtons;