
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if(link.getAttribute('href').includes(currentPage)){
      document.querySelector('.nav-link.active')?.classList.remove('active');
      link.classList.add('active');
    }
  });
