function generateTable() {
    let number = document.getElementById("num").value;
    let output = "";
    for (let i = 1; i <= 10; i++) {
      output += `${number} x ${i} = ${number * i}<br>`;
    }
    document.getElementById("table").innerHTML = output;
}
