function scrollToAnchor(event) {
  event.preventDefault(); 

  const targetId = event.currentTarget.getAttribute("href"); 
  const targetElement = document.querySelector(targetId); 

  if (targetElement) {
      var offset = 100;
      var targetOffset = targetElement.getBoundingClientRect().top + window.scrollY - offset; 

      window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
      });
  }
}