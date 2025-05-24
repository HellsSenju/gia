fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const columns = document.getElementsByName("columns");

    [("1", "2", "3")].forEach((element) => {
      console.log(data[element]);

      const column = document.createElement("div");
      column.className = "column";

      columns.appendChild(column);
    });
  })
  .catch((err) => {
    console.log(err);
  });
