var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20, // Add 20px space between slides
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menuLinks = document.getElementById('menu-links');

    hamburger.addEventListener('click', function () {
        // Toggle the 'active' class on the menu links
        menuLinks.classList.toggle('active');

        // Optional: Animate the hamburger icon
        hamburger.classList.toggle('open');
    });
});

  // FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    // Toggle the active class on the clicked question
    question.classList.toggle('active');

    // Toggle the visibility of the answer
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');

    // Toggle the plus/minus icon
    const toggleIcon = question.querySelector('.toggle-icon');
    if (question.classList.contains('active')) {
      toggleIcon.textContent = '−'; // Minus sign when expanded
    } else {
      toggleIcon.textContent = '+'; // Plus sign when collapsed
    }
  });
});