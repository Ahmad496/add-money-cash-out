document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    if (pinNumber === "1234") {
      console.log("money is reducing");
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const cashOutNumber = parseFloat(cashOut);
      const newBalance = balanceNumber - cashOutNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out. Please try again later.");
    }
  });
