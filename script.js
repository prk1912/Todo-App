
let mainTodoElem = document.querySelector(".todo-list-elem")
let input = document.querySelector("#inputValue")
let form = document.querySelector("#form")
// let addBtn = document.querySelector(".btn")
let divElement;
let deleteBtn;

let temp = ""
let addTodoList = (evt)=>{
    evt.preventDefault()

    if(input.value.length>=1){

        divElement = document.createElement("div")
        divElement.classList.add('container')
        divElement.classList.add('flex')
    
        mainTodoElem.append(divElement)
        mainTodoElem.style.backgroundColor = "#fff" 
    
        let list = document.createElement("li")
        list.classList.add("list-item")
        list.innerText = input.value 
    
        let allLi = document.querySelectorAll("li")
        deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"
        deleteBtn.classList.add("delete")
        divElement.append(list)
        divElement.append(deleteBtn)

        let allDeleteBtn = document.querySelectorAll("button")

        allDeleteBtn.forEach((dlBtn)=>{
            dlBtn.addEventListener("click",()=>{
                if(dlBtn.classList.value === "delete"){
                    dlBtn.parentElement.remove()
                }
            })
        })
        for(let i = 0;i<allLi.length;i++){
            if(allLi[i].innerText === list.innerText){
                divElement.remove()
            }
        }
        input.value = ""

    }
}

document.querySelector(".btn").addEventListener("click",(e)=>{
        addTodoList(e)
})



