const btnContact = document.querySelectorAll('.contact');
const btnLearn = document.querySelectorAll('.learn');

btnContact.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(btnContact);
  const contactSection = document.querySelector('.contact-section');
  contactSection.scrollIntoView(true);
});

btnLearn.addEventListener('click', (e) => {
  e.preventDefault();
  const learnSection = document.querySelector('.blog-section');
  learnSection.scrollIntoView(true);
});
