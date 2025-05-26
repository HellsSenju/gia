fetch("teachers.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("teacher-container");
    data.forEach((teacher) => {
      const card = document.createElement("div");
      card.className = "teacher-card";
      card.innerHTML = `
            <img src="${teacher.photo}" alt="Фото преподавателя" />
            <h3>${teacher.name}</h3>
            <p>${teacher.position}</p>
            <p>${teacher.degree}</p>
          `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });
