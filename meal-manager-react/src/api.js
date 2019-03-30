import axios from "axios";

export default {
  recipes: {
    fetchAll: () => axios.get("http://localhost:5000/api/recipe").then(res => res.data.recipes)
  }
}