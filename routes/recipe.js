const express = require('express')
const router = express.Router()


const { 
  getRecipes,
  getRecipe,
  getRecipeList,
  saveFavorite,
  deleteFavorite
 } = require('../controllers/recipe')

 router.route('/').get(getRecipes)
 router.route('/list').get(getRecipeList).post(saveFavorite)
 router.route('/:id').get(getRecipe).delete(deleteFavorite)

 module.exports = router