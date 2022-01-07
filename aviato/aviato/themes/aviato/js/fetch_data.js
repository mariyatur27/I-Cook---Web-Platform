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