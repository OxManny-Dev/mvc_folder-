const $submitBtn = document.getElementById('submitBtn');
const $todoInput = document.getElementById('todo');


$submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  if ($todoInput.value.trim() === '') {
    return alert('Please enter a todo');
  }


  try {
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({todo: $todoInput.value}),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }


});