const $username = document.getElementById('username');
const $password = document.getElementById('password');
const $submitBtn = document.getElementById('submitBtn');
const $logoutBtn = document.getElementById('logout');


$submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = $username.value;
  const password = $password.value;

  if (!username || !password) {
    return alert('Username and password must be provided');
  }

  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    const data = await response.json();

    location.href = `/users/${data.id}`;

  } catch (error) {
    alert(error);
  }
});


$logoutBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
    });
    const data = await response.json();
    location.reload();
  } catch (error) {
    alert(error);
  }


});