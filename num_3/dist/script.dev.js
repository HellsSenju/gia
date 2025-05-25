"use strict";

var container = document.getElementById('weather-container'); // python -m http.server 8000 -поднимаем сервер

function fetchWeather() {
  var proxy, apiUrl, fullUrl, response, data, initDate, forecast;
  return regeneratorRuntime.async(function fetchWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          proxy = 'https://corsproxy.io/?';
          apiUrl = 'https://www.7timer.info/bin/api.pl?lon=48.4&lat=54.3&product=civil&output=json';
          fullUrl = proxy + encodeURIComponent(apiUrl);
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(fullUrl));

        case 6:
          response = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          initDate = parseInit(data.init);
          console.log(initDate);
          container.innerHTML = ''; // const forecast = data.dataseries.slice(0, 8); // 24 часа

          forecast = data.dataseries; // 24 часа

          forecast.forEach(function (entry) {
            // console.log(entry)
            var forecastDate = new Date(initDate.getTime() + entry.timepoint * 60 * 60 * 1000);
            console.log(new Date(initDate.getTime()));
            console.log(new Date(initDate.getTime() + entry.timepoint * 60 * 60 * 1000));
            var formattedDate = formatDate(forecastDate);
            var formattedTime = formatTime(forecastDate);
            var temp = "".concat(entry.temp2m, "\xB0C");
            var description = translateWeather(entry.weather);
            var card = document.createElement('div');
            card.className = 'weather-card';
            card.innerHTML = "\n                <h2>".concat(formattedDate, "</h2>\n                <p class=\"time\">").concat(formattedTime, "</p>\n                <div class=\"temp\">").concat(temp, "</div>\n                <div class=\"desc\">").concat(description, "</div>\n            ");
            container.appendChild(card);
          });
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          container.innerHTML = '<p>Ошибка загрузки прогноза погоды.</p>';
          console.error(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
} // 🕒 Преобразование строки init в объект Date


function parseInit(initStr) {
  var year = parseInt(initStr.slice(0, 4));
  var month = parseInt(initStr.slice(4, 6)) - 1; // месяц от 0

  var day = parseInt(initStr.slice(6, 8));
  var hour = parseInt(initStr.slice(8, 10));
  return new Date(Date.UTC(year, month, day, hour));
} // 📆 Формат dd.MM.yyyy


function formatDate(dateObj) {
  var dd = String(dateObj.getUTCDate()).padStart(2, '0');
  var mm = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  var yyyy = dateObj.getUTCFullYear();
  return "".concat(dd, ".").concat(mm, ".").concat(yyyy);
}

function formatTime(dateObj) {
  var hh = String(dateObj.getUTCHours()).padStart(2, '0');
  var mm = String(dateObj.getUTCMinutes()).padStart(2, '0');
  return "".concat(hh, ":").concat(mm);
} // 🌦️ Перевод погоды


function translateWeather(code) {
  var map = {
    clearday: 'Ясно',
    pcloudy: 'Малооблачно',
    mcloudy: 'Переменная облачность',
    cloudy: 'Пасмурно',
    rain: 'Дождь',
    lightrain: 'Легкий дождь',
    snow: 'Снег',
    ts: 'Гроза',
    fog: 'Туман'
  };
  return map[code] || 'Неизвестно';
}

fetchWeather();
//# sourceMappingURL=script.dev.js.map
