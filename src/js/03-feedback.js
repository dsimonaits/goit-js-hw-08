import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name=email]'),
  message: document.querySelector('textarea[name=message'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.email.setAttribute('required', '');
refs.message.setAttribute('required', '');

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let userMessage = localStorage.getItem(LOCAL_STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  : {};

populateFormInput();

function onFormInput(e) {
  userMessage[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userMessage));
}

function populateFormInput() {
  const savedUserMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedUserMessage) {
    const parsedUserMessage = JSON.parse(savedUserMessage);
    refs.email.value = parsedUserMessage.email || '';
    refs.message.value = parsedUserMessage.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(userMessage);
  userMessage = {};
}
