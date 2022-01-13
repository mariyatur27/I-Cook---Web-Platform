// Search bar functions
async function searchFunction(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    // To Do: Make a filter that filters recipes by ingredients
    for (const recipe of recipes) {
        document.addEventListener('keyup', event => {
            var input = document.getElementById('search').value;
            var recipe_list = [];
            var ingredient_list = [];
            var all_ingredients = [];
            var input_list = [];
            input_list.push(input);
            console.log(input_list);
            for (const component of recipe.ingredients) {
                ingredient_list.push(component.ingredient.toLowerCase());
            }
            all_ingredients.push(ingredient_list);
            recipe_list.push(recipe.name);
            // Making a dictionary
            var data_dict = {};
            recipe_list.forEach((key, i) => data_dict[key] = all_ingredients[i]);
            if (event.code === 'Space') {
                for (var key in data_dict) {
                    console.log(data_dict[key]);
                    console.log(input);
                    lists = data_dict[key];
                    for (var i = 0; i < lists.length; i++) {
                        if (input = lists[i]) {
                         
                        }
                    }
                }
            }
        })
    }
}
