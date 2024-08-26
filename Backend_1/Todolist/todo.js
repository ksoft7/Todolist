console.log("HI");
const input1 = document.querySelector("#input1");
const btnmain = document.querySelector("#btnmain");
const todocon = document.querySelector(".todocontents");

function toDo(e) {
  e.preventDefault();

  if (input1.value === "") return;

  const items = document.createElement("div");
  items.classList.add("style-value");

  const item = document.createElement("p");
  item.classList.add("text");
  item.innerHTML = input1.value;
  items.appendChild(item);

  const lineBtn = document.createElement("button");
  lineBtn.innerHTML = "-";
  lineBtn.classList.add("line-through");
  items.appendChild(lineBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = "🗑️";
  trashBtn.classList.add("trash");
  items.appendChild(trashBtn);

  todocon.appendChild(items);
  input1.value = "";
}

function lineandDelete(e) {
  const items = e.target;
  console.log(items.classList);
  if (items.classList[0] === "line-through") {
    const todolist = items.parentElement;
    todolist.classList.toggle("style-through");
  }

  if (items.classList[0] === "trash") {
    const todolist = items.parentElement;
    todolist.remove();
  }
}

btnmain.addEventListener("click", toDo);
todocon.addEventListener("click", lineandDelete);
