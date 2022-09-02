let data = [];
let itemCount = 1;
const cards = document.getElementById("cards");
const cardDetail = document.getElementById("card-detail");
const cardDetailTitle = document.getElementById("card-modal-title");

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
  location.reload();
  resetValue(cardTitle);
};

const resetValue = (param) => {
  param.value = "";
};

let createCards = () => {
  data.map((x, y) => {
    return (cards.innerHTML += `<div id=${y} class="card">
        <span class="card__title" data-open="card-modal-list" onclick="viewCardDetail(this)">${x.name}</a></span>
          <hr class="card-hr" />
          <br />
          <ul id="items-list-${y}" class="items-list">
          </ul>
          <br /><br />
          <div id="add-btn-${y}" class="add-item-button" data-open="modal-list-2" onclick="getBtnID(event)">
            <img src="./images/icons8-plus-50.png" alt="" >
          </div>
          <div class="delete-button" onclick="deleteCard(this)">
            <img src="./images/bin.svg" alt="">
          </div>
      </div>`);
  });

  // Referenced for resolving functionalty error - https://stackoverflow.com/questions/70585031/cant-select-element-with-dom-after-creating-that-element-with-other-function

  modal();
};

let btnID = "";
function getBtnID(e) {
  btnID =
    e.target.parentElement.previousSibling.previousSibling.previousSibling
      .previousSibling.previousSibling.id;
}

const addItems = () => {
  let itemName = document.getElementById("list-item-title").value;
  let li = document.createElement("li");
  document.getElementById(btnID).appendChild(li);
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

const viewCardDetail = (e) => {
  cardDetailTitle.innerText = e.innerText;
  cardDetail.innerHTML = e.parentElement.innerHTML;
  let children = cardDetail.children;
  children[6].style.display = "none";
  // children[6].setAttribute("data-modal", "modal-list-3");
  // children[6].addEventListener("click", function () {
  //   document.getElementById("modal-list-3").style.visibility = "visible";
  //   document.getElementById("modal-list-3").style.opacity = 1;
  // });
  children[7].style.display = "none";
};

// Card View add item modal
const modalClose = () => {
  document.getElementById("modal-list-3").style.visibility = "hidden";
  document.getElementById("modal-list-3").style.opacity = 0;
};

modal();
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  if (data.length === 0) {
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("message").style.opacity = 1;
  }
  createCards();
})();
