let navbar_toggle = function() {
  let navbarItemHeaders = document.getElementsByClassName("navbar-item-header");
  for (let i = 0; i < navbarItemHeaders.length; i++) {
    navbarItemHeaders[i].addEventListener('click', function () {
      let navbarIcon = navbarItemHeaders[i].lastChild;
      let navbarItemLinks = navbarItemHeaders[i].parentNode.lastChild;

      if (navbarIcon.classList.contains("bx-chevron-up")) {
        navbarIcon.classList.remove("bx-chevron-up");
        navbarIcon.classList.add("bx-chevron-down");
      } else {
        navbarIcon.classList.add("bx-chevron-up");
        navbarIcon.classList.remove("bx-chevron-down");
      }
      navbarItemLinks.classList.toggle("hidden");
    });
  }

  let navbarLinks = document.getElementsByClassName("navbar-link");
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', function (event) {
      for (let j = 0; j < navbarLinks.length; j++) {
        navbarLinks[j].classList.remove("current-page");
      }
      event.target.classList.add("current-page")
    });
  }

  let navbar_header = document.getElementById('navbar-header');
  navbar_header.addEventListener('click', () => {
    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].classList.remove("current-page");
    }
  });

}
window.onload = navbar_toggle;
