function addCard(title, text) {
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  document.querySelector("#card-list").appendChild(template);
}
addCard();
addCard();

// addCard("First title", "cool beans");
// addCard("Second title", "cooler beans");
// addCard("Third title", "coolest beans");

// const data = [
//   { name: "bob", age: 23 },
//   { name: "alice", age: 39 },
// ];

// const artist = {
//   name: "Van Gogh",
//   portfolio: [
//     {
//       title: "portrait",
//       url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
//     },
//     {
//       title: "sky",
//       url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
//     },
//   ],
// };
