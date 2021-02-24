function navClicked() {
    var navPressed = document.querySelector(".navTitleContainer");
    if (navPressed) {
        if (navPressed.style.display === "none") {
            navPressed.style.display = "flex";
        }
        else {
            navPressed.style.display = "none";
        }
    }
    /* if ((navPressed: HTMLElement) => {
      if (navPressed) {
        if (navPressed.style.display === "none") {
          navPressed.style.display = "flex";
        } else {
          navPressed.style.display = "none";
        }
      }
    }) */
}
function navExtendedSpacecrafts() {
    var spacecraftNav = document.querySelector(".spacecraftNav");
    var navBar = document.querySelector(".navTitle");
    if (spacecraftNav && navBar) {
        if (spacecraftNav.style.display === "flex") {
            spacecraftNav.style.display = "none";
            navBar.style.textDecoration === "underline #46B19C";
        }
        else {
            spacecraftNav.style.display = "flex";
            navBar.style.color = "#E36B37";
        }
    }
}
