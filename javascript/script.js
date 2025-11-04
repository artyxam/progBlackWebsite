const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

/* toggle menu open and closed */
function toggleMenu() {
  const open = navLinks.classList.toggle('show');
  navLinks.setAttribute('aria-hidden', open ? 'false' : 'true');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');

  if (open) {
    const first = navLinks.querySelector('a');
    if (first) first.focus();
  }
}

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

/* close on link click and focus returns to button */
document.querySelectorAll('#navLinks a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('show');
    navLinks.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  });
});

/* close when clicking outside */
document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      navLinks.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});

/* close with Escape key */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    navLinks.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
});
