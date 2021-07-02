const cForm = document.getElementById('form');
const email = document.getElementById('email');
// const alertMsg = document.querySelector('.contact_form .alert_msg');
const alertMsg = document.createElement('p');
alertMsg.classList.add('alert_msg');
// alertMsg.className('alert_msg');
alertMsg.textContent = ' * Please change your email to lower case.';
const submitBtn = document.querySelector('form .submit_btn button');

cForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    submitBtn.parentNode.insertBefore(alertMsg, submitBtn);
    alertMsg.classList.add('active');
    email.style.borderColor = '#aa161d';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '2px';
    e.preventDefault();
  } else {
    alertMsg.classList.remove('active');
  }
});
