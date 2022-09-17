import "./styles.css";
import Icon from "./assets/images/cake.svg";

const container = document.getElementById("container");

const mainPage = () => {
  const headerWrapper = document.createElement("div");
  headerWrapper.classList = "content";

  const header = document.createElement("div");
  header.classList = "header";
  headerWrapper.appendChild(header);

  const logoArea = document.createElement("div");
  logoArea.classList = "logo-area";
  header.appendChild(logoArea);

  const logo = document.createElement("div");
  logo.classList = "logo";
  logoArea.appendChild(logo);

  const logoIcon = document.createElement("img");
  logoIcon.classList = "logo-icon";
  logoIcon.src = Icon;
  logo.appendChild(logoIcon);

  const title = document.createElement("div");
  title.classList = "title";
  title.innerHTML = "Irene's Ice Cream Shop";
  logoArea.appendChild(title);

  const pages = document.createElement("pages");
  pages.classList = "pages";
  header.appendChild(pages);

  const home = document.createElement("div");
  home.classList = "home";
  home.innerHTML = "Home";
  pages.appendChild(home);

  const menu = document.createElement("div");
  menu.classList = "menu";
  menu.innerHTML = "menu";
  pages.appendChild(menu);

  const contact = document.createElement("div");
  contact.classList = "contact";
  contact.innerHTML = "contact";
  pages.appendChild(contact);

  const wrapper = document.createElement("div");
  wrapper.classList = "wrapper";
  headerWrapper.appendChild(wrapper);

  const homeCenter = document.createElement("div");
  homeCenter.classList = "home-center";
  wrapper.appendChild(homeCenter);

  const bigLogo = document.createElement("div");
  bigLogo.classList = "big-logo home-div";
  bigLogo.innerHTML = "logo";
  homeCenter.appendChild(bigLogo);

  const intro = document.createElement("div");
  intro.classList = "intro home-div";
  intro.innerHTML = "intro";
  homeCenter.appendChild(intro);

  const location = document.createElement("div");
  location.classList = "location home-div";
  location.innerHTML = "location";
  homeCenter.appendChild(location);

  const hours = document.createElement("div");
  hours.classList = "hours home-div";
  hours.innerHTML = "hours";
  homeCenter.appendChild(hours);

  const footer = document.createElement("div");
  footer.classList = "footer";
  headerWrapper.appendChild(footer);

  return headerWrapper;
};

container.appendChild(mainPage());
