async function setupRecipePage(recipeID) {
    if (!dataFetched) {
        await fetch_data();
    }   
   // Get the area that can be modified
   let page = document.getElementById("main_content");
   // Clear the area
   page.innerHTML = "";
   let found = false;
   for (var recipe of recipes) {
       if (recipe.id == recipeID) {
           found = true;
           break;
       }
   }
   if (!found) {
       // Display something to indicate that a matching recipe could not be found
       return;
   }
   // Display the recipe
   let main_section = document.createElement("div"); main_section.classList.add("the_main");
    let name = document.createElement("h1"); name.classList.add("title"); name.innerText = recipe.name;
    main_section.appendChild(name);
    let intro = document.createElement("p"); intro.classList.add("intro"); intro.innerText = recipe.introduction;
    main_section.appendChild(intro);
    let sub_section = document.createElement("div"); sub_section.classList.add("sub_section");
        let ingredients = document.createElement("div"); ingredients.classList.add("ingredients");
        let ingredient_title = document.createElement("h3"); ingredient_title.classList.add("sub_title"); ingredient_title.innerText = "Ingredients: ";
        main_section.appendChild(ingredient_title);
            let a_list = document.createElement("ul"); a_list.classList.add("ingredient_list");
                for (const food of recipe.ingredients) {
                   // Creating checkboxes
                   if ("ingredient" in food) {
                    let checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.name = food.ingredient;
                    checkbox.value = food.ingredient;
                    checkbox.id = food.ingredient;
                    let ingredient = document.createElement('label');
                    ingredient.htmlFor = food.ingredient;
                    ingredient.appendChild(document.createTextNode(food.ingredient.concat(" - ").concat(food.quantity)));
                    // a_list.appendChild(checkbox);
                    a_list.appendChild(ingredient);
                   }
                }
            ingredients.appendChild(a_list);
        sub_section.appendChild(ingredients);
        let info_section = document.createElement("div"); info_section.classList.add("info");
            let info1 = document.createElement("h3"); info1.classList.add("info_title"); info1.innerText = "Preperation Time: ".concat(recipe.preperation_time);
            info_section.appendChild(info1);
            let info3 = document.createElement("h3"); info3.classList.add("info_title"); info3.innerText = "Level of Difficulty: ".concat(recipe.difficulty);
            info_section.appendChild(info3);
            let info2 = document.createElement("h3"); info2.classList.add("info_title"); info2.innerText = "Servings: ".concat(recipe.servings);
            info_section.appendChild(info2);
        sub_section.appendChild(info_section);
        let image = document.createElement("img"); image.classList.add("recipe_img"); image.src = recipe.image;
        sub_section.appendChild(image);
    main_section.appendChild(sub_section);
    // Directions
    let middle_section = document.createElement("div"); middle_section.classList.add("middle");
      let sec_title = document.createElement("h3"); sec_title.classList.add("sub_title"); sec_title.innerText = "Directions: ";
      middle_section.appendChild(sec_title);
      for (const step of recipe.directions) {
          if ("step" in step) {
            let directions = document.createElement("div"); directions.classList.add("directions");
                 let step_number = document.createElement("h4"); step_number.classList.add("step_number"); step_number.innerText = step.step;
                 let instructions = document.createElement("p"); instructions.classList.add("instructions"); instructions.innerText = step.directions;
                 step_number.appendChild(instructions);
            directions.appendChild(step_number);
            middle_section.appendChild(directions);
          }
      }
      if ("tips" in recipe){
        let sec_title2 = document.createElement("h3"); sec_title2.classList.add("sub_title"); sec_title2.innerText = "Aditional Tips: ";
        middle_section.appendChild(sec_title2);
        let tips_text = document.createElement("p"); tips_text.classList.add("instructions"); tips_text.innerText = recipe.tips;
        middle_section.appendChild(tips_text);
      }
      let sec_title3 = document.createElement("h3"); sec_title3.classList.add("sub_title"); sec_title3.innerText = "Discover More Recipes: ";
      middle_section.appendChild(sec_title3);
    main_section.appendChild(middle_section);
   page.appendChild(main_section);
}