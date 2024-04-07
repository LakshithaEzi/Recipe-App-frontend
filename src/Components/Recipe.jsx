import React, { useState, useEffect } from 'react';

function Recipe() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    // Fetch recipes based on selected category
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
      .catch(error => console.error('Error fetching recipes:', error));
  };

  return (
    <div className="container mx-auto">
      
      <div className="my-4">
        
        <div className="flex space-x-4">
          {categories.slice(0, 5).map(category => (
            <button
              key={category.strCategory}
              onClick={() => handleCategorySelect(category.strCategory)}
              className={`px-3 py-2 text-red-500 bg-white rounded-full font-sm text-full  outline outline-1 outline-red-400  w-[130px] items-center justify-center flex ${
                selectedCategory === category.strCategory ? 'bg-red-500 text-gray-100 ' : 'bg-red-200'
              }`}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </div>
      <div className="my-4">
        
        <div className="grid grid-cols-5 gap-4">
          {recipes.map(recipe => (
            <div key={recipe.idMeal} className="p-4 bg-white rounded-lg shadow-md">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="mb-2 rounded-lg" />
              <h3 className="mb-2 text-lg font-semibold">{recipe.strMeal}</h3>
              <div >
              <p className="text-gray-600">{recipe.strCategory}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
