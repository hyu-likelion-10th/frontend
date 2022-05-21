const $title = document.querySelector("#create-post-title");
const $content = document.querySelector("#create-post-content");
const $postConfirmBtn = document.querySelector("#post-confirm-btn");

const POST_KEY = "posts";
let posts = [];

const savedPosts = localStorage.getItem(POST_KEY);
if (savedPosts) {
    posts = JSON.parse(savedPosts);
}

const onConfirmPost = () => {    
    const now = new Date();
    const form = {
        index: posts.length,
        date: now.getFullYear() + "-" + String(now.getMonth()+1).padStart(2, "0") + "-" + now.getDate(),
        title: $title.value,
        content: $content.value,
    };
    posts.push(form);
    localStorage.setItem(POST_KEY, JSON.stringify(posts));
    window.location.href="./post.html";
}

$postConfirmBtn.addEventListener("click", onConfirmPost);