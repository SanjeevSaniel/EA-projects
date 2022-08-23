// Script for Modal 🍱
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
// document.body.setAttribute("class","blur");

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Creation of Cards
const createCard = () => {
  let cards = document.getElementById("cards");
  let card = document.createElement("div");

  let cardTitle = document.getElementsByClassName("card__title").value;
  // let inputItem = document.getElementById("item").value;

  // let listItems = document.getElementsByClassName("list-items");
  // let li = document.createElement("li");

  card.setAttribute("class", "card");
  cards.appendChild(card);

  card.innerHTML = `<span class="card__title"><a href="./list-view.html" target="_self">${cardTitle.trim()}</a></span>
          <hr class="card-hr" />
          <ul class="list-items">
          </ul>
          <br /><br />
          `;

  // Add Button ➕
  let addButton = document.createElement("div");
  addButton.setAttribute("class", "add-item-button");
  card.appendChild(addButton);
  let img1 = document.createElement("img");
  img1.src = "./images/icons8-plus-50.png";
  addButton.appendChild(img1);
  addButton.addEventListener("click", function () {
    popup.style.display = "block";
  });

  // Delete Button 🚮
  let deleteButton = document.createElement("div");
  deleteButton.setAttribute("class", "delete-button");
  card.appendChild(deleteButton);
  let img2 = document.createElement("img");
  img2.src = "./images/bin.svg";
  deleteButton.appendChild(img2);

  img2.addEventListener("click", function () {
    card.remove();
  });

  // const newItem = () => {
  //   listItems.appendChild(li);
  //   li.innerHTML = `<li><span class="item">${inputItem.trim()}<button class="btn-done">done</button> </span></li>`;
  // };

  // let closePopup1 = document.getElementById("add-item");
  // closePopup1.addEventListener("click", function () {
  //   popup.style.display = "none";
  //   // newItem();
  // });

  // let closePopup2 = document.getElementById("close-popup");
  // closePopup2.addEventListener("click", function () {
  //   popup.style.display = "none";
  // });
};

// let addList = document.getElementById("add-list");
// addList.onclick = createBox;
