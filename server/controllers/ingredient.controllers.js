const Ingredient = require('../models/ingredients.models');


module.exports.createNewIngredient = (req, res) => {
    Ingredient.create(req.body)
        .then((newIngredient) => {
            res.json(newIngredient)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.getAllIngredients = (req, res) => {
    Ingredient.find().sort({name: 1})
        .then((allIngredients) => {
            res.json(allIngredients)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.updateIngredient = (req, res) => {
    Ingredient.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedIngredient) => {
            res.json(updatedIngredient)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.deleteIngredient = (req, res) => {
    Ingredient.deleteOne({_id: req.params.id})
        .then((deleteIngredient) => {
            res.json(deleteIngredient)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.findOneIngredient = (req, res) => {
    Ingredient.findOne({_id: req.params.id})
    .then((foundIngredient) => {
        res.json(foundIngredient)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}