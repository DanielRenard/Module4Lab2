function addCard(title = "Untitled", text = "Missing text", url = "No Image") {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  template.querySelector(".card-img").src = url;
  document.querySelector("#card-list").appendChild(template);
}

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
  { name: "tim", age: 56 },
];

const artists = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

// addCard();
// addCard("First title", "cool beans");
// addCard("Second title", "cooler beans");
// addCard("Third title", "coolest beans");
// addCard(data[0].name, data[0].age);
// addCard(data[1].name, data[1].age);
// addCard(data[2].name, data[2].age);
addCard(artists.name, artists.portfolio[0].title, artists.portfolio[0].url);
addCard(artists.name, artists.portfolio[1].title, artists.portfolio[1].url);
