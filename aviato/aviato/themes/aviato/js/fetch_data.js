// var recipes = [
//     {
//         "name": "Cinnamon Buns",
//         "id": "cinnamonbuns",
//         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. ",
//         "preperation_time" : "2 hours",
//         "servings": "6",
//         "introduction" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. Provident?",
//         "ingredients" : [
//             {"sugar" : "60g"},
//             {"milk" : "100g"},
//             {"flour" : "2 cups"},
//             {"cinnamon" : "30g"},
//             {"butter" : "1 cup"}
//         ],
//         "directions" : [
//             {"step_1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
//             {"step_2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
//             {"step_3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
//             {"step_4" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
//         ]
//     }
// ];


// Record if we've already fetched data
var dataFetched = false;
var recipes = [];

async function fetch_data() {
    if (window.location.protocol == "file:") {
        // For security reasons, scripts can't load files over the file: protocol
        // Just mark data as fetched, and return.
        console.log("Running from a file, won't attempt to get data from .json files");
        dataFetched = true;
        return;
    }
    // Get recipes from js/recipes.json
    recipes = await (await fetch("js/recipes.json")).json();
}