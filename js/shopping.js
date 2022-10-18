function updateNumber(product, price, isIncreasing) {
  const bookInput = document.getElementById(product + "-number");
  let bookNumber = bookInput.value;
  if (isIncreasing == true) {
    bookNumber = parseInt(bookNumber) + 1;
  } else {
    if (bookNumber > 0) {
      bookNumber = parseInt(bookNumber) - 1;
    }
  }
  bookInput.value = bookNumber;

  const caseTotal = document.getElementById(product + "-amount");
  caseTotal.innerText = bookNumber * price;
  calculateTotal();
}

function getInput(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const bookTotal = getInput("book") * 250;
  const webTotal = getInput("web") * 350;
  const subTotal = bookTotal + webTotal;
  const tax = subTotal / 5;
  const totalAmount = subTotal + tax;
  // update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById('totalAmount').innerText = totalAmount;
}

document.getElementById("plus-btn").addEventListener("click", function () {
  updateNumber("book", 250, true);
});

document.getElementById("minus-btn").addEventListener("click", function () {
  updateNumber("book", 250, false);
});

document.getElementById("plus-web-btn").addEventListener("click", function () {
  updateNumber("web", 350, true);
});
document.getElementById("minus-web-btn").addEventListener("click", function () {
  updateNumber("web", 350, false);
});
