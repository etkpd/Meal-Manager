import axios from "axios";

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/' : 'https://meal-manager-api.now.sh/'

export default {
  recipes: {
    fetchRecipesFromDb: () => axios.get(`${API_URL}api/recipe`).then(res => res.data.recipes),
    fetchFilteredRecipes: (queryString) => axios.get(`${API_URL}api/recipe/filter?${queryString}`).then(res => res.data.recipes),
    fetchIngredientDetailsV2: (ingredient) => axios.request({
      url: `${API_URL}api/food/ingredient`,
      method: 'post',
      data: {
        ingredient: ingredient
      }
    }).then(res => res)
  },
  recipe: {
    uploadImage: (formData)=>axios.request({
      url: 'https://api.cloudinary.com/v1_1/dq1pxgxdq/image/upload',
      method: 'post',
      headers: {'content-type': 'multipart/form-data'},
      data: formData
    }).then(res => res),
    uploadFileByServer: (formData)=>axios.request({
      url: `${API_URL}api/recipe/recipeimageupload`,
      method: 'post',
      headers: {'content-type': 'multipart/form-data'},
      data: formData
    }).then(res => res),
    uploadFileUsingTestRoute: (formData)=>axios.request({
      url: `${API_URL}api/recipe/testrecipeimageupload`,
      method: 'post',
      headers: {'content-type': 'multipart/form-data'},
      data: formData
    }).then(res => res),
    AddRecipeToDatabase: (recipeDetails)=>axios.request({
      url: `${API_URL}api/recipe/addrecipe`,
      method: 'post',
      data: {
        recipeDetails: recipeDetails 
      }
    }).then(res=> res),
    GetRecipe: (recipeID)=>axios.request({
      url: `${API_URL}api/recipe/getrecipe?id=${recipeID}`,
      method: 'get'
    }).then(res=> res),

  },
  filters: {
    fetchAllFilters: () => axios.get(`${API_URL}api/food/filters`).then(res => res.data.filters)
  }
}