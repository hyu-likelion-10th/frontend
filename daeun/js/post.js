const $newPostBtn = document.querySelector("#new-post-btn");
const $postCardsDiv = document.querySelector(".post-cards-div");

const POST_KEY = "posts";
let posts = [];
const savedPosts = localStorage.getItem(POST_KEY);
if (savedPosts) {
    posts = JSON.parse(savedPosts);
}

const getEachPostCard = (post) => {
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    const p = document.createElement("p");
    const a = document.createElement("a");

    outerDiv.className = "card";
    innerDiv.className = "card-body";
    h5.className = "card-title";
    h6.className = "card-subtitle mb-2 text-muted";
    p.className="card-text";
    a.className="card-link";

    h5.innerText = post.title;
    h6.innerText = post.date + " 정다은";
    p.innerText = post.content;
    a.innerText = "More...";
    a.href="./readpost.html?index=" + post.index;

    innerDiv.appendChild(h5);
    innerDiv.appendChild(h6);
    innerDiv.appendChild(p);
    innerDiv.appendChild(a);
    outerDiv.appendChild(innerDiv);
    $postCardsDiv.appendChild(outerDiv);
}

const getAllPostCards = () => {
    posts.forEach((post) => {
        getEachPostCard(post);
    });
}

window.onload = getAllPostCards();
$newPostBtn.addEventListener("click", () => {
    window.location.href = "./createpost.html";
});