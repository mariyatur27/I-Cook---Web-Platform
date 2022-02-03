document.getElementById('cooking_b').addEventListener('click', function() {
    var article_boxes = document.getElementsByClassName('post');
    var article_name = document.getElementsByClassName('tag');
    for (var i = 0; i < article_name.length; i++) {
      if (!article_name[i].innerHTML.toLocaleLowerCase().includes("cooking")){
        article_boxes[i].style.display = "none";
      }else{
        article_boxes[i].style.display = "block";
      }
    }
  })
  
  document.getElementById('restaurants_b').addEventListener('click', function() {
    var article_boxes = document.getElementsByClassName('post');
    var article_name = document.getElementsByClassName('tag');
    for (var i = 0; i < article_name.length; i++) {
      if (!article_name[i].innerHTML.toLocaleLowerCase().includes("restaurants")){
        article_boxes[i].style.display = "none";
      }else{
        article_boxes[i].style.display = "block";
      }
    }
  })
  
  
  document.getElementById('interviews_b').addEventListener('click', function() {
    var article_boxes = document.getElementsByClassName('post');
    var article_name = document.getElementsByClassName('tag');
    for (var i = 0; i < article_name.length; i++) {
      if (!article_name[i].innerHTML.toLocaleLowerCase().includes("interviews")){
        article_boxes[i].style.display = "none";
      }else{
        article_boxes[i].style.display = "block";
      }
    }
  })
  
  
  document.getElementById('industry_b').addEventListener('click', function() {
    var article_boxes = document.getElementsByClassName('post');
    var article_name = document.getElementsByClassName('tag');
    for (var i = 0; i < article_name.length; i++) {
      if (!article_name[i].innerHTML.toLocaleLowerCase().includes("industry")){
        article_boxes[i].style.display = "none";
      }else{
        article_boxes[i].style.display = "block";
      }
    }
  })
  
  
  document.getElementById('unique_b').addEventListener('click', function() {
    var article_boxes = document.getElementsByClassName('post');
    var article_name = document.getElementsByClassName('tag');
    for (var i = 0; i < article_name.length; i++) {
      if (!article_name[i].innerHTML.toLocaleLowerCase().includes("unique")){
        article_boxes[i].style.display = "none";
      }else{
        article_boxes[i].style.display = "block";
      }
    }
  })