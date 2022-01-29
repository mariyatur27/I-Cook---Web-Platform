// List of recipes on the front page
async function build_recipe_page(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("recipes");

    
    for (const recipe of recipes) {
        if (id == null || recipe.id == id) {
            let box = document.createElement("div"); box.classList.add("recipe_box");
                let image = document.createElement("img"); image.classList.add("recipe_image"); image.src = recipe.image;
                box.appendChild(image);
                let contents = document.createElement("div"); contents.classList.add("box_contents");
                    let recipe_name = document.createElement("h4"); recipe_name.classList.add("r_name"); recipe_name.innerText = recipe.name;
                    contents.appendChild(recipe_name);
                    let description = document.createElement("p"); description.classList.add("r_dscr"); description.innerText = recipe.description;
                    contents.appendChild(description); 
                    if ("difficulty" in recipe){
                        let difficulty = document.createElement("h4"); difficulty.classList.add("r_name"); difficulty.innerText = "Difficulty: ".concat(recipe.difficulty.toUpperCase());
                        if (recipe.difficulty == "easy"){
                            difficulty.style.color = "green";
                        }else if (recipe.difficulty == "medium"){
                            difficulty.style.color = "orange";
                        }else{
                            difficulty.style.color = "red";
                        };
                        contents.appendChild(difficulty);
                    };
                    let recipe_link = document.createElement("a");
                    let redirectPage = "recipe.html";
                    let urlParamName = "recipe";
                    let recipe_href = redirectPage + "?" + urlParamName + "=" + recipe.id;
                    recipe_link.href = recipe_href;
                    recipe_link.classList.add("recipe_link");
                    var recipe_button = document.createElement("button"); recipe_button.classList.add("page_link"); recipe_button.type="button"; recipe_button.name="recipe_button";
                    recipe_button.innerText = "Read More";
                    recipe_link.appendChild(recipe_button);
                    contents.appendChild(recipe_link);
                box.appendChild(contents);
            section.appendChild(box); 
        }
    }
}