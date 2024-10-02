let totalAmount = 0;

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemRate = document.getElementById('item-rate').value;

    if (itemName === "" || itemRate === "") {
        alert("Please enter item name and rate.");
        return;
    }

    const itemTotal = itemQuantity * itemRate;

    const table = document.getElementById('bill-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${itemQuantity}</td>
        <td>${itemRate}</td>
        <td>${itemTotal.toFixed(2)}</td>
        <td><button onclick="removeItem(this, ${itemTotal})">Remove</button></td>
    `;

    totalAmount += itemTotal;
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

    showNotification('Item added');
    clearForm();
}

function removeItem(button, itemTotal) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    totalAmount -= itemTotal;
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

    showNotification('Item removed');
}

function clearForm() {
    document.getElementById('item-name').value = "";
    document.getElementById('item-quantity').value = "1";
    document.getElementById('item-rate').value = "";
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.className = 'notification show';

    setTimeout(() => {
        notification.className = 'notification';
    }, 3000);
}
