import axios from "axios";

export default {
  recipes: {
    fetchRecipesFromDb: () => axios.get("http://localhost:5000/api/recipe").then(res => res.data.recipes)
  },
  filters: {
    fetchAllFilters: () => axios.get("http://localhost:5000/api/food/filters").then(res => res.data.filters)
  }
}