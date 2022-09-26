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

  const contact1 = document.createElement("div");
  contact1.classList = "contact";
  homeCenter.appendChild(contact1);

  const name = document.createElement("h5");
  name.innerHTML = "Irene";
  contact1.append(name);

  const number = document.createElement("p");
  number.innerHTML = "(905) 123 - 1234";
  contact1.appendChild(number);

  return wrapper;
};

export default Contact;
