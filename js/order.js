function proceedOrder() {
  const orders = getCurrentOrders();
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const model = params.get('model');

  orders.push({
    type,
    model,
    width: getNumberInput('lebar'),
    height: getNumberInput('tinggi'),
    wood: 1,
    color: getChosenColor(),
    quantity: getNumberInput('quantity'),
    price: calculatePrice()
  });

  saveOrders(orders);

  displayCurrentOrders();
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

function displayCurrentOrders() {
  const orders = getCurrentOrders();

  const currentOrdersDiv = document.getElementById('current-orders');

  currentOrdersDiv.innerHTML = '';

  for (let i = 0; i < orders.length; i++) {
    const div = document.createElement('div');

    div.innerHTML = JSON.stringify(orders[i]);

    currentOrdersDiv.appendChild(div);
  }
}

function getNumberInput(id) {
  return Number(document.getElementById(id).value);
}

function clearOrders() {
  window.localStorage.clear();

  displayCurrentOrders();
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
  const BASE_PRICE = 1_000_000;

  return getNumberInput('quantity') * BASE_PRICE;
}
