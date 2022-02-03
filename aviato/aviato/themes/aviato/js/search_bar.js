// // Search bar functions
// async function searchFunction(id=null) {
//     if (!dataFetched) {
//         await fetch_data();
//     }

//     // To Do: Make a filter that filters recipes by ingredients
//     for (const recipe of recipes) {
//         document.addEventListener('keyup', event => {
//             var input = document.getElementById('search').value;
//             var circles = document.getElementsByClassName('a_box');
//             var recipe_list = [];
//             var ingredient_list = [];
//             var all_ingredients = [];
//             var input_list = [];
//             input_list.push(input);
//             for (const component of recipe.ingredients) {
//                 ingredient_list.push(component.ingredient.toLowerCase());
//             }
//             all_ingredients.push(ingredient_list);
//             recipe_list.push(recipe.name);
//             // Making a dictionary
//             var data_dict = {};
//             recipe_list.forEach((key, i) => data_dict[key] = all_ingredients[i]);
//             console.log(data_dict);
//             if (event.code === 'Space') {
//                 for (var key in data_dict) {
//                     lists = data_dict[key];
//                     input = String(input);

//                     console.log(lists);

//                 for (var i = 0; i < lists.length; i++) {
//                     if (lists[i].includes(input)) {
//                         console.log(lists[i])
//                         circles[i].style.display = "block";
//                     }
//                 }
//                     // for (var i = 0; i < lists.length; i++) {
//                     //     console.log(lists[i])
//                     //     if (lists[i].includes(input)) {
//                     //      console.log("yes")
//                     //     }
//                     // }
//                 }
//             }
//         })
//     }
// }


