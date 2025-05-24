
document.getElementById('group-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const group = formData.get('groupName');

    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);

    const container = document.getElementById('container');
    container.innerHTML = '';

    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const pairs = [1, 2, 3, 4, 5, 6];
    const timeLabels = data.time_labels;

    ["even", "odd"].forEach(weekType =>{
        const table = document.createElement('table');
        const caption = document.createElement('caption');

        // Добавление заголовка
        caption.textContent = weekType === 'even' ? "Чётная неделя" : "Нечётная неделя";
        table.appendChild(caption);

        const headerRow = document.createElement('tr');

        const infoCell = document.createElement('th');
        infoCell.textContent = "День / Пара";
        headerRow.appendChild(infoCell);

        // добавление заголовков пар (номер пары и время)
        pairs.forEach(pair => {
            const th = document.createElement('th');
            th.textContent = `${pair} - ${timeLabels[pair]}` ;
            headerRow.appendChild(th);
        })
        table.appendChild(headerRow);

        // Тело таблицы
        days.forEach(day => {
            const row = document.createElement('tr');
            const dayCell = document.createElement('td');
            dayCell.textContent = day;
            row.appendChild(dayCell);

            pairs.forEach(pair => {
                const cell = document.createElement('td');
                const room = data[weekType]?.[day]?.[pair]?.[group];
                
                if(room){
                    cell.style.backgroundColor = "red";
                    cell.textContent = room;
                }
                else{
                    cell.style.backgroundColor = "lightgreen";
                }

                row.appendChild(cell);
            })
            table.appendChild(row);
        })
        container.appendChild(table);
    })
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('container').innerHTML = "";
    // Здесь вы можете добавить код для очистки расписания группы
});