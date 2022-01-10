var recipes = [
    {
        "name": "Cinnamon Buns",
        "id": "cinnamonbuns",
        "image": "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Best-Cinnamon-Rolls_EXPS_BW20_22631_B09_29_20b.jpg",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis.",
        "preperation_time" : "2 hours",
        "servings": "6",
        "difficulty": "medium",
        "introduction" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. Provident?",
        "ingredients" : [
            {"ingredient" : "Sugar", "quantity": "60g"},
            {"ingredient" : "Milk", "quantity": "100g"},
            {"ingredient" : "Flour", "quantity": "2 cups"},
            {"ingredient" : "Cinnamon", "quantity": "30g"},
            {"ingredient" : "Butter", "quantity": "1 cup"}
        ],
        "directions" : [
            {"step" : "Step 1", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step" : "Step 2", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step" : "Step 3", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step" : "Step 4", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "}
        ],
        "tips" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "
    },
    {
        "name": "Macroons",
        "id": "macaroons",
        "image": "https://www.indulgewithmimi.com/wp-content/uploads/2020/10/tips-how-to-bake-round-macaron-shells.jpg",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis.",
        "preperation_time" : "2 hours",
        "servings": "6",
        "introduction" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. Provident?",
        "ingredients" : [
            {"ingredient" : "Sugar", "quantity": "60g"},
            {"ingredient" : "Milk", "quantity": "100g"},
            {"ingredient" : "Flour", "quantity": "2 cups"},
            {"ingredient" : "Cinnamon", "quantity": "30g"},
            {"ingredient" : "Butter", "quantity": "1 cup"}
        ],
        "directions" : [
            {"step" : "Step 1", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step" : "Step 2", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step" : "Step 3", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step" : "Step 4", "directions": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "}
        ]
    }
];


// Record if we've already fetched data
var dataFetched = false;

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