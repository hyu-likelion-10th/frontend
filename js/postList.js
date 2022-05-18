const getSessionPost = () => {
  let postList = [];
  const index = sessionStorage.getItem("index");
  for (let i = 1; i <= index; i++) {
    const sessionIndex = String(i);
    const item = JSON.parse(sessionStorage.getItem(sessionIndex));
    postList.push(item);
  }
  return postList;
};

const createDom = (index) => {
  const $postList = document.querySelector(".blog-post-list");

  const $post = document.createElement("li");
  $post.className = "blog-post-item";

  const $a = document.createElement("a");
  $a.className = "blog-post";
  $a.setAttribute("href", "./post.html");

  const $h1 = document.createElement("h1");
  $h1.className = "blog-post-title";

  const $sub = document.createElement("div");
  $sub.className = "blog-post-sub";
  const $desc = document.createElement("div");
  $desc.className = "blog-post-desc";
  const $info = document.createElement("div");
  $desc.className = "blog-post-info";
  const $author = document.createElement("div");
  $author.className = "blog-post-author";
  const $date = document.createElement("div");
  $date.className = "blog-post-date";

  $info.appendChild($author);
  $info.appendChild($date);
  $sub.appendChild($desc);
  $sub.appendChild($info);
  $a.appendChild($h1);
  $a.appendChild($sub);
  $post.appendChild($a);
  $postList.prepend($post);

  $a.addEventListener("click", () => {
    sessionStorage.setItem("click", index);
  });

  return {
    $h1,
    $desc,
    $date,
    $author,
    $a,
  };
};

const setPost = () => {
  const postList = getSessionPost();
  postList.forEach((post, idx) => {
    const { $h1, $desc, $date, $author } = createDom(idx + 1);
    const { title, body, author, createdAt } = post;
    $h1.innerText = title;
    $desc.innerText = body.substring(0, 5);
    $author.innerText = author;
    $date.innerHTML = createdAt.split("T")[0];
  });
};

window.onload = setPost();
