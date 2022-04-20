export const openNavMenu = () => {
  const openNavMenu = document.querySelector(".open-nav-menu");
  const navMenuLeft = document.querySelector(".nav-menu-left");
  const navMenuRight = document.querySelector(".nav-menu-right");
  // const menuOverLay = document.querySelector(".menu-overlay");
  const mediaSize = 937;
  // console.log(mediaSize);

  openNavMenu.addEventListener("click", displayNav);

  function displayNav() {
    navMenuLeft.classList.add("open");
    navMenuRight.classList.add("open");
    // menuOverLay.classList.add("active");
    document.body.classList.add("hidden-scrolling");
  }

  navMenuLeft.addEventListener("click", (event) => {
    //console.log(event.target);

    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      //console.log(menuItemHasChildren);
      //if menuItemhasChildren is already expanded, collapse it
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenuLeft();
      } else {
        //colapse existing expanded menuItemHasChildren
        if (navMenuLeft.querySelector(".menu-item-has-children.active")) {
          collapseSubMenuLeft();
        }
        //expand new menuItemHasChildren
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });

  function resizeFix() {
    //if navmenuLeft is open close it
    if (
      navMenuLeft.classList.contains("open") ||
      navMenuRight.classList.contains("open")
    ) {
      displayNav();
    }
    //if menuItemHasChildren is enpanded, collaspe it
    if (
      navMenuLeft.querySelector(".menu-item-has-children.active") ||
      navMenuRight.querySelector(".menu-item-has-children.active")
    ) {
      collapseSubMenuLeft();
      collapseSubMenuRight();
    }
  }

  window.addEventListener("resize", function () {
    let mediaSize = 937;
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  function collapseSubMenuLeft() {
    const removeAttributeStyleNavMenuLeft = navMenuLeft.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    removeAttributeStyleNavMenuLeft.removeAttribute("style");
    navMenuLeft
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }

  navMenuRight.addEventListener("click", (event) => {
    //console.log(event.target);
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      //console.log("true");
      const menuItemHasChildren = event.target.parentElement;
      //console.log(menuItemHasChildren);
      //if menuItemhasChildren is already expanded, collapse it
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenuRight();
      } else {
        if (navMenuRight.querySelector(".menu-item-has-children.active")) {
          collapseSubMenuRight();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });

  function collapseSubMenuRight() {
    const removeAttributeStyleNavMenuRight = navMenuRight.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    removeAttributeStyleNavMenuRight.removeAttribute("style");
    navMenuRight
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }
};

export const closeNavMenu = () => {
  const closeNavMenu = document.querySelector(".close-nav-menu");
  const navMenuLeft = document.querySelector(".nav-menu-left");
  const navMenuRight = document.querySelector(".nav-menu-right");
  // const menuOverLay = document.querySelector(".menu-overlay");

  closeNavMenu.addEventListener("click", removeNav);
  //close the navMenu by clicking outside
  // menuOverLay.addEventListener("click", removeNav);

  function removeNav() {
    navMenuLeft.classList.remove("open");
    navMenuRight.classList.remove("open");
    document.body.classList.remove("hidden-scrolling");
    // menuOverLay.classList.remove("active");
  }
};
