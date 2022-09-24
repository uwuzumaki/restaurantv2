const Contact = () => {
  const wrapper = document.createElement("div");
  wrapper.classList = "wrapper";

  const homeCenter = document.createElement("div");
  homeCenter.classList = "home-center";
  wrapper.appendChild(homeCenter);

  const title = document.createElement("div");
  title.classList = "contact-title";
  title.innerHTML = "Contact";
  homeCenter.appendChild(title);

  return wrapper;
};

export default Contact;
