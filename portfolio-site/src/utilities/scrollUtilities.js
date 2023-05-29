export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = window.innerHeight / 3.5;
    const sectionTop = section.offsetTop - offset;

    setTimeout(() => {
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }, 100); 
  }
};