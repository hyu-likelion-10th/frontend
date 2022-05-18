import data from "./data.js";

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
