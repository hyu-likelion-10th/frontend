const link = window.location.search;
const splitedLink = link.split("=");
const index = splitedLink[1];

const $readPostTitle = document.querySelector(".read-post-title");
const $readPostDesc = document.querySelector(".read-post-desc");
const $readPostContent = document.querySelector(".read-post-content");
const $postDelete = document.querySelector(".post-delete");
const $postEdit = document.querySelector(".post-edit");

let posts = [];
const POST_KEY = "posts";
const savedPosts = localStorage.getItem(POST_KEY);
if (savedPosts) {
    posts = JSON.parse(savedPosts);
}
const thisPost = posts[index];

$readPostTitle.innerText = thisPost.title;
$readPostDesc.innerText = thisPost.date + " 정다은";
$readPostContent.innerText = thisPost.content;

const onClickDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
        posts = posts.filter((post) => { return post.index !== thisPost.index });
        localStorage.setItem(POST_KEY, JSON.stringify(posts));
        window.location.href = "./post.html";
    }
}

$postDelete.addEventListener("click", onClickDelete);
$postEdit.addEventListener("click", () => {
    window.location.href = "./editpost.html?index=" + index;
})