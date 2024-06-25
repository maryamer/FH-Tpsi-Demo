const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  console.log("clicked");
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );
    // REMOVE PREV ACTIVE CLASS
    tabs.forEach((item) => item.classList.remove("active"));
    tabContents.forEach((item) => item.classList.remove("active"));
    // ADD NEW ACTIVE CLASS
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});
