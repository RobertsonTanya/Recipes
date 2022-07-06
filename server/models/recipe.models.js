const mongoose = require('mongoose');
const IngredientsSchema = require('./ingredients.models');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    // image: {
    //     type: String,
    //     required: [true, 'Image is required']
    // },
    ingredients: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Ingredient' 
        }
    ],
    /*instructions: {
        type: String,
        required: [true, 'Instructions are required']
    }*/
});

module.exports = mongoose.model('Recipe', RecipeSchema);