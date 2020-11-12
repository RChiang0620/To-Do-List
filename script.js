function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("input").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    if (newItem == "null") {
      alert('Please enter something before pressing the "+" button!')
    } 
  }

function removeItem() {
    document.getElementById("list").removeChild(this);
  }
