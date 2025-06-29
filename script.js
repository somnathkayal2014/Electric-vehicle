// toggle navbar

function Togglemenu(){
    const navmenu = document.querySelector('.nav-menu');
    const hamburger = document.getElementById('hamburger');

    navmenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}


  // scrolled navbar

  window.addEventListener('scroll', function () {
    const header = document.getElementById('navbar');
    if (window.scrollY > 200) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // hide nav-top 
  window.addEventListener('scroll', function () {
    const header = document.getElementById('nav-top');
    if (window.scrollY > 200) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }
  });


// Accordion script

const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const activeHeader = document.querySelector('.accordion-header.active');

      if (activeHeader && activeHeader !== header) {
        activeHeader.classList.remove('active');
        const openContent = activeHeader.nextElementSibling;
        openContent.style.maxHeight = null;
        openContent.classList.remove('open');
      }

      header.classList.toggle('active');
      const content = header.nextElementSibling;

      if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
      } else {
        content.style.maxHeight = null;
        content.classList.remove('open');
      }
    });
  });