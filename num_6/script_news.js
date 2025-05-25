fetch("news.json")
  .then((resp) => resp.json())
  .then((data) => {
    const container = document.getElementById("news-container");
    data.forEach((element) => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h1");
      title.textContent = element["title"];
      card.appendChild(title);

      const date = document.createElement("p");
      date.textContent = `От: ${element["date"]}`;
      card.appendChild(date);

      const author = document.createElement("p");
      author.textContent = `Автор: ${element["author"]}`;
      card.appendChild(author);

      container.appendChild(card);
    });
  });
