
let inventory = [
    { id: 1, name: "Wireless Mouse", price: 25.00, stock: 10 },
    { id: 2, name: "Keyboard", price: 45.00, stock: 0 },
    { id: 3, name: "Galax Monitor", price: 500.00, stock: 20 },
    { id: 4, name: "RTX 4090", price: 1600.00, stock: 1 },
    { id: 5, name: "Gaming Speakers", price: 120.00, stock: 123 }
];


function renderTable() {
    const tableBody = document.getElementById('inventoryBody');
    
 
    tableBody.innerHTML = "";

    inventory.forEach((item) => {
        const row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td class="${item.stock === 0 ? 'out-of-stock' : ''}">
                    ${item.stock === 0 ? 'Out of Stock' : item.stock}
                </td>
            </tr>
        `;
        
      
        tableBody.innerHTML += row;
    });
}


const productForm = document.getElementById('productForm');
productForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const newProduct = {
        id: inventory.length + 1,
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        stock: parseInt(document.getElementById('productStock').value)
    };

    inventory.push(newProduct);
    renderTable(); 
    productForm.reset(); 
});


renderTable();