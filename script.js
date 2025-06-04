let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];


const PurchaseBtn = document.getElementById('purchase-btn');
const inputCash = document.getElementById('cash');


PurchaseBtn.addEventListener('click', () => {
  const cashValue = Number(inputCash.value);
  if (cashValue <= price) {
    alert('Customer does not have enough money to purchase the item');
    return;
  }
});