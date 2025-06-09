let price = 1.87;
let cid = [
  ['PENNY', 0],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];

const PurchaseBtn = document.getElementById('purchase-btn');
const inputCash = document.getElementById('cash');
const result = document.getElementById('change-due');

const valor = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};

PurchaseBtn.addEventListener('click', () => {
  const cashValue = Number(inputCash.value);
    if (Math.abs(cashValue - price) < 0.01) {
    result.innerHTML = 'No change due - customer paid with exact cash';
    return;
  }
  if (cashValue < price) {
    alert('Customer does not have enough money to purchase the item');
    return;
  }
  const vueltoCliente = cashValue - price;
  const totalEnCaja = getChange(0, cid);

  if (totalEnCaja < vueltoCliente) {
  result.innerHTML = 'Status: INSUFFICIENT_FUNDS';
  return;
}
});

const getChange = (changeDue, cid) => {
  let totalEfectivo = 0;

  for (let i = 0; i < cid.length; i++) {
    console.log(`Moneda: ${cid[i][0]}, Monto: ${cid[i][1]}`); // aqui estoy haciendo la prueba de que valor  estoy mostrando  accediendo a cid[i ][0] y cid[i][1] seria el nombre de la moneda y el monto
    totalEfectivo += cid[i][1];
   
  };
    return Number(totalEfectivo.toFixed(2));
  }  // aqui termina la funcion getChange seria para obtener el total de efectivo en la caja

console.log(getChange(3, cid))