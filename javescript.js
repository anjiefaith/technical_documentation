const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    const target = document.querySelector(link.getAttribute('href'));


    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
