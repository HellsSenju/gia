const container = document.getElementById('weather-container');

// python -m http.server 8000 -поднимаем сервер

async function fetchWeather() {
    try {
        const proxy = 'https://corsproxy.io/?';
        const apiUrl = 'https://www.7timer.info/bin/api.pl?lon=48.4&lat=54.3&product=civil&output=json';
        const fullUrl = proxy + encodeURIComponent(apiUrl);

        const response = await fetch(fullUrl);
        const data = await response.json();
        
        const initDate = parseInit(data.init);
        console.log(initDate)

        container.innerHTML = '';

        // const forecast = data.dataseries.slice(0, 8); // 24 часа
        const forecast = data.dataseries; // 24 часа

        forecast.forEach(entry => {
            // console.log(entry)

            const forecastDate = new Date(initDate.getTime() + entry.timepoint * 60 * 60 * 1000);
            console.log(new Date(initDate.getTime()))
            console.log(new Date(initDate.getTime() + entry.timepoint * 60 * 60 * 1000))
            const formattedDate = formatDate(forecastDate);
            const formattedTime = formatTime(forecastDate);

            const temp = `${entry.temp2m}°C`;
            const description = translateWeather(entry.weather);

            const card = document.createElement('div');
            card.className = 'weather-card';
            card.innerHTML = `
                <h2>${formattedDate}</h2>
                <p class="time">${formattedTime}</p>
                <div class="temp">${temp}</div>
                <div class="desc">${description}</div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p>Ошибка загрузки прогноза погоды.</p>';
        console.error(error);
    }
}


// 🕒 Преобразование строки init в объект Date
function parseInit(initStr) {
    const year = parseInt(initStr.slice(0, 4));
    const month = parseInt(initStr.slice(4, 6)) - 1; // месяц от 0
    const day = parseInt(initStr.slice(6, 8));
    const hour = parseInt(initStr.slice(8, 10));
    return new Date(Date.UTC(year, month, day, hour));
}

// 📆 Формат dd.MM.yyyy
function formatDate(dateObj) {
    const dd = String(dateObj.getUTCDate()).padStart(2, '0');
    const mm = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = dateObj.getUTCFullYear();
    return `${dd}.${mm}.${yyyy}`;
}

function formatTime(dateObj) {
    const hh = String(dateObj.getUTCHours()).padStart(2, '0');
    const mm = String(dateObj.getUTCMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
}

// 🌦️ Перевод погоды
function translateWeather(code) {
    const map = {
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
