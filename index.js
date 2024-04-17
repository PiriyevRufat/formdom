const form = document.querySelector('form');
const tableBody = document.querySelector('.employeelist'); 
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const nationality = document.getElementById('nationality').value; 
    const position = document.getElementById('position').value;
    const experience = document.getElementById('experience').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${age}</td>
        <td>${nationality}</td>
        <td>${position}</td>
        <td>${experience}</td>
    `;
    const editCell = document.createElement('td');
    const editButton = createEditButton(newRow); // Create edit button
    editCell.appendChild(editButton);
    newRow.appendChild(editCell);
    const deleteCell = document.createElement('td');
    const deleteButton = createDeleteButton(newRow); // Create delete button
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);
    tableBody.appendChild(newRow);
    form.reset();
});
function createEditButton(row) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function() {
        const cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            const currentValue = cell.textContent;
            const input = document.createElement('input');
            input.value = currentValue;
            cell.textContent = '';
            cell.appendChild(input);
        });
    });
    return editButton;
}
function createDeleteButton(row) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(row);
    });
    return deleteButton;
}
