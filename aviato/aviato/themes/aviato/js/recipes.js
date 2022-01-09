// Could you please set up an async function that connects to fetch_data and json so that i 
// could use its info to build my js page ???

/* To add to an html file:
<script src="js/fetch_data.js"></script>
<script src="js/recipes.js"></script>
*/
/* Then at the bottom
<script>build_recipe_page();</script>
*/

// If id were to be in the url (i.e. recipes.html?id=cinnamonbuns), you could do this, instead:
/*
<script>build_recipe_page(new URL(window.location.href).searchParams.get("id"));</script>
*/

async function build_recipe_page(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("recipes");
    console.log(section);
    console.log(document.getElementById("recipes"));
    // If this page is being served from an actual website, the recipes variable will now have the
    // same contents as recipes.json. So, you can do something like: 
    
    for (const recipe of recipes) {
        if (id == null || recipe.id == id) {
            // Build the page
           let recipe_name = document.createElement("h4"); recipe_name.classList.add("r_name"); recipe_name.innerText = recipe.name;
           section.appendChild(recipe_name); 
        }
    }

// Or, if you only want to display 1 recipe per page:
   
//    let found = false;
//    for (var recipe of recipes) {
//        if (recipe.id == id) {
//            found = true;
//            break;
//        }
//    }
//    if (!found) {
//        // Display something to indicate that a matching recipe could not be found
//        return;
//    }
   // Display the recipe
}