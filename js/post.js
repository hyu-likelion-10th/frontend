const getPost = () => {
  const index = sessionStorage.getItem("click");
  return JSON.parse(sessionStorage.getItem(index));
};

const setPostDetail = () => {
  const { title, body, author, createdAt } = getPost();
  const $title = document.querySelector(".blog-post-title");
  const $author = document.querySelector(".blog-post-author");
  const $date = document.querySelector(".blog-post-date");
  const $body = document.querySelector(".blog-post-body");
  $title.innerHTML = title;
  $author.innerHTML = author;
  $date.innerHTML = createdAt.split("T")[0];
  $body.innerText = body;
};

window.onload = setPostDetail();
