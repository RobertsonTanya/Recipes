const Recipe = require('../models/recipe.models');
const Ingredient = require('../models/ingredients.models');


const updateSubDocById = async (model, doc, field, subDoc) => {
    let updated = await model.findOneAndUpdate({_id: doc._id},
        {$addToSet: {[field]: subDoc._id}},
        { new: true, useFindAndModify: true}
    )
    return updated;
}

module.exports.creation = async (req, res) => {
    let newRecipeObj = await new Recipe({name: req.body.name, ingredients: []})

    let ingredientsArray = req.body.ingredients;

    let updatedRecipe;

    newRecipeObj.save();

    if(ingredientsArray){
        const ingredientsLoop = async () => {
            for(let i = 0; i < ingredientsArray.length; i++){
                let ingredientExists = await Ingredient.findOne({name: ingredientsArray[i].name});
                
                if(ingredientExists){
                    updatedRecipe = await updateSubDocById(Recipe, newRecipeObj, "ingredients", ingredientExists);

                    await updateSubDocById(Ingredient, ingredientExists, "recipes", updatedRecipe);

                } else {
                    let newIngredient = await Ingredient.create(ingredientsArray[i]);

                    updatedRecipe = await updateSubDocById(Recipe, newRecipeObj, "ingredients", newIngredient);

                    await updateSubDocById(Ingredient, newIngredient, "recipes", updatedRecipe);
                }
            }
        }
        await ingredientsLoop();

        res.json(updatedRecipe);
    }
    
}















// const updateSubDocById = async (model, field, subDoc, doc) => {
//     let updated = await mongoose.model.findOneAndUpdate(
//         {_id: doc._id},
//         {$addToSet: {[field]: subDoc._id}},
//         { new: true, useFindAndModify: true}
//     )
//     return updated;
// }

// module.exports.creation = async (req, res) => {

//         if(req.params.create === "ingredients"){
//             MainModel = Ingredient
//             subField = "recipes"
//             mainField = "ingredients"
//             SubModel = Recipe
//         } else {
//             MainModel = Recipe
//             subField = "ingredients"
//             mainField = "recipes"
//             SubModel = Ingredient
//         }
        
//         let { name, [subField]: subby, ...rest} = req.body;
        

//         // create a new Recipe immediately
//         let newMainObj = await new MainModel({name, [subField]: []});
//         // let additionalFieldArray = [];

//         Object.entries(rest).forEach(([key, value]) => {
//             // additionalFieldArray.push(({ [key]: value }));
//             newMainObj[key] = value;
//         })


//         // let ingredientArray = req.body.ingredients;// we will need to loop thru this
//         let subArray = req.body[subField];
//         let updatedMain;
//         newMainObj.save();//saving variable to the db

//         if(subArray){
//             const subFieldLoop = async () => {
//                 for(let sub of subArray){
//                     let subExists = await SubModel.findOne({name: sub.name});
//                     if(subExists){
//                         //update recipe
//                         updatedMain = await updateSubDocById(MainModel, newMainObj, [subField], subExists);
//                         //update ingredients
//                         await updateSubDocById(SubModel, subExists, [mainField], updatedMain);
                        
//                     } else {
//                         let newSub = await SubModel.create(sub);
//                         //update recipe
//                         updatedMain = await updateSubDocById(MainModel, newMainObj, [subField], newSub);
//                         //update ingredients
//                         await updateSubDocById(SubModel, newSub, [mainField], updatedMain);
//                     }
//                 }
//             }
//             await subFieldLoop();

//             res.json(updatedMain);
//         }
// }

// Route for retrieving a Recipe by id and populating it's Ingredient.
module.exports.findOneRecipe = (req, res) => {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    Recipe.findOne({ _id: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("ingredients")
        .then(function(dbRecipe) {
            // If we were able to successfully find an Recipe with the given id, send it back to the client
            res.json(dbRecipe);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
};