document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    const isActive = nav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
  });

  document.addEventListener('click', (event) => {
    if (
      nav.classList.contains('active') && 
      !nav.contains(event.target) && 
      !hamburger.contains(event.target)
    ) {
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      answer.classList.toggle('open');
    });
  });
});
