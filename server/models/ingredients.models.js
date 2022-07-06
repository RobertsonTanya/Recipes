const mongoose = require('mongoose');


const IngredientsSchema = new mongoose.Schema({
    /*quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    measurement: {
        type: String,
        enum: ['each', 'oz', 'cup', 'tsp', 'tbsp']
    },*/
    name: {
        type: String,
    },
    recipes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Recipe'
        }
    ]
})

module.exports = mongoose.model('Ingredient', IngredientsSchema);