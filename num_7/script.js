document.getElementById("teacher-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const teacherName = formData.get("teacherName").trim();
  if (!teacherName) return;

  const container = document.getElementById("schedule-container");
  container.innerHTML = "Загрузка...";

  try {
    // const response = await fetch(`https://time.ulstu.ru/api/teachers/find?term=${encodeURIComponent(teacherName)}`);
    // const teachers = await response.json();
    // const teacher = teachers.find(t => t.fio.includes(teacherName));

    // if (!teacher) {
    //   container.innerHTML = "Преподаватель не найден.";
    //   return;
    // }

    // const scheduleResponse = await fetch(`https://time.ulstu.ru/api/schedule/teacher/${teacher.id}`);
    // const schedule = await scheduleResponse.json();

    const scheduleResponse = await fetch('data.json')
    const schedule = await scheduleResponse.json();
    console.log(schedule)

    renderSchedule(schedule);
  } catch (err) {
    container.innerHTML = "Ошибка при загрузке данных.";
    console.error(err);
  }
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("schedule-container").innerHTML = "";
});


function renderSchedule(data) {
  const container = document.getElementById("schedule-container");
  container.innerHTML = "";

  ["odd", "even"].forEach(weekType => {
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = weekType === "odd" ? "Нечетная неделя" : "Четная неделя";
    table.appendChild(caption);

    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const pairs = 6;

    days.forEach(day => {
      const tr = document.createElement("tr");

      const tdDay = document.createElement("td");
      tdDay.textContent = day;
      tr.appendChild(tdDay);

      for (let pair = 1; pair <= pairs; pair++) {
        const td = document.createElement("td");
        
        // Получаем список групп для конкретного дня и пары
        const groups = (data[weekType][day] && data[weekType][day][pair]) || [];

        if (groups.length > 0) {
          td.className = "red";       // Занятия есть — красный фон
          td.innerHTML = groups.join("<br>");  // Выводим группы с переносом строк
        } else {
          td.className = "green";     // Занятий нет — зеленый фон
        }

        tr.appendChild(td);
      }

      table.appendChild(tr);
    });

    container.appendChild(table);
  });
}
