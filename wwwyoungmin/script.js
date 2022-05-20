import data from "./data.js";

//feed items
let titleContent = JSON.parse(localStorage.getItem("title-content"));
if (titleContent === null) {
  var feedItems = [];
  var feedItem = { title: "a", content: "b" };
  feedItems.push(feedItem);
  localStorage.setItem("title-content", JSON.stringify(feedItems));
}

//main card-list
let i = 0;
for (i = 0; i < data.length; i++) {
  $("#card-list").append(
    `
    <div class="card">
        <div class="card-content">
            <img class="card-img" src="${String(data[i].imgSrc)}"/>
            <p>${data[i].text}</p>
        </div>
        <div class="card-footer">
            <p>#${data[i].tag}</p>
            <p>${data[i].date}</p>
        </div>
    </div>
    `
  );
}

//modal date
var today = new Date();
$("#post-date").append(`
  <time datetime="${today}">${today}</time>
`);

//feed content-list
let a = 0;
for (a = 0; a < titleContent.length; a++) {
  $("#content-list").append(
    `
    <div class="content">
        <div class="content-header">
          <p id="post-title-read-test" class="post-title-read">${titleContent[a].title}</p>
          <button id="editBtn" class="button-reverse"><p class="menu-tab-reverse">Edit</p></button>
        </div>
        <div class="content-body">
          <p id="post-content-read-test" class="post-content-read">${titleContent[a].content}</p>
        </div>
    </div>
    `
  );
}

//modal & feed
//data save to localStorage (session storage에서 브라우저 닫으면 삭제되는게 싫어서 local storage로 함.)
var modalBg = document.getElementById("modal-background");
var postBtn = document.getElementById("postBtn");
var saveBtn = document.getElementById("saveBtn");
var editBtn = document.getElementById("editBtn");

const setFeedItem = () => {
  var feedItem = { title: "", content: "" };
  feedItem.title = document.getElementsByName("post-title")[0].value;
  feedItem.content = document.getElementsByName("post-content")[0].value;
  return feedItem;
};
postBtn.onclick = function () {
  modalBg.style.display = "block";
};
saveBtn.onclick = function () {
  modalBg.style.display = "none";

  var feedItems = JSON.parse(localStorage.getItem("title-content"));

  feedItems.push(setFeedItem());
  localStorage.setItem("title-content", JSON.stringify(feedItems));
  document.location.reload();
};
editBtn.onclick = function (event) {
  // feedItems
  // setFeedItem()
};

modalBg.onclick = function (event) {
  if (event.target == modalBg) {
    modalBg.style.display = "none";
  }
};
