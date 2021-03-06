var blogs = [
    {
        "name" : "Two Ways To Wear Straight Shoes",
        "id" : "blog1",
        "date": "20, MAR 2017",
        "author": "Mariya Turetska",
        "tags": "Cooking",
        "instagram" : "",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    },
    {
        "name" : "Cooking Pasta Is Hard",
        "id" : "blog2",
        "date": "20, MAR 2017",
        "instagram" : "",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "author": "Mariya Turetska",
        "tags": "Restaurants",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    },
    {
        "name" : "Dummy Text for Testing Purposes",
        "id" : "blog3",
        "date": "20, MAR 2017",
        "instagram" : "",
        "author": "Mariya Turetska",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "tags": "Industry",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
        "image" : "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
    },
    {
        "name" : "Apples Are Green",
        "id" : "blog4",
        "date": "20, MAR 2017",
        "author": "Mariya Turetska",
        "instagram" : "",
        "tags": "Unique",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloremque ratione assumenda distinctio atque voluptate sunt aut nulla error totam illo debitis eius quia, odit tempore aspernatur similique sit!",
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