const Recipe = require('../models/recipe.models');


module.exports.getAllRecipes = (req, res) => {
    Recipe.find().sort({name: 1})
    .then((Recipes) => {
        res.json(Recipes);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}
module.exports.updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedRecipe) => {
            res.json(updatedRecipe)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.deleteRecipe = (req, res) => {
    Recipe.deleteOne({_id: req.params.id})
        .then((deleteRecipe) => {
            res.json(deleteRecipe)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.createNewRecipe = (req, res) => {
    Recipe.create(req.body)
        .then((newRecipe) => {
            res.json(newRecipe)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.findOneRecipe = (req, res) => {
    Recipe.findOne({_id: req.params.id})
    .then((foundRecipe) => {
        res.json(foundRecipe)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}