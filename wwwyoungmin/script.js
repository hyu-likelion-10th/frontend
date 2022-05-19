import data from "./data.js";

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

//modal
//data save to localStorage (session storage에서 브라우저 닫으면 삭제되는게 싫어서 local storage로 함.)
var modalBg = document.getElementById("modal-background");
var postBtn = document.getElementById("postBtn");
var saveBtn = document.getElementById("saveBtn");
var postTitleTest = document.getElementById("post-title-read-test");
var postContentTest = document.getElementById("post-content-read-test");

postBtn.onclick = function () {
  modalBg.style.display = "block";
};
saveBtn.onclick = function () {
  modalBg.style.display = "none";
  localStorage.setItem(
    "title",
    document.getElementsByName("post-title")[0].value
  );
  localStorage.setItem(
    "content",
    document.getElementsByName("post-content")[0].value
  );
  postTitleTest.innerHTML += localStorage.getItem("title");
  postContentTest.innerHTML += localStorage.getItem("content");
};
modalBg.onclick = function (event) {
  if (event.target == modalBg) {
    modalBg.style.display = "none";
  }
};
