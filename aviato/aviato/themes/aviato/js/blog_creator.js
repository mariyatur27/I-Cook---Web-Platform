async function blog_builder(id=null) {
    if (!dataFetched) {
        await blog_fetch_data();
    }

    var section = document.getElementById('post_builder');

    for (const blog of blogs) {
        if (id == null || blog.id == id) {
            console.log(blog);
            let main = document.createElement("div"); main.classList.add("post");
                let img_sec = document.createElement("div");  img_sec.classList.add("post-thumb"); img_sec.classList.add("post-media");
                    let image = document.createElement("img"); image.src = blog.image; 
                    img_sec.appendChild(image);
                main.appendChild(img_sec);
                let title = document.createElement("h2"); title.classList.add("post-title"); title.innerText = blog.name;
                main.appendChild(title);
                let post_info = document.createElement("div"); post_info.classList.add("post-meta");
                    let list = document.createElement("ul");
                        let li1 = document.createElement("li"); li1.innerText = blog.date;
                        let li2 = document.createElement("li"); li2.innerText = "POSTED BY".concat(" ").concat(blog.author.toUpperCase());
                        let li3 = document.createElement("li"); li3.innerText = blog.tags.toUpperCase(); li3.classList.add("tag");
                    list.appendChild(li1);
                    list.appendChild(li2);
                    list.appendChild(li3);
                post_info.appendChild(list);
                main.appendChild(post_info);
                let content = document.createElement("div"); content.classList.add("post-content");
                    let intro = document.createElement("p"); intro.innerText = blog.description;
                    content.appendChild(intro);
                    let link = document.createElement("a"); link.classList.add("btn"); link.classList.add("btn-main");
                    link.title = "Continue Reading";
                    link.innerHTML = "Continue Reading";
                    let redirectPage = "blog-single.html";
                    let urlParamName = "blog";
                    let recipe_href = redirectPage + "?" + urlParamName + "=" + blog.id;
                    link.href = recipe_href;
                    content.appendChild(link);
                main.appendChild(content)
            section.appendChild(main)
        }
    }
}