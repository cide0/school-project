let navbar_toggle = function(){
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
}

window.onload = navbar_toggle;
