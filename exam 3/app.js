function getDividends() {
    const inputNumber = document.getElementById("inputNumber").value;
    let outputDiv = document.getElementById("output");
    let dividends = [];
    for (let i = 100; i <= 1000; i++) {
      if (i % inputNumber === 0) {
        dividends.push(i);
      }
    }
    outputDiv.innerHTML = dividends.join(", ");
  }