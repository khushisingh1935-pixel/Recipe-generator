const RecipeCard = ({ meal, openModal }) => {
    return(
        <div className="border rounded shadow-mg p-4 items-center text-center border-pink-400">
            <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded w-64 h-64 object-cover mx-auto"
            />
        <h3 className="text-lg font-bold mt-2">{meal.strMeal}</h3>
        <button 
        onClick={() => openModal(meal)}
        className="mt-3 bg-pink-400 text-white px-3 py-1 rounded cursor-pointer"
        >
            View Recipe
        </button>
        </div>
    );
};
export default RecipeCard;