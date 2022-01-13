// List of recipes on the front page
async function display_recipes(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("dishes");
    
    for (const recipe of recipes) {
        if (id == null || recipe.id == id) {
            let a_box = document.createElement("div"); a_box.classList.add("a_box");
                let box_image = document.createElement("img"); box_image.classList.add("the_image"); box_image.src = recipe.image;
                a_box.appendChild(box_image);
                let box_title = document.createElement("h3"); box_title.classList.add("r_name"); box_title.innerText = recipe.name;
                a_box.appendChild(box_title);
                let page_link = document.createElement("a");
                let redirectPage = "recipe.html";
                let urlParamName = "recipe";
                let page_href = redirectPage + "?" + urlParamName + "=" + recipe.id;
                page_link.href = page_href;
                page_link.classList.add("page-link");
                a_box.appendChild(page_link);
            section.appendChild(a_box);
        }
    }
}