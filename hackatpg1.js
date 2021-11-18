let logintested = false
let sudahlogintadi = false
const checkLoginForm = document.querySelector('#checkLogin')
checkLoginForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const nama = document.querySelector('#nama')
  const email = document.querySelector('#email')
  const center = document.querySelector('.center')
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
      center.removeChild(document.querySelector('#mohonlogin'))
      center.removeChild(document.querySelector('#slogan'))

      button.innerHTML = "Ubah Nama dan Email"
      const datangnama = document.createElement('h4')
      datangnama.innerHTML = ``
      const datangnama1 = document.createElement(`p`)
      datangnama.innerHTML = ``
      const datangnama2 = document.createElement('h2')
      datangnama2.innerHTML = `Silahkan pilih furnitur macam apa yang ingin anda pesan`
      center.appendChild(datangnama)
      document.getElementsByTagName("H4")[0].innerHTML = `Selamat datang ${namauser}!`
      center.appendChild(datangnama1)
      document.getElementsByTagName("P")[1].innerHTML = `(dengan email: ${emailuser})`
      center.appendChild(datangnama2) 

      const anchorkur = document.createElement("a")
      anchorkur.href = "www.google.com"
      const imgkursi = document.createElement("img")
      imgkursi.src = "./assets/kursi-1.jpg"
      imgkursi.classList.add(`pilihfurnitur`)
      anchorkur.appendChild(imgkursi)
      center.appendChild(anchorkur)

      const anchormej = document.createElement("a")
      anchormej.href = "www.google.com"
      const imgmeja = document.createElement("img")
      imgmeja.src = "./assets/meja-1.jpg"
      imgmeja.classList.add(`pilihfurnitur`)
      anchormej.appendChild(imgmeja)
      center.appendChild(anchormej)

      const anchorkas = document.createElement("a")
      anchorkas.href = "www.google.com"
      const imgkasur = document.createElement("img")
      imgkasur.src = "./assets/kasur-1.jpg"
      imgkasur.classList.add(`pilihfurnitur`)
      anchorkas.appendChild(imgkasur)
      center.appendChild(anchorkas)


      sudahlogintadi = true
      
    }else {
      document.getElementsByTagName("H4")[0].innerHTML = `Selamat datang ${namauser}!`
      document.getElementsByTagName("P")[1].innerHTML = `(dengan email: ${emailuser})`
    }
  }

})