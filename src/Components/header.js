import Icon from "../assets/images/icecream.png";

const Header = () => {
  const content = document.querySelector(".content");

  const header = document.createElement("div");
  header.classList = "header";
  content.appendChild(header);

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
  title.innerHTML = "Irene's Ice Cream";
  logoArea.appendChild(title);

  const pages = document.createElement("pages");
  pages.classList = "pages";
  header.appendChild(pages);

  const home = document.createElement("div");
  home.classList = "home nav-btn";
  home.innerHTML = "Home";
  pages.appendChild(home);

  const menu = document.createElement("div");
  menu.classList = "menu nav-btn";
  menu.innerHTML = "Menu";
  pages.appendChild(menu);

  const contact = document.createElement("div");
  contact.classList = "contact nav-btn";
  contact.innerHTML = "Contact";
  pages.appendChild(contact);

  return header;
};

export default Header;
