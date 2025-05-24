document.getElementById("auditorium-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const auditorium = formData.get("auditorium");

  const response = await fetch("data.json");
  const scheduleData = await response.json();

  const container = document.getElementById("schedule-container");
  container.innerHTML = ""; // очистка перед построением нового

  const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const pairs = [1, 2, 3, 4, 5, 6];
  const timeLabels = scheduleData.time_labels;

  ["even", "odd"].forEach(weekType => {
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = weekType === "even" ? "Чётная неделя" : "Нечётная неделя";
    table.appendChild(caption);

    // Заголовок таблицы с подписями пар
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const emptyHeader = document.createElement("th");
    emptyHeader.textContent = "День / Пара";
    headerRow.appendChild(emptyHeader);

    pairs.forEach(pair => {
      const th = document.createElement("th");
      th.textContent = `${pair} (${timeLabels[pair] || ""})`;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Тело таблицы
    const tbody = document.createElement("tbody");

    days.forEach(day => {
      const row = document.createElement("tr");
      const dayCell = document.createElement("td");
      dayCell.textContent = day;
      row.appendChild(dayCell);

      pairs.forEach(pair => {
        const cell = document.createElement("td");
        const entry = scheduleData[weekType]?.[day]?.[pair]?.[auditorium];

        if (entry && entry.length > 0) {
          cell.style.backgroundColor = "red";
          cell.textContent = entry.join(", ");
        } else {
          cell.style.backgroundColor = "lightgreen";
        }

        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
  });
});

document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("schedule-container").innerHTML = "";
});
