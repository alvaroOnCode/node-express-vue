const express = require('express');
const router = express.Router();

// Auth Middleware
const authMiddleware = require('../middlewares/auth');
router.use(authMiddleware.checkAuth);

// Recipe Controller
const recipeController = require('../controllers/recipes');

// GET
router.get('/', recipeController.recipes);

router.get('/:id', recipeController.recipesById);

// POST
router.post('/', recipeController.addRecipe);

// PUT
router.put('/:id', recipeController.editRecipeById);

module.exports = router;