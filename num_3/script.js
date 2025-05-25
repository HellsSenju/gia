const container = document.getElementById("weather-container");

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=54.3&longitude=48.4&hourly=temperature_2m&timezone=Europe%2FMoscow";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const times = data.hourly.time;
    const temps = data.hourly.temperature_2m;

    for (let i = 0; i < times.length; i += 6) {
      // Прогноз каждые 6 часов
      const date = new Date(times[i]);
      console.log(date);
      const options = {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short",
      };
      const formattedDate = date.toLocaleString("ru-RU", options);

      const card = document.createElement("div");
      card.className = "weather-card";
      card.innerHTML = `
        <h3>${formattedDate}</h3>
        <p>Температура: ${temps[i].toFixed(1)}°C</p>
      `;
      container.appendChild(card);
    }
  })
  .catch((error) => {
    container.innerHTML = "<p>Ошибка при загрузке данных погоды.</p>";
    console.error(error);
  });
