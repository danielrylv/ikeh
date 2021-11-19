function proceedOrder() {
  const orders = getCurrentOrders();
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const model = params.get('model');

  orders.unshift({
    type,
    model,
    length: getNumberInput('panjang'),
    width: getNumberInput('lebar'),
    height: getNumberInput('tinggi'),
    material: getChosenMaterial(),
    color: getChosenColor(),
    quantity: getNumberInput('quantity'),
    price: calculatePrice()
  });

  saveOrders(orders);
}

function getCurrentOrders() {
  let orders = JSON.parse(window.localStorage.getItem('orders'));

  if (!orders) {
    orders = [];
  }

  return orders;
}

function saveOrders(orders) {
  window.localStorage.setItem('orders', JSON.stringify(orders));
}

function getNumberInput(id) {
  return Number(document.getElementById(id).value);
}

function formatPrice(num) {
  let numString = num.toString();
  let result = '';

  for (let i = 0; i < numString.length; i++) {
    result += numString[i];

    if (i != numString.length-1 && (numString.length-i-1) % 3 == 0) {
      result += '.';
    }
  }

  return 'Rp' + result;
}

function calculatePrice() {
  const BASE_PRICE = 1_000;

  return getNumberInput('quantity') * (getNumberInput('panjang')/10) * (getNumberInput('lebar')/10) * (getNumberInput('tinggi')/10) * BASE_PRICE;
}
