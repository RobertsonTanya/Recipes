const mongoose = require('mongoose');
const IngredientsSchema = require('./ingredients.models');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Recipes must have a name.']
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
        required: [true, 'Recipes must have instructions.']
    },
    featured: {
        type: Boolean,
        unique: true,
        default: false
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);