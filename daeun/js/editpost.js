const link = window.location.search;
const splitedLink = link.split("=");
const index = parseInt(splitedLink[1]);

let posts = [];
let thisPost;
const POST_KEY = "posts";
const savedPosts = localStorage.getItem(POST_KEY);
if (savedPosts) {
    posts = JSON.parse(savedPosts);
    posts.forEach((post) => {
        if (post.index === index) {
            thisPost = post;
        }
    });
}

const $editPostTitle = document.querySelector("#create-post-title");
const $editPostContent = document.querySelector("#create-post-content");
const $editPostConfirmBtn = document.querySelector("#post-confirm-btn");

$editPostTitle.value = thisPost.title;
$editPostContent.value = thisPost.content;
console.dir($editPostContent);

const onConfirmEditPost = () => {    
    const now = new Date();
    posts.forEach((post) => {
        if (post.index === index) {
            post.date =  now.getFullYear() + "-" + String(now.getMonth()+1).padStart(2, "0") + "-" + now.getDate();
            post.title = $editPostTitle.value;
            post.content = $editPostContent.value;
        }
    });
    localStorage.setItem(POST_KEY, JSON.stringify(posts));
    window.location.href="./post.html";
}

$editPostConfirmBtn.addEventListener("click", onConfirmEditPost);

window.onload = $editPostContent.focus();