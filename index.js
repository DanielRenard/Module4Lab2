function addCard(
  title = "Untitled",
  text = "Missing text",
  url = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  template.querySelector(".card-img").src = url;
  document.querySelector("#card-list").appendChild(template);
}

function addArtistCard(name, portfolio) {
  portfolio.forEach((item) => {
       const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    template.querySelector(".card-title").innerText = name;
    template.querySelector(".card-text").innerText = item.title;
    template.querySelector(".card-img").src = item.url;
    document.querySelector("#card-list").appendChild(template);
  });
 
}

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
  { name: "tim", age: 56 },
];

const artists = [
  {
    name: "Vincent van Gogh",
    portfolio: [
      {
        title: "Portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
      },
    ],
  },

  {
    name: "Leonardo daVinci",
    portfolio: [
      {
        title: "Mona Lisa",
        url: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      },
      {
        title: "Vitruvian Man",
        url: "https://cdn.britannica.com/68/145968-050-01768DAD/Vitruvian-Man-Leonardo-da-Vinci-Gallerie-dellAccademia.jpg",
      },
    ],
  },
];

addCard();
addCard("First title", "cool beans");
addCard("Second title", "cooler beans");
addCard("Third title", "coolest beans");
addCard(data[0].name, data[0].age);
addCard(data[1].name, data[1].age);
addCard(data[2].name, data[2].age);
// addCard(artists.name, artists.portfolio[0].title, artists.portfolio[0].url);
// addCard(artists.name, artists.portfolio[1].title, artists.portfolio[1].url);
artists.forEach((item) => {
  addArtistCard(item.name, item.portfolio);
});
