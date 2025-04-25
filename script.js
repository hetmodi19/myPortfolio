document.addEventListener("DOMContentLoaded", () => {
    const roles = ['Web Developer', 'UI/UX Designer', 'Software Developer', 'Tech Enthusiast'];
    let i = 0;
    let j = 0;
    let currentRole = '';
    let isDeleting = false;
  
    const typingElement = document.getElementById('typing');
  
    function type() {
      currentRole = roles[i];
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, j--);
        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % roles.length;
        }
      } else {
        typingElement.textContent = currentRole.substring(0, j++);
        if (j > currentRole.length) {
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100);
    }
  
    type();
  });
  