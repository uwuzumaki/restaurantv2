import Footer from "./footer";
import Header from "./header";
import Home from "./home";

const mainPage = () => {
  const container = document.body;
  const content = document.createElement("div");
  content.classList = "content";
  container.appendChild(content);

  Header();
  content.appendChild(Home());
  Footer();
};

export default mainPage;
