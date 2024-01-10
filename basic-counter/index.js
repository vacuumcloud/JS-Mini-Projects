let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("entries")
let count = 0

function increment(){
    count++
    countEl.innerText = count
}

function save(){
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}
