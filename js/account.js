function logout() {
  window.localStorage.clear();
  location.reload();
}

function saveLoginInfo(name, email) {
  window.localStorage.setItem('login.name', name);
  window.localStorage.setItem('login.email', email);
}

function getLoginInfo() {
  let result = null;

  const email = window.localStorage.getItem('login.email');

  if (email) {
    result = {
      name: window.localStorage.getItem('login.name'),
      email
    }
  }

  return result;
}
