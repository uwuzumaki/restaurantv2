const Home = () => {
  const content = document.querySelector(".content");

  const wrapper = document.createElement("div");
  wrapper.classList = "wrapper";
  content.appendChild(wrapper);

  const homeCenter = document.createElement("div");
  homeCenter.classList = "home-center";
  wrapper.appendChild(homeCenter);

  const bigLogo = document.createElement("div");
  bigLogo.classList = "big-logo home-div";
  bigLogo.innerHTML = "Irene's Ice Cream";
  homeCenter.appendChild(bigLogo);

  const intro = document.createElement("div");
  intro.classList = "intro home-div";
  intro.innerHTML =
    "Irene's Ice Cream takes pride in serving the best soft-serve ice cream around. With fresh ingredients, technique passed on from ages past, and a variety of flavours, we guarantee a you'll find a flavour that suits your taste.";
  homeCenter.appendChild(intro);

  const location = document.createElement("div");
  location.classList = "location home-div";
  location.innerHTML = "123 Red Velvet Avenue, Silvermoon City, Eversong Woods";
  homeCenter.appendChild(location);

  const hours = document.createElement("div");
  hours.classList = "hours home-div";
  homeCenter.appendChild(hours);

  const sunday = document.createElement("p");
  sunday.classList = "sunday days";
  sunday.innerHTML = "Sunday: 2pm - 10pm";
  hours.appendChild(sunday);

  const monday = document.createElement("p");
  monday.classList = "monday days";
  monday.innerHTML = "Monday: 12pm - 11pm";
  hours.appendChild(monday);

  const tuesday = document.createElement("p");
  tuesday.classList = "tuesday days";
  tuesday.innerHTML = "Tuesday: 12pm - 11pm";
  hours.appendChild(tuesday);

  const wednesday = document.createElement("p");
  wednesday.classList = "wednesday days";
  wednesday.innerHTML = "Wednesday: 12pm - 11pm";
  hours.appendChild(wednesday);

  const thursday = document.createElement("p");
  thursday.classList = "thursday days";
  thursday.innerHTML = "Thursday: 12pm - 11pm";
  hours.appendChild(thursday);

  const friday = document.createElement("p");
  friday.classList = "friday days";
  friday.innerHTML = "Friday: 11am - 11pm";
  hours.appendChild(friday);

  const saturday = document.createElement("p");
  saturday.classList = "saturday days";
  saturday.innerHTML = "Saturday: 11am - 11pm";
  hours.appendChild(saturday);
};

export default Home;
