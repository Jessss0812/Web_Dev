
const inventoryManager = {
  
    inventory: [
        { id: 1, name: "Wireless Mouse", price: 25.00, stock: 10 },
        { id: 2, name: "Keyboard", price: 45.00, stock: 0 },
        { id: 3, name: "Galax Monitor", price: 500.00, stock: 20 },
        { id: 4, name: "RTX 9090 1/1", price: 1000000.00, stock: 1 },
        { id: 5, name: "Gaming Speakers", price: 12345.00, stock: 123 }
    ],

 
    renderTable: function() {
        const tableBody = document.getElementById("inventoryBody");
   
        tableBody.innerHTML = "";

     
        for (let i = 0; i < this.inventory.length; i++) {
         
            let item = this.inventory[i];

            let row = "<tr>" +
                        "<td>" + item.id + "</td>" +
                        "<td>" + item.name + "</td>" +
                        "<td>$" + item.price + "</td>" +
                        "<td>" + item.stock + "</td>" +
                      "</tr>";
            
          
            tableBody.innerHTML += row;
        }
    },

   
    addProduct: function(n, p, s) {
        let newProduct = {
            id: this.inventory.length + 1,
            name: n,
            price: parseFloat(p), 
            stock: parseInt(s)    
        };

        this.inventory.push(newProduct);
        this.renderTable(); 
    }
};




inventoryManager.renderTable();

document.getElementById("productForm").onsubmit = function(e) {
    e.preventDefault();
    
    let name = document.getElementById("pName").value;
    let price = document.getElementById("pPrice").value;
    let stock = document.getElementById("pStock").value;


    inventoryManager.addProduct(name, price, stock);

    document.getElementById("pName").value = "";
    document.getElementById("pPrice").value = "";
    document.getElementById("pStock").value = "";
};