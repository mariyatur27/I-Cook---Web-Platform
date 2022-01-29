async function buildBlogPage(blogID) {
    if (!dataFetched) {
        await blog_fetch_data();
    }   
   // Get the area that can be modified
   let page = document.getElementById("blog_section");

   // Clear the area
   page.innerHTML = "";
   let found = false;
   for (var blog of blogs) {
       if (blog.id == blogID) {
           found = true;
           break;
       }
   }
   if (!found) {

       return;
   }
   // Domain
    let recipe_href = "blog-single.html" + "?" + "blog" + "=" + blog.id;
   // Display something to indicate that a matching recipe could not be found
//    let meta_1 = document.createElement('meta');
//     meta_1.setAttribute('property', 'og:url');
//     meta_1.setAttribute('content', recipe_href);
//     document.getElementsByTagName('head')[0].appendChild(meta_1);

//    let meta_2 = document.createElement('meta');
//     meta_2.setAttribute('property', 'og:type');
//     meta_2.setAttribute('content', 'website');
//     document.getElementsByTagName('head')[0].appendChild(meta_2);

//    let meta_3 = document.createElement('meta');
//     meta_3.setAttribute('property', 'og:title');
//     meta_3.setAttribute('content', blog.name.concat(" - ").concat("i Cook"));
//     document.getElementsByTagName('head')[0].appendChild(meta_3);

//    let meta_4 = document.createElement('meta');
//     meta_4.setAttribute('property', 'og:description');
//     meta_4.setAttribute('content', blog.description);
//     document.getElementsByTagName('head')[0].appendChild(meta_4);

//    let meta_5 = document.createElement('meta');
//     meta_5.setAttribute('property', 'og:image');
//     meta_5.setAttribute('content', blog.image);
//     document.getElementsByTagName('head')[0].appendChild(meta_5);

   let row = document.createElement("div"); row.classList.add("row");
   let sub_row = document.createElement("div"); sub_row.classList.add("col-md-12");
       let post = document.createElement("div"); post.classList.add("post"); post.classList.add("post-single");
           let post_thumb = document.createElement("div"); post_thumb.classList.add("post-thumb");
               let image = document.createElement("img"); image.classList.add("img-responsive"); image.src = blog.image;
               post_thumb.appendChild(image);
           post.appendChild(post_thumb);
           let title = document.createElement("h2"); title.classList.add("post-title"); title.innerText = blog.name;
           post.appendChild(title);
           let info = document.createElement("div"); info.classList.add("post-meta");
               let list = document.createElement("ul");
                   item1 = document.createElement("li"); item1.innerText = blog.date;
                   list.appendChild(item1);
                   item2 = document.createElement("li"); item2.innerText = "POSTED BY ".concat(blog.author.toUpperCase());
                   list.appendChild(item2);
                   item3 = document.createElement("li"); item3.innerText = blog.tags.toUpperCase();
                   list.appendChild(item3);
               info.appendChild(list);
           post.appendChild(info);
           let content = document.createElement("div"); content.classList.add("post-content"); content.classList.add("post-excerpt");
               let text = document.createElement("p"); text.innerText = blog.text;
               content.appendChild(text)
           post.appendChild(content);
           let social = document.createElement("div"); social.classList.add("post-social-share");
               let social_txt = document.createElement("h3"); social_txt.classList.add("post-sub-heading"); social_txt.innerText = "Share this post";
               social.appendChild(social_txt);
               let icons_sec = document.createElement("div"); icons_sec.classList.add("social-media-icons");

                   let a_list = document.createElement("ul");
                       let li1 = document.createElement("li");
                            let fb_section = document.createElement("div"); fb_section.classList.add("fb-share-button");
                            fb_section.setAttribute("data-href", "https://compasstutoring.ca");
                            fb_section.setAttribute("data-layout", "button"); fb_section.setAttribute("data-size", "large");
                                let fb_link = document.createElement("a"); fb_link.setAttribute("target", "_blank"); fb_link.classList.add("facebook");
                                fb_link.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse";
                                fb_link.classList.add("fb-xfbml-parse-ignore");
                                    let i1 = document.createElement("i"); i1.classList.add("tf-ion-social-facebook");
                                fb_link.appendChild(i1);
                            fb_section.appendChild(fb_link);
                        li1.appendChild(fb_section)
                       a_list.appendChild(li1);

                       let li2 = document.createElement("li");
                           let link2 = document.createElement("a"); link2.classList.add("instagram"); link2.href = blog.instagram;
                               let i2 = document.createElement("i"); i2.classList.add("tf-ion-social-instagram");
                               link2.appendChild(i2);
                           li2.appendChild(link2);
                       a_list.appendChild(li2);
                   icons_sec.appendChild(a_list);
               social.appendChild(icons_sec);
           post.appendChild(social);
       sub_row.appendChild(post);
    row.appendChild(sub_row);
    page.appendChild(row);
} 