
const scroll = document.querySelector(".scroll-down");
const reqBlock = document.querySelector("section.about");
  
scroll.addEventListener("click", e => {
    e.preventDefault();
  
    reqBlock.scrollIntoView({ behavior: "smooth" });
});

  


  
