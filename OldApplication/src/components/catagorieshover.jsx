import React, { useState } from 'react';
import './style.css'; // Import your CSS file

const CategoryMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Sample data for categories and subcategories
  const categories = [
    {
      name: 'Pet Food',
      subcategories: ['Cat Food', 'Dog Food', 'Fish Food'],
    },
    {
      name: 'Sports Items',
      subcategories: ['Football', 'Basketball', 'Tennis'],
    },
    {
      name: 'Child Store',
      subcategories: ['Toys', 'Clothing', 'Books'],
    },
  ];

  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category"
          onMouseEnter={() => setHoveredCategory(category.name)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <span>{category.name}</span>
          {hoveredCategory === category.name && (
            <div className="subcategory-list">
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="subcategory">
                  {subcategory}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
