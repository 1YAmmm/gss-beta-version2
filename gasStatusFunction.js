document.getElementById("GSPremium").onclick = function() {
    const GSPremiumTank = Number(window.prompt("Enter Premium Total Tank Liters:"));
    const totalTankCapacity = 1000; // Assume 1000 liters is the full capacity for calculation
    if (!isNaN(GSPremiumTank) && GSPremiumTank >= 0 && GSPremiumTank <= totalTankCapacity) {
        const percentage = (GSPremiumTank / totalTankCapacity) * 100;
        document.getElementById("%premium").innerText = `${GSPremiumTank.toFixed()} liters`;
        document.querySelector('.premiumBar').style.width = `${percentage.toFixed(2)}%`;
    } else {
        alert("sinet kong total tank capacity is 1000, pwede naman gawing 1M");
    }
};

document.getElementById("GSDiesel").onclick = function() {
    const GSDieselTank = Number(window.prompt("Enter Diesel Total Tank Liters:"));
    const totalTankCapacity = 1000; // Assume 1000 liters is the full capacity for calculation
    if (!isNaN(GSDieselTank) && GSDieselTank >= 0 && GSDieselTank <= totalTankCapacity) {
        const percentage = (GSDieselTank / totalTankCapacity) * 100;
        document.getElementById("%diesel").innerText = `${GSDieselTank.toFixed()} liters`;
        document.querySelector('.dieselBar').style.width = `${percentage.toFixed(2)}%`;
    } else {
        alert("sinet kong total tank capacity is 1000, pwede naman gawing 1M");
    }
};

document.getElementById("GSUnleaded").onclick = function() {
    const GSUnleadedTank = Number(window.prompt("Enter Unleaded Total Tank Liters:"));
    const totalTankCapacity = 1000; // Assume 1000 liters is the full capacity for calculation
    if (!isNaN(GSUnleadedTank) && GSUnleadedTank >= 0 && GSUnleadedTank <= totalTankCapacity) {
        const percentage = (GSUnleadedTank / totalTankCapacity) * 100;
        document.getElementById("%unleaded").innerText = `${GSUnleadedTank.toFixed()} liters`;
        document.querySelector('.unleadedBar').style.width = `${percentage.toFixed(2)}%`;
    } else {
        alert("sinet kong total tank capacity is 1000, pwede naman gawing 1M");
    }
};
