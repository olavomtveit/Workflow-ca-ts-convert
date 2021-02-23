function navClicked() {
  const navPressed = document.querySelector(
    ".navTitleContainer"
  ) as HTMLElement | null;

  if (navPressed) {
    if (navPressed.style.display === "none") {
      navPressed.style.display = "flex";
    } else {
      navPressed.style.display = "none";
    }
  }
}

function navExtendedSpacecrafts() {
  const spacecraftNav = document.querySelector(
    ".spacecraftNav"
  ) as HTMLElement | null;
  const navBar = document.querySelector(".navTitle") as HTMLElement | null;

  if (spacecraftNav && navBar) {
    if (spacecraftNav.style.display === "flex") {
      spacecraftNav.style.display = "none";
      navBar.style.textDecoration === "underline #46B19C";
    } else {
      spacecraftNav.style.display = "flex";
      navBar.style.color = "#E36B37";
    }
  }
}
