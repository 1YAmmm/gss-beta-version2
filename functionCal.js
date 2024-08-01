
let totalSales = {
    premium: 0,
    diesel: 0,
    unleaded: 0,
    total: 0
};

let totalLiters = {
    premium: 0,
    diesel: 0,
    unleaded: 0
};

function calculateTotal(gasType) {
    const price = parseFloat(document.getElementById(`${gasType}-price`).value);
    const quantity = parseFloat(document.getElementById(`${gasType}-quantity`).value);
    let previousQuantity = parseFloat(document.getElementById(`${gasType}-previous`).value);
    const currentLiters = quantity - previousQuantity;
    
    if (currentLiters < 0) {
        alert("Current quantity must be greater than or equal to previous quantity.");
        return;
    }

    const total = (currentLiters * price).toFixed(2);

    document.getElementById(`${gasType}-total`).innerText = total;
    // Clear the current quantity in liters
    document.getElementById(`${gasType}-quantity`).value = "";
    // Update previous quantity
    document.getElementById(`${gasType}-previous`).value = quantity;
    // Update total sales
    totalSales[gasType] += parseFloat(total);
    totalSales.total += parseFloat(total);

    // Update total liters
    totalLiters[gasType] += currentLiters;

    // Update display
    document.getElementById('Totalbalance').innerText = `${totalSales.total.toFixed(2)}`;
    document.getElementById('Premium').innerText = `${totalSales.premium.toFixed(2)}`;
    document.getElementById('Diesel').innerText = `${totalSales.diesel.toFixed(2)}`;
    document.getElementById('Unleaded').innerText = `${totalSales.unleaded.toFixed(2)}`;

    //upadte and display total liters
    document.getElementById(`premium-total-liters-slide`).innerText = `${totalLiters.premium.toFixed(2)}`;
    document.getElementById(`diesel-total-liters-slide`).innerText = `${totalLiters.diesel.toFixed(2)}`;
    document.getElementById(`unleaded-total-liters-slide`).innerText = `${totalLiters.unleaded.toFixed(2)}`;
}

function displayCurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    document.getElementById('current-date').innerText = formattedDate;
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentDate();
});


