fetch("data_2.json")
  .then((response) => response.json())
  .then((data) => {
    const columns = document.getElementById("columns");

    data.forEach((element) => {
      // console.log(element["group_title"]);

      const column = document.createElement("div");
      column.className = "column";

      const groupTitle = document.createElement("h2");
      groupTitle.textContent = element["group_title"];

      column.appendChild(groupTitle);

      const article = document.createElement("article");
      article.className = "card";

      element["cards"].forEach((card) => {
        const title = document.createElement("h1");
        title.textContent = card["title"];
        article.appendChild(title);

        const content = document.createElement("p");
        content.textContent = card["content"];
        article.appendChild(content);

        const date = document.createElement("p");
        date.textContent = card["date"];
        date.className = "date";
        article.appendChild(date);
      });
      column.appendChild(article);
      columns.appendChild(column);
    });
  })
  .catch((err) => {
    console.log(err);
  });
