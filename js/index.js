let logintested = false
let sudahlogintadi = false
const checkLoginForm = document.querySelector('#checkLogin')
checkLoginForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const nama = document.querySelector('#nama')
  const email = document.querySelector('#email')
  const testing = document.querySelector('.logincontain')
  const warning = document.createElement('h6')

  warning.innerHTML = 'Mohon isi nama dan alamat email anda!'
  
  if(nama.value === `` || email.value === ``) {
    if (logintested === false) {
    testing.appendChild(warning)
    document.getElementsByTagName("H6")[0].setAttribute("id", "warned"); 
    logintested = true 
    }
  } else {
    if (logintested === true) {
      testing.removeChild(document.querySelector("#warned"))
    }
    let namauser = nama.value;
    let emailuser = email.value;

    if (sudahlogintadi === false) {
      saveLoginInfo(nama.value, email.value);
      handleLoggedInDisplay();
      sudahlogintadi = true
    } else {
      document.getElementsByTagName("H4")[0].innerHTML = `Selamat datang ${namauser}!`
      document.getElementsByTagName("P")[1].innerHTML = `(dengan email: ${emailuser})`
    }
  }
});

function handleLoggedInDisplay() {
  document.getElementById('checkLogin').classList.add('invisible');
  document.querySelector('.banner').removeChild(document.querySelector('#mohonlogin'));
  document.querySelector('#checkAnswer').innerHTML = "Ubah Nama dan Email";

  const afterLoginDiv = document.getElementById('after-login');
  const loginInfo = getLoginInfo();
  const cart = document.querySelector('#aatas');

  afterLoginDiv.classList.remove('hidden');
  cart.classList.remove('hidden');
  afterLoginDiv.getElementsByTagName("H4")[0].innerHTML = `Selamat datang ${loginInfo.name}!`;
  afterLoginDiv.getElementsByTagName('p')[0].innerHTML = `(dengan email: ${loginInfo.email})`;
}