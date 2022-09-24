import throttle from 'lodash.throttle';
{
  /* <form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>; */
}

const form = document.querySelector('.feedback-form');

const emailInputRef = document.querySelector;

const LOCALSTORAGE_KEY = 'feedback-form-state';

let userMessage = {};

form.addEventListener(
  'submit',
  throttle(e => {
    e.preventDefault();
    const { email, message } = e.currentTarget;
    userMessage.email = email.value;
    userMessage.message = message.value;
    // console.log(userMessage);
  }, 500)
);

form.addEventListener('input', e => {
  console.log(e.email.value);
});
