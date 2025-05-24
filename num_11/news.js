fetch('news.json')
    .then(response => response.json())
        .then(data => {
            const container = document.getElementById('news-container')
            data.forEach(element => {
                const card = document.createElement('div')
                card.className = 'news-card';
                card.innerHTML = `
                    <h1>${element.title}</h1>
                    <h5>От ${element.date}</h5>
                    <p>Автор: ${element.author}</p>
                `;
                container.appendChild(card)
            });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    })