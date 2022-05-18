let list = [];
const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = document.querySelector(".input").value;
//   createElement(value);
// });

const createElement = (value) => {
  //   const tickIcon = document.createElement("div");
  //   tickIcon.classList.add("icon", "tick");
  //   tickIcon.innerHTML = `<i class="fa fa-check"></i>`;

  //   const deleteIcon = document.createElement("div");
  //   deleteIcon.classList.add("icon", "cross");
  //   deleteIcon.innerHTML = `<i class="fa fa-multiply"></i>`;

  //   const iconsDiv = document.createElement("div");
  //   iconsDiv.className = "icons";
  //   iconsDiv.appendChild(tickIcon);
  //   iconsDiv.appendChild(deleteIcon);

  const text = document.createElement("span");
  text.className = "todo";
  text.textContent = value;

  const row = document.createElement("div");
  row.className = "row";
  row.appendChild(text);
  //   row.appendChild(iconsDiv);

  document.querySelector(".list").appendChild(row);
};

const rows = document.querySelectorAll(".row");
rows.forEach((el, i) => {
  el.querySelector(".tick").addEventListener("click", (e) => {});
  el.querySelector(".cross").addEventListener("click", (e) => {
    document.querySelector(".list").removeChild(el);
  });
});

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const todos = response;
    document.querySelector("#load").textContent = "";
    todos.forEach((todo, i) => {
      if (i <= 10) {
        createElement(todo.title);
      }
    });
  })
  .catch((err) => console.log(err));
