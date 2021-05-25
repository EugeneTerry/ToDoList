const anyThing = document.querySelector("#input")
const newArray = [];

anyThing.addEventListener("keyup", 
  (event) => {
    if (event.keyCode === 13) {
      newArray.push(event.target.value);
      anyThing.value = "";
      document.querySelector("#result").innerHTML = ""
      for(newItem of newArray) {
         document.querySelector("#result").innerHTML += `<li>${newItem}</li>`
      }
    }
  }
)
