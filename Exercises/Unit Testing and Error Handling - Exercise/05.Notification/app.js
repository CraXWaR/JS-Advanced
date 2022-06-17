function notify(message) {
  //console.log('todo')
  // TODO:
  let el = document.getElementById('notification')

  el.textContent = message;
  el.style.display = 'block';

  el.addEventListener('click', () => {
    el.style.display = 'none'
  })
}