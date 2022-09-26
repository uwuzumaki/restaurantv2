import Vanilla from "../assets/images/vanillaicecream.jpg";
import Chocolate from "../assets/images/chocolateicecream.jpg";
import Strawberry from "../assets/images/strawberryicecream.jpg";
import Neopolitan from "../assets/images/neopolitanicecream.jpg";

const Menu = () => {
  const wrapper = document.createElement("div");
  wrapper.classList = "wrapper";

  const homeCenter = document.createElement("div");
  homeCenter.classList = "home-center";
  wrapper.appendChild(homeCenter);

  const title = document.createElement("div");
  title.classList = "menu-title";
  title.innerHTML = "Menu";
  homeCenter.appendChild(title);

  const item1 = document.createElement("div");
  item1.id = "item1";
  item1.classList = "menu-item";
  homeCenter.appendChild(item1);

  const itemTitle1 = document.createElement("h4");
  itemTitle1.id = "item-title1";
  itemTitle1.classList = "item-title";
  itemTitle1.innerHTML = "Vanilla";
  item1.appendChild(itemTitle1);

  const itemImg1 = document.createElement("img");
  itemImg1.src = Vanilla;
  itemImg1.id = "item-img1";
  itemImg1.classList = "item-image";
  item1.appendChild(itemImg1);

  const itemDesc1 = document.createElement("div");
  itemDesc1.classList = "item-desc";
  itemDesc1.innerHTML =
    "When you dig into this pint, you'll find a rich, creamy Vanilla that's more vanilla-tasting than any Vanilla you've ever tasted. Creamy, dense, sweet, rich.  It's the essence of Vanilla.";
  item1.appendChild(itemDesc1);

  const item2 = document.createElement("div");
  item2.id = "item2";
  item2.classList = "menu-item";
  homeCenter.appendChild(item2);

  const itemTitle2 = document.createElement("h4");
  itemTitle2.id = "item-title2";
  itemTitle2.classList = "item-title";
  itemTitle2.innerHTML = "Chocolate";
  item2.appendChild(itemTitle2);

  const itemImg2 = document.createElement("img");
  itemImg2.src = Chocolate;
  itemImg2.id = "item-img2";
  itemImg2.classList = "item-image";
  item2.appendChild(itemImg2);

  const itemDesc2 = document.createElement("div");
  itemDesc2.classList = "item-desc";
  itemDesc2.innerHTML =
    "Dig into a mouth-watering scoop of Irene's Chocolate ice cream to find out why it's everybody's favorite. Rich, creamy ice cream with just the right amount of sweetness and real cocoa! Who can resist our chocolate ice cream?";
  item2.appendChild(itemDesc2);

  const item3 = document.createElement("div");
  item3.id = "item3";
  item3.classList = "menu-item";
  homeCenter.appendChild(item3);

  const itemTitle3 = document.createElement("h4");
  itemTitle3.id = "item-title3";
  itemTitle3.classList = "item-title";
  itemTitle3.innerHTML = "Strawberry";
  item3.appendChild(itemTitle3);

  const itemImg3 = document.createElement("img");
  itemImg3.src = Strawberry;
  itemImg3.id = "item-img3";
  itemImg3.classList = "item-image";
  item3.appendChild(itemImg3);

  const itemDesc3 = document.createElement("div");
  itemDesc3.classList = "item-desc";
  itemDesc3.innerHTML =
    "Irene's Natural Strawberry ice cream is packed with strawberries picked at the peak of happiness! Our Natural Strawberry is delicious all around. We start with ingredients like milk, fresh cream, sugar and strawberries to give you a delicious ice cream. ";
  item3.appendChild(itemDesc3);

  const item4 = document.createElement("div");
  item4.id = "item4";
  item4.classList = "menu-item";
  homeCenter.appendChild(item4);

  const itemTitle4 = document.createElement("h4");
  itemTitle4.id = "item-title4";
  itemTitle4.classList = "item-title";
  itemTitle4.innerHTML = "Napoleon";
  item4.appendChild(itemTitle4);

  const itemImg4 = document.createElement("img");
  itemImg4.src = Neopolitan;
  itemImg4.id = "item-img";
  itemImg4.classList = "item-image";
  item4.appendChild(itemImg4);

  const itemDesc4 = document.createElement("div");
  itemDesc4.classList = "item-desc";
  itemDesc4.innerHTML =
    "Can't decide between your traditional favourites? Neapolitan is just what you need. You can scoop vanilla, chocolate, or strawberry - or you can take a swipe at all three. Made from 100% Canadian Dairy this is three of our best.";
  item4.appendChild(itemDesc4);

  return wrapper;
};

export default Menu;
