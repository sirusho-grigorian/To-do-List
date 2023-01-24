function addList() {
  const node = document.createElement("li");
  node.setAttribute("id", "list");
  const inputValue = document.getElementById("textInput").value;
  const textnode = document.createTextNode(inputValue);
  node.appendChild(textnode);

  if (inputValue === "") {
    alert("Say something!");
  } else {
    document.getElementById("lists").appendChild(node);
  }

  document.getElementById("textInput").value = "";

  let removeBtn = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  removeBtn.appendChild(txt);
  node.appendChild(removeBtn);

  let getAllSpans = document.getElementsByTagName("span");
  for (let i = 0; i < getAllSpans.length; i++) {
    getAllSpans[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    };
  }
}

document
  .getElementById("textInput")
  .addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      addList();
    }
  });

let getAllLists = document.getElementsByTagName("li");
for (let i = 0; i < getAllLists.length; i++) {
  let removeBtn = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  removeBtn.appendChild(txt);
  getAllLists[i].appendChild(removeBtn);
}

let getAllSpans = document.getElementsByTagName("span");
for (let i = 0; i < getAllSpans.length; i++) {
  getAllSpans[i].onclick = function () {
    var div = this.parentElement;
    div.remove();
  };
}

let getTheLists = document.querySelector("ul");
getTheLists.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);
