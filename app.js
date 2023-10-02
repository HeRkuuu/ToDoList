document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const result = document.querySelector(".result");

  savedTasks.forEach((task) => {
    const listItem = createTaskElement(task);
    result.appendChild(listItem);
  });
});

function createTaskElement(task) {
  let listItem = document.createElement("li");
  let dlt = document.createElement("button");
  let checkbox = document.createElement("input");
  let taskText = document.createElement("span");

  listItem.classList.add("target");

  checkbox.type = "checkbox";
  checkbox.classList = "check";
  dlt.classList = "delete";

  taskText.textContent = task;

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(dlt);

  return listItem;
}

const btn = document.querySelector("#btn").addEventListener("click", () => {
  const task = document.querySelector("#task").value;
  const result = document.querySelector(".result");
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (task.trim() === "") return;

  savedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));

  const listItem = createTaskElement(task);
  result.appendChild(listItem);

  document.querySelector("#task").value = "";
});

const result = document.querySelector(".result");

result.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const listItem = event.target.closest(".target");
    const taskText = listItem.querySelector("span").textContent;
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = savedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    listItem.remove();
  }
});
