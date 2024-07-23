const items = [
    { name: "Item 1", category: "Category 1", type: "Type 1", location: "local" },
    { name: "Item 2", category: "Category 2", type: "Type 1", location: "local" },
    { name: "Item 3", category: "Category 3", type: "Type 2", location: "remote" },
    { name: "Item 4", category: "Category 4", type: "Type 2", location: "remote" },
    { name: "Item 5", category: "Category 1", type: "Type 1", location: "local" },
    { name: "Item 6", category: "Category 2", type: "Type 1", location: "local" },
    { name: "Item 7", category: "Category 3", type: "Type 2", location: "remote" },
    { name: "Item 8", category: "Category 4", type: "Type 2", location: "remote" },
    { name: "Item 9", category: "Category 1", type: "Type 1", location: "local" },
    { name: "Item 10", category: "Category 2", type: "Type 1", location: "local" },
    // Aggiungi ulteriori elementi generici se necessario
];

function displayItems(filteredItems) {
    const itemList = document.querySelector('#itemList tbody');
    itemList.innerHTML = '';

    filteredItems.forEach(item => {
        const itemRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        itemRow.appendChild(nameCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = item.category;
        itemRow.appendChild(categoryCell);

        const typeCell = document.createElement('td');
        typeCell.textContent = item.type;
        itemRow.appendChild(typeCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = item.location === 'local' ? 'Locale' : 'Remoto';
        itemRow.appendChild(locationCell);

        itemList.appendChild(itemRow);
    });
}

function searchItems() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchInput));
    displayItems(filteredItems);
}

function filterItems(status) {
    let filteredItems;

    if (status === 'all') {
        filteredItems = items;
    } else if (status === 'category1') {
        filteredItems = items.filter(item => item.category === 'Category 1');
    } else if (status === 'category2') {
        filteredItems = items.filter(item => item.category === 'Category 2');
    }

    displayItems(filteredItems);
}

function filterType(type) {
    const filteredItems = items.filter(item => item.type === type);
    displayItems(filteredItems);
}

function filterLocation(location) {
    const filteredItems = items.filter(item => item.location === location);
    displayItems(filteredItems);
}

// Inizializza la lista degli elementi
displayItems(items);
