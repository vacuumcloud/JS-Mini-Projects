const inputBtn = document.querySelector("#input-btn")

let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputPara = document.querySelector(".leads-p")

localStorage.clear()

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i< myLeads.length; i++)
    {
        listItems += `
        <li>
            <a target= '_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>`
    }
    inputPara.innerHTML = listItems
}







