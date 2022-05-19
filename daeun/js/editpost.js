const link = window.location.search;
const splitedLink = link.split("=");
const index = splitedLink[1];

let posts = [];
const POST_KEY = "posts";
const savedPosts = localStorage.getItem(POST_KEY);
if (savedPosts) {
    posts = JSON.parse(savedPosts);
}
const thisPost = posts[index];

const $editPostTitle = document.querySelector("#create-post-title");
const $editPostContent = document.querySelector("#create-post-content");
const $editPostConfirmBtn = document.querySelector("#post-confirm-btn");

$editPostTitle.value = thisPost.title;
$editPostContent.value = thisPost.content;
console.dir($editPostContent);

const onConfirmEditPost = () => {    
    const now = new Date();
    const form = {
        index: index,
        date: now.getFullYear() + "-" + String(now.getMonth()+1).padStart(2, "0") + "-" + now.getDate(),
        title: $editPostTitle.value,
        content: $editPostContent.value,
    };
    posts[index] = form;
    localStorage.setItem(POST_KEY, JSON.stringify(posts));
    window.location.href="./post.html";
}

$editPostConfirmBtn.addEventListener("click", onConfirmEditPost);

window.onload = $editPostContent.focus();