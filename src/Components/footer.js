import Icon from "../assets/images/github-dark.png";

const Footer = () => {
  const content = document.querySelector(".content");

  const footer = document.createElement("div");
  footer.classList = "footer";
  content.appendChild(footer);

  const link = document.createElement("a");
  link.classList = "github-link";
  link.href = "https://github.com/uwuzumaki/restaurantv2";
  footer.appendChild(link);

  const logo = document.createElement("img");
  logo.classList = "github-img";
  logo.alt = "github logo";
  logo.src = Icon;
  link.appendChild(logo);

  const githubAccount = document.createElement("p");
  githubAccount.innerHTML = "uwuzumaki";
  link.appendChild(githubAccount);
};

export default Footer;
