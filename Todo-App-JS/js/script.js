let data = [];
let itemCount = 1;
const cards = document.getElementById("cards");

// Script for Modal 🍱
const modal = () => {
  const openEls = document.querySelectorAll("[data-open]");
  const closeEls = document.querySelectorAll("[data-close]");
  const isVisible = "is-visible";

  for (const el of openEls) {
    el.addEventListener("click", function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  for (const el of closeEls) {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
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
};

// Creation of Cards
let acceptData = () => {
  let cardTitle = document.getElementById("list-title").value;
  cardTitle = (cardTitle[0].toUpperCase() + cardTitle.substring(1)).trim();
  data.push({
    id: Date.now(),
    name: cardTitle,
  });

  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  // createCards();
  location.reload();
  resetValue(cardTitle);
};

const resetValue = (param) => {
  param.value = "";
};

let createCards = () => {
  data.map((x, y) => {
    return (cards.innerHTML += `<div id=${y} class="card">
        <span class="card__title" data-open="card-modal-list">${x.name}</a></span>
          <hr class="card-hr" />
          <br />
          <ul class="items-list">
          </ul>
          <br /><br />
          <div class="add-item-button" data-open="modal-list-2">
            <img src="./images/icons8-plus-50.png" alt="">
          </div>
          <div class="delete-button" onclick="deleteCard(this)">
            <img src="./images/bin.svg" alt="">
          </div>
      </div>`);
    // return cards.appendChild(card);
  });

  // Referenced for resolving functionalty error - https://stackoverflow.com/questions/70585031/cant-select-element-with-dom-after-creating-that-element-with-other-function

  modal();
};

const addItems = () => {
  let itemName = document.getElementById("list-item-title").value;
  let li = document.createElement("li");
  let ul = document.querySelector(".items-list");
  ul.appendChild(li);
  li.id = `item-${itemCount++}`;
  li.innerHTML = `${itemName}<button class="btn-done" onclick="itemChecked(this)">done</button>`;
};

let itemChecked = (e) => {
  e.parentElement.classList.add("checked");
  e.classList.add("hide");
};

let deleteCard = (e) => {
  e.parentElement.remove();

  data.splice(e.parentElement.id, 1);

  localStorage.setItem("data", JSON.stringify(data));

  location.reload();
  console.log(data);
};

modal();
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createCards();
})();
