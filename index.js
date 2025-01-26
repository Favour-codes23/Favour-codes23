// document.getElementById("count-el").innerText=5

let countEl = document.getElementById("count-el")



function save() {
    console.log('Saving...');
    // Your save logic
}

let saveEl = document.getElementById("save-el")


console.log(countEl)

let count = 0

function increment() {
   count += 1
   countEl.innerText = count
   console.log("count")
}

function save() {
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0
   console.log(count)
}