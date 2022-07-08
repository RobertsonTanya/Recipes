const mongoose = require('mongoose');
const IngredientsSchema = require('./ingredients.models');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    ingredients: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Ingredient' 
        }
    ],
    instructions: {
        type: String,
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);