const RecipeModal = ({ meal, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-pink-200 text-black p-6 rounded w-[90%] md:w-[600px] max-h-[80vh] overflow-y-auto">
        
        <h2 className="text-2xl font-bold mb-3">{meal.strMeal}</h2>

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full rounded mb-4"
        />

        <p className="mb-4">{meal.strInstructions}</p>

        <button
          onClick={closeModal}
          className="bg-pink-400 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipeModal;