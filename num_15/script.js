fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const columns = document.getElementById("columns");

    data.forEach((element) => {
      const column = document.createElement("div");
      column.className = "column";

      const groupTitle = document.createElement("h2");
      groupTitle.textContent = element["group_title"];
      groupTitle.className = "column-title";
      column.appendChild(groupTitle);

      element["cards"].forEach((card) => {
        const article = document.createElement("article");
        article.className = "card";

        const title = document.createElement("h1");
        title.textContent = card["title"];
        article.appendChild(title);

        if (card["image"]) {
          const image = document.createElement("img");
          image.src = "image.jpg";
          image.alt = "Иллюстрация новости";
          image.className = "image";
          article.appendChild(image);
        }

        const content = document.createElement("p");
        content.textContent = card["content"];
        article.appendChild(content);

        const date = document.createElement("p");
        date.textContent = card["date"];
        date.className = "date";
        article.appendChild(date);
        column.appendChild(article);
      });
      columns.appendChild(column);
    });
  })
  .catch((err) => {
    console.log(err);
  });
