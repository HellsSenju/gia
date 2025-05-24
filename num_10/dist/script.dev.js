"use strict";

fetch("data_2.json").then(function (response) {
  return response.json();
}).then(function (data) {
  var columns = document.getElementById("columns");
  data.forEach(function (element) {
    // console.log(element["group_title"]);
    var column = document.createElement("div");
    column.className = "column";
    var groupTitle = document.createElement("h2");
    groupTitle.textContent = element["group_title"];
    column.appendChild(groupTitle);
    var article = document.createElement("article");
    article.className = "card";
    element["cards"].forEach(function (card) {
      var title = document.createElement("h1");
      title.textContent = card["title"];
      article.appendChild(title);
      var content = document.createElement("p");
      content.textContent = card["content"];
      article.appendChild(content);
      var date = document.createElement("p");
      date.textContent = card["date"];
      date.className = "date";
      article.appendChild(date);
    });
    column.appendChild(article);
    columns.appendChild(column);
  });
})["catch"](function (err) {
  console.log(err);
});
//# sourceMappingURL=script.dev.js.map
