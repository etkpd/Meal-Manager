import axios from "axios";

export default {
  recipes: {
    fetchRecipesFromDb: () => axios.get("http://localhost:5000/api/recipe").then(res => res.data.recipes),
    fetchFilteredRecipes: (queryString) => axios.get(`http://localhost:5000/api/recipe/filter?${queryString}`).then(res => res.data.recipes),
    fetchIngredientDetailsV2: (ingredient) => axios.request({
      url: 'http://localhost:5000/api/food/ingredient',
      method: 'post',
      data: {
        ingredient: ingredient
      }
    }).then(res => res)
  },
  filters: {
    fetchAllFilters: () => axios.get("http://localhost:5000/api/food/filters").then(res => res.data.filters)
  }
}