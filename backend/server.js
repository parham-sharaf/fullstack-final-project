const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

const db = new sqlite3.Database('../DB/recipe.db');

// Endpoint to search for recipes
app.get('/searchRecipe', (req, res) => {
  const searchItem = req.query.searchValue;
  console.log('Search Item:', searchItem);

  db.all('SELECT name, ingredients, instructions FROM Food WHERE name = ?', [searchItem], (err, rows) => {
    if (err) {
      res.status(500).send(err);
      console.log('Recipes were not sent successfully.');
    } else {
      const name = rows.map(row => row.name);
      const ingredients = rows.map(row => row.ingredients);
      const instructions = rows.map(row => row.instructions);
      console.log(`Name for ${searchItem}:`, name);
      console.log(`Ingredients for ${searchItem}:`, ingredients);
      console.log(`Instructions for ${searchItem}:`, instructions);

      const recipeDetails = {
        name,
        ingredients,
        instructions
      };

      res.json(recipeDetails); // Send the retrieved recipes' details as a JSON response
      console.log('Recipes sent successfully.');
    }
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
