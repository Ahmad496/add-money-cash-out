document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById("input-pin-number").value;
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      const addMoneyNumber = parseFloat(addMoneyInput);
      console.log(typeof addMoneyNumber);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
