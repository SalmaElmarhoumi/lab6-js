const loginBtn = document.getElementById('loginBtn');
const messageEl = document.getElementById('message');

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const login = {
    username,
    password,
  };

  if (username === 'admin' && password === '123') {
    messageEl.textContent = 'Welcome, admin!';
  } else {
    messageEl.textContent = 'Not registered!';
  }

  // Clear form fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});


