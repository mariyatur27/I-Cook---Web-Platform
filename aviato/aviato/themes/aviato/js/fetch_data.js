var recepies = [
    {
        "name": "Cinnamon Buns",
        "id": "cinnamonbuns",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. ",
        "preperation_time" : "2 hours",
        "servings": "6",
        "introduction" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. Provident?",
        "ingredients" : [
            {"sugar" : "60g"},
            {"milk" : "100g"},
            {"flour" : "2 cups"},
            {"cinnamon" : "30g"},
            {"butter" : "1 cup"}
        ],
        "directions" : [
            {"step_1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step_2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step_3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
            {"step_4" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sequi magni ad omnis, maxime impedit quia, ea illum vitae earum reprehenderit dolor dolorem beatae exercitationem tempore nisi aperiam quis. "},
        ]
    }
];


var dataFetched = false;

async function fetchData() {
    if (window.location.protocol == "file:") {
        console.log("fetchData: Running from a file, won't attempt to load data.");
        dataFetched = true;
    } else {
        console.log("fetchData: Starting to load data.");
        recepies = await (await fetch("js/recepies.json")).json();
    }
    console.log("fetchData: Starting to sort data.");
    events.sort((event1, event2) => {return event1.start_time - event2.start_time});
    console.log("fetchData: Done sorting data.");
    dataFetched = true;
}