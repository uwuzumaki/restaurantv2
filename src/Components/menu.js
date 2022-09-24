const Menu = () => {
  const wrapper = document.createElement("div");
  wrapper.classList = "wrapper";

  const homeCenter = document.createElement("div");
  homeCenter.classList = "home-center";
  wrapper.appendChild(homeCenter);

  return wrapper;
};

export default Menu;
