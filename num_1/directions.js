fetch('directions.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#directions-table tbody');

    data.forEach(group => {
      group.directions.forEach((direction, index) => {
        const row = document.createElement('tr');

        if (index === 0) {
          const degreeCell = document.createElement('td');
          degreeCell.textContent = group.degree;
          degreeCell.rowSpan = group.directions.length;
          row.appendChild(degreeCell);
        }

        const directionCell = document.createElement('td');
        directionCell.textContent = `${direction.code} ${direction.name}`;
        const profileCell = document.createElement('td');
        profileCell.textContent = direction.profile;

        row.appendChild(directionCell);
        row.appendChild(profileCell);

        tbody.appendChild(row);
      });
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке направлений:', error);
  });