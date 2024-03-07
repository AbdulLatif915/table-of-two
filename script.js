document.addEventListener("DOMContentLoaded", function () {
    let table = document.getElementById("multiplicationTable");

    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        
        cell1.textContent = i;
        cell2.textContent = i * 2;
    }
});