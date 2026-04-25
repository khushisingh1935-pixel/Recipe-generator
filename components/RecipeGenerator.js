'use client'
import { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

const RecipeGenerator = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const generateRecipe = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      setRecipes(res.data.meals || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-6 text-center">
        <div className="flex justify-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search recipe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-64"
          />

          <button
            onClick={generateRecipe}
            className="bg-pink-400 text-white px-4 py-2 rounded cursor-pointer"
          >
            Search
          </button>
        </div>

        {recipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto p-4">
            {recipes.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                meal={meal}
                openModal={setSelectedRecipe}
              />
            ))}
          </div>
        )}
      </div>

      {selectedRecipe && (
        <RecipeModal
          meal={selectedRecipe}
          closeModal={() => setSelectedRecipe(null)}
        />
      )}
    </>
  );
};

export default RecipeGenerator;