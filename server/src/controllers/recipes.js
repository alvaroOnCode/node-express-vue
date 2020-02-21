const recipe = require('../models/recipes');

class RecipeController {
    async recipes(req, res, next) {
        const data = await recipe.getAll();

        return res
            .status(200)
            .json(data);
    }

    async recipesById(req, res, next) {
        const data = await recipe.getById(req.params.id);

        return res
            .status(200)
            .json(data);
    }

    async addRecipe(req, res, next) {
        const newRecipe = new recipe({
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            difficulty: req.body.difficulty,
            persons: req.body.persons,
            time: req.body.time
        });

        const data = await newRecipe.save();

        return res
            .status(201)
            .json(data);
    }

    async editRecipeById(req, res, next) {
        const newRecipe = {
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            difficulty: req.body.difficulty,
            persons: req.body.persons,
            time: req.body.time
        };

        const data = await Recipe.findOneAndUpdate(
            {
                _id: req.params.id,
                newRecipe
            },
            {
                new: true
            }
        );

        return res
            .status(200)
            .json(data);
    }
}

module.exports = new RecipeController();