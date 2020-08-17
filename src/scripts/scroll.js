
const scroll = document.querySelector(".scroll-down");
const reqBlock = document.querySelector("section.about");
  
scroll.addEventListener("click", e => {
    e.preventDefault();
  
    reqBlock.scrollIntoView({ behavior: "smooth" });
});

  

const navItems = document.querySelectorAll("[data-target]");
  
    function scrollIntoView(e) {
      e.preventDefault();
  
      const item = e.currentTarget;
      const target = item.getAttribute("data-target");
      const targetElem = document.querySelector(`.${target}`);
      const sidebar = document.querySelector(".sidebar");
  
      sidebar.classList.remove("active");
  
      targetElem.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  
    navItems.forEach(item => {
      item.addEventListener("click", scrollIntoView);
    });

  
