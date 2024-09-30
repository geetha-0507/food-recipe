const apiKey = 'YOUR_API_KEY'; 
const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const searchInput = document.getElementById('search');
const recipeList = document.getElementById('recipe-list');


async function getRecipes(query) {
  const response = await fetch(`${apiURL}${query}`);
  const data = await response.json();
  
  displayRecipes(data.meals);
}


function displayRecipes(meals) {
  recipeList.innerHTML = ''; // Clear previous results
  
  meals.forEach(meal => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    
    recipeDiv.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <p>${meal.strInstructions.substring(0, 100)}...</p>
    `;
    
    recipeList.appendChild(recipeDiv);
  });
}


searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  if (query) {
    getRecipes(query);
  } else {
    recipeList.innerHTML = '';
  }
});
