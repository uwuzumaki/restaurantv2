import Contact from "../Components/contact";
import Home from "../Components/home";
import Menu from "../Components/menu";

const changeTo = () => {
  const navBtn = document.querySelectorAll(".nav-btn");

  navBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target.classList[0];
      const header = document.querySelector(".header");
      const footer = document.querySelector(".footer");
      if (target === "home") {
        const wrapper = document.querySelector(".wrapper");
        wrapper.parentNode.removeChild(wrapper);
        header.parentNode.insertBefore(Home(), footer);
      } else if (target === "menu") {
        const wrapper = document.querySelector(".wrapper");
        wrapper.parentNode.removeChild(wrapper);
        header.parentNode.insertBefore(Menu(), footer);
      } else if (target === "contact") {
        const wrapper = document.querySelector(".wrapper");
        wrapper.parentNode.removeChild(wrapper);
        header.parentNode.insertBefore(Contact(), footer);
      }
    });
  });

  const logo = document.querySelector(".logo-area");
  logo.addEventListener("click", () => {
    const header = document.querySelector(".header");
    const wrapper = document.querySelector(".wrapper");
    const footer = document.querySelector(".footer");
    wrapper.parentNode.removeChild(wrapper);
    header.parentNode.insertBefore(Home(), footer);
  });
};
export default changeTo;
