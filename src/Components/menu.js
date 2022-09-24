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
  itemTitle1.innerHTML = "Vanilla";
  item1.appendChild(itemTitle1);

  const itemImg1 = document.createElement("img");
  itemImg1.src = "";
  itemImg1.id = "item-img1";
  itemImg1.classList = "item-image";
  item1.appendChild(itemImg1);

  const itemDesc1 = document.createElement("div");
  itemDesc1.classList = "itemDesc";
  itemDesc1.innerHTML = "1";
  item1.appendChild(itemDesc1);

  const item2 = document.createElement("div");
  item2.id = "item2";
  item2.classList = "menu-item";
  homeCenter.appendChild(item2);

  const itemTitle2 = document.createElement("h4");
  itemTitle2.id = "item-title2";
  itemTitle2.innerHTML = "Chocolate";
  item2.appendChild(itemTitle2);

  const itemImg2 = document.createElement("img");
  itemImg2.src = "";
  itemImg2.id = "item-img2";
  itemImg2.classList = "item-image";
  item2.appendChild(itemImg2);

  const itemDesc2 = document.createElement("div");
  itemDesc2.classList = "itemDesc";
  itemDesc2.innerHTML = "1";
  item2.appendChild(itemDesc2);

  const item3 = document.createElement("div");
  item3.id = "item3";
  item3.classList = "menu-item";
  homeCenter.appendChild(item3);

  const itemTitle3 = document.createElement("h4");
  itemTitle3.id = "item-title3";
  itemTitle3.innerHTML = "Strawberry";
  item3.appendChild(itemTitle3);

  const itemImg3 = document.createElement("img");
  itemImg3.src = "";
  itemImg3.id = "item-img3";
  itemImg3.classList = "item-image";
  item3.appendChild(itemImg3);

  const itemDesc3 = document.createElement("div");
  itemDesc3.classList = "itemDesc";
  itemDesc3.innerHTML = "1";
  item3.appendChild(itemDesc3);

  const item4 = document.createElement("div");
  item4.id = "item4";
  item4.classList = "menu-item";
  homeCenter.appendChild(item4);

  const itemTitle4 = document.createElement("h4");
  itemTitle4.id = "item-title4";
  itemTitle4.innerHTML = "Napoleon";
  item4.appendChild(itemTitle4);

  const itemImg4 = document.createElement("img4");
  itemImg4.src = "";
  itemImg4.id = "item-img";
  itemImg4.classList = "item-image";
  item4.appendChild(itemImg4);

  const itemDesc4 = document.createElement("div");
  itemDesc4.classList = "itemDesc";
  itemDesc4.innerHTML = "1";
  item4.appendChild(itemDesc4);

  return wrapper;
};

export default Menu;
