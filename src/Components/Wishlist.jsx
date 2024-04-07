import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Wishlist() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  const addToWishlist = recipe => {
    setWishlist([...wishlist, recipe]);
  };

  const removeFromWishlist = recipeId => {
    setWishlist(wishlist.filter(item => item.idMeal !== recipeId));
  };

  return (
    <Router>
      <div className="container mx-auto">
        <h1 className="my-4 text-3xl font-bold">Recipe Finder</h1>
        <div className="my-4">
          <h2 className="mb-2 text-xl font-semibold">Select a Category:</h2>
          <div className="flex">
            {categories.slice(0, 5).map(category => (
              <button
                key={category.strCategory}
                onClick={() => handleCategorySelect(category.strCategory)}
                className={`px-4 py-2 mr-2 rounded-lg ${
                  selectedCategory === category.strCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {category.strCategory}
              </button>
            ))}
          </div>
        </div>
        <Switch>
          <Route path="/favorites">
            <Favorites wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
          </Route>
          <Route path="/">
            <div className="my-4">
              <h2 className="mb-2 text-xl font-semibold">Recipes</h2>
              <div className="grid grid-cols-2 gap-4">
                {recipes.map(recipe => (
                  <div key={recipe.idMeal} className="p-4 bg-white rounded-lg shadow-md">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="mb-2 rounded-lg" />
                    <h3 className="mb-2 text-lg font-semibold">{recipe.strMeal}</h3>
                    <p className="text-gray-600">{recipe.strCategory}</p>
                    <button
                      onClick={() => addToWishlist(recipe)}
                      className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      Add to Wishlist
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Favorites({ wishlist, removeFromWishlist }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-3xl font-bold">Favorites</h1>
      <div className="my-4">
        <h2 className="mb-2 text-xl font-semibold">My Wishlist:</h2>
        <div className="grid grid-cols-2 gap-4">
          {wishlist.map(recipe => (
            <div key={recipe.idMeal} className="p-4 bg-white rounded-lg shadow-md">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="mb-2 rounded-lg" />
              <h3 className="mb-2 text-lg font-semibold">{recipe.strMeal}</h3>
              <p className="text-gray-600">{recipe.strCategory}</p>
              <button
                onClick={() => removeFromWishlist(recipe.idMeal)}
                className="px-4 py-2 mt-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default wishlist;
