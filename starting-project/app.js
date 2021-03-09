const buttonEl = document.querySelector("button")
const inputEl = document.querySelector("input")
const listEl = document.querySelector("ul")

buttonEl.addEventListener("click", () => {
  const enteredValue = inputEl.value
  console.log("enteredValue", enteredValue)
  const listItemEl = document.createElement("li")
  listItemEl.textContent = enteredValue
  listEl.appendChild(listItemEl)
  inputEl.value = ""
})
