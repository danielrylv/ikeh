let logintested = false
let sudahlogintadi = false
const checkLoginForm = document.querySelector('#checkLogin')
checkLoginForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const nama = document.querySelector('#nama')
  const email = document.querySelector('#email')
  const banner = document.querySelector('.banner')
  const testing = document.querySelector('.logincontain')
  const button = document.querySelector('#checkAnswer')
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
    let namauser = nama.value
    let emailuser = email.value

    if (sudahlogintadi === false) {
      banner.removeChild(document.querySelector('#mohonlogin'))

      button.innerHTML = "Ubah Nama dan Email"

      const afterLoginDiv = document.getElementById('after-login');

      afterLoginDiv.classList.remove('hidden');
      afterLoginDiv.getElementsByTagName("H4")[0].innerHTML = `Selamat datang ${namauser}!`
      afterLoginDiv.getElementsByTagName('p')[0].innerHTML = `(dengan email: ${emailuser})`;

      sudahlogintadi = true
      
    } else {
      document.getElementsByTagName("H4")[0].innerHTML = `Selamat datang ${namauser}!`
      document.getElementsByTagName("P")[1].innerHTML = `(dengan email: ${emailuser})`
    }
  }

})
