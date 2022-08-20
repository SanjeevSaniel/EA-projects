// const message = () => {
//   let boxes = document.getElementById("boxes");
//   while (content == null) {
//       boxes.innerText = "No items in the todo list.";
//       boxes.style.color = "black";
//   }
// };

// message();

const createBox = () => {
  let container = document.getElementById("boxes");
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  container.appendChild(box);

  let span = document.createElement("span");
  span.setAttribute("class", "title");
  box.appendChild(span);

  // let anchor = document.createElement("a");
  // span.appendChild(anchor);
  span.innerHTML = document.getElementsByName("item").innerHTML;

  let hr = document.createElement("hr");
  hr.setAttribute("class", "box-hr");
  box.appendChild(hr);

  // Add Button ➕
  let addButton = document.createElement("div");
  addButton.setAttribute("class", "add-button");
  box.appendChild(addButton);
  let img1 = document.createElement("img");
  img1.src = "./images/icons8-plus-50.png";
  addButton.appendChild(img1);

  // Delete Button 🚮
  let deleteButton = document.createElement("div");
  deleteButton.setAttribute("class", "delete-button");
  box.appendChild(deleteButton);
  let img2 = document.createElement("img");
  img2.src = "./images/bin.svg";
  deleteButton.appendChild(img2);

  img2.addEventListener("click", function () {
    box.remove();
  });
};
