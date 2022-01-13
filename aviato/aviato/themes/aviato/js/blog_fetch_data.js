var blogs = [
    {
        "name" : "Two Ways To Wear Straight Shoes",
        "id" : "blog1",
        "date": "20, MAR 2017",
        "author": "Mariya Turetska",
        "tags": "Cooking, Restaurants, Bakery",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    },
    {
        "name" : "Cooking Pasta Is Hard",
        "id" : "blog1",
        "date": "20, MAR 2017",
        "author": "Mariya Turetska",
        "tags": "Cooking, Restaurants, Bakery",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    },
    {
        "name" : "Dummy Text for Testing Purposes",
        "id" : "blog1",
        "date": "20, MAR 2017",
        "author": "Mariya Turetska",
        "tags": "Cooking, Restaurants, Bakery",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    },
    {
        "name" : "Apples Are Green",
        "id" : "blog1",
        "date": "20, MAR 2017",
        "author": "Mariya Turetska",
        "tags": "Cooking, Restaurants, Bakery",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    }
]

// Record if we've already fetched data
var dataFetched = false;

async function blog_fetch_data() {
    if (window.location.protocol == "file:") {
        // For security reasons, scripts can't load files over the file: protocol
        // Just mark data as fetched, and return.
        console.log("Running from a file, won't attempt to get data from .json files");
        dataFetched = true;
        return;
    }
    // Get recipes from js/recipes.json
    blogs = await (await fetch("js/blog.json")).json();
}