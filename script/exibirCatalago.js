const abaCatalago = document.querySelector("#catalago-cards");

const listCatalago = [{
    image: "../src/image/catalago/ceramica.jpg",
    name: "Ceramicas",
    descrição: "descrição",
    price: 5.0
}, {
    image: "../src/image/catalago/mato.jpg",
    name: "Erva moloque seco",
    descrição: "descrição",
    price: 5.0
}, {
    image: "../src/image/catalago/mato2.jpg",
    name: "Erva pau tenente",
    descrição: "descrição",
    price: 5.0
}, {
    image: "../src/image/catalago/mato3.jpg",
    name: "Erva recaconha",
    descrição: "descrição",
    price: 5.0
}, {
    image: "../src/image/catalago/mato4.jpg",
    name: "Erva folha de louro",
    descrição: "descrição",
    price: 5.0
}, {
    image: "../src/image/catalago/mato5.jpg",
    name: "Banhos de cheiro",
    descrição: "descrição",
    price: 5.0
}, {
    image: "../src/image/catalago/remedioNatural.jpg",
    name: "Remedios caseiros",
    descrição: "descrição",
    price: 5.0
}];

let cardsHTML = "";

listCatalago.forEach((catalago) => {
    const cardHTML = `
    <div class="card">
      <img src="${catalago.image}" alt="chama trabalho">
      <h2>${catalago.name} <span>R$${catalago.price}</span> </h2>
    </div>
  `;

    cardsHTML += cardHTML;
});
abaCatalago.innerHTML = cardsHTML;

// separação 
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    abaCatalago.innerHTML = cardsHTML;

    const comentario = `
      <div class="info-comentary">
        <img src="./src/icons/menuX.svg" alt="">
        <div class="comentary">
          <h2>Nome do produto</h2>
          <p>O Produto é muito bom asmei</p>
        </div>
        <div class="write-comentary">
          <input type="text">
          <button>Enviar</button>
        </div>
      </div>
    `;

    abaCatalago.innerHTML = comentario; // Clear previous content
    const commentSection = document.querySelector(".info-comentary");
    commentSection.style.display = "flex"; // Show the comment section

  });
});