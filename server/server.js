const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config');
const recipeRoutes = require('./routes/recipe.routes.js');
const ingredientRoutes = require('./routes/ingredient.routes.js');
recipeRoutes(app);
ingredientRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));