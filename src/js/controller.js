const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// prettier-ignore
const showRecipe = async function () {
  try {
    const res = 
    await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=293b9025-faa1-484a-a6a2-8739bf71a7e5');

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${data.status})`);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredints: recipe.ingredints,
    };
    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};

showRecipe();
