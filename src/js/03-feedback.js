import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const savedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
const parsedData = JSON.parse(savedData);
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});
entryFormInput();
function onInput() {
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function entryFormInput() {
  const savedlocalStorage = localStorage.getItem(STORAGE_KEY);

  if (savedlocalStorage) {
    refs.form.email.value = parsedData.email;
    refs.form.message.value = parsedData.message;
  }
}
