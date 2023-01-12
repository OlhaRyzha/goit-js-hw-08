import _throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
let localKey = 'feedback-form-state';

let records = {};
loadForm();

form.addEventListener('submit', event => {
  event.preventDefault();

  const target = event.target;
  if (!target.email.value || !target.message.value) {
    alert('Заповніть, будь ласка, усі поля');
    return;
  } 

  target.reset();
  console.log(records);
  localStorage.removeItem(localKey);
})

form.addEventListener('input', _throttle((event) => {
  const target = event.target;
  records = JSON.parse(localStorage.getItem(localKey)) || {};
  records[target.name] = target.value;
  localStorage.setItem(localKey, JSON.stringify(records));

}, 500))

function loadForm() {
  try {
    let formLoad = JSON.parse(localStorage.getItem(localKey));
    if (!formLoad) {
      return;
    }

    records = formLoad;
    form.email.value = records.email || '';
    form.message.value = records.message || '';
  } catch (error) {
    console.error('Помилка ', error.message);
  }
}

