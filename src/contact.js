window.addEventListener("load", function () {

  // 非home的頁面、滑動以隱藏 logo
  // === mobile pages scroll to hide logo ===
  let showBrand = true;
  if (!document.body.classList.contains('pages-home')) {
    const brand = document.getElementById('brand');
    document.addEventListener('scroll', e => {
      if (document.documentElement.scrollTop > 60 || document.body.scrollTop > 60) { // document.body.scrollTop for Safari mobile
        brand.style.opacity = 0;
        showBrand = false;
      } else {
        brand.style.opacity = 1;
        showBrand = true;
      }
    });
  }
  // === mobile pages scroll to hide logo ===

  // 每個頁面都會放 navbar toggle 功能，否則無法開啟 menu
  // === NavBar toggle to collapse control
  let showNav = false;
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navToCollapse = document.getElementById('navToCollapse');
  navToggleBtn.addEventListener('click', function () {
    if (showNav) {
      if (!showBrand) document.getElementById('brand').style.opacity = 0;
      navToCollapse.classList.remove('p-nav__links--show');
      navToggleBtn.classList.add('p-collapsed');
      showNav = !showNav;
    } else {
      if (!showBrand) document.getElementById('brand').style.opacity = 1;
      navToCollapse.classList.add('p-nav__links--show');
      navToggleBtn.classList.remove('p-collapsed');
      showNav = !showNav;
    }
  });
  // === End of navBar toggle to collapse control

  // contact page 動態
  if (document.body.classList.contains('pages-contact')) {

    const person = document.querySelector('.pages-contact__person');
    const contents = document.querySelectorAll('.info__content');
    const domains = document.querySelectorAll('.info__domain');

    const contactMotion = {
      info: 'fadeIn',
      person: 'fadeInUp',
      contents: 'p-fadeInUp',
      domains: 'p-fadeInUp'
    }

    animateCSS(person, contactMotion.person);
    console.log(contents);
    contents[0].style.animationDelay = '.4s';
    contents[1].style.animationDelay = '.7s';
    contents[3].style.animationDelay = '1s';
    contents.forEach(element => {
      element.style.animationDuration = '2s';
      animateCSS(element, contactMotion.contents);
    });
    domains.forEach(element => {
      element.style.animationDuration = '2s';
      element.style.animationDelay = '.7s';
      animateCSS(element, contactMotion.domains);
    });

    document.querySelector('.js-layer').style.transform = 'translateX(100%) skewX(0deg)';
  }

  function animateCSS(node, animationName, callback) {
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }

});