'use strict';

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.querySelector('#fname').value.trim();
  const emailInput = document.querySelector('#email').value.trim();
  const subjectInput = document.querySelector('#subject').value.trim();
  const messageInput = document.querySelector('#message').value.trim();

  fetch('https://formsubmit.co/ajax/yonasklibi@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      Name: nameInput,
      Email: emailInput,
      Subject: subjectInput,
      Message: messageInput,
    }),
  })
    .then(function (response) {
      response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  contactForm.reset();
});
