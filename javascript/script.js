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

document.querySelectorAll('#navLinks a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('show');
    navLinks.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  });
});

document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      navLinks.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    navLinks.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
});



var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}