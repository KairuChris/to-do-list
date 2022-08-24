let removeTask = document.getElementsByClassName('remove-btn')
let addBtn = document.getElementById('add-btn')
let textFld = document.getElementById('txt-fld')
let savedTasks = []
let storage = JSON.parse(localStorage.getItem("Added-Tasks")) || []
let addedItem = document.getElementsByClassName('item')[0]




//event listener for the add button
addBtn.addEventListener('click', addClicked)

textFld.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        document.getElementById('add-btn').click()
    }
})

//loops through each remove button element and add a function call to it
for (let i = 0; i < removeTask.length; i++){
    let removeBtn = removeTask[i]
    removeBtn.addEventListener('click',removeTasks)
}

function removeTasks(event){
    let clicked = event.target
    clicked.parentElement.remove()
    
}

function addClicked(){
    if(textFld.value === ''){
        alert('Add a task')
    }else{
        addItem(textFld.value)
        textFld.value = ''
    }
}


function addItem(text){
    let itemRow = document.createElement('div')
    itemRow.classList.add('item-container')//adds a class in the element created in the itemRow variable
    let item = document.getElementsByClassName('item-list')[0]

    //checks for duplicates
    let isDuplicate = item.getElementsByClassName('task')
    for(let i = 0; i < isDuplicate.length; i++){
        if(isDuplicate[i].innerText === text){
            alert('Task already added')
            return
        }
    }

    itemRowContent = `
                    <div class="item">
                    <p class="task">${text}</p>
                    </div>
                    <button class="remove-btn">X</button>`
    

    itemRow.innerHTML = itemRowContent
    //adds the element stored in the itemRow variable
    item.append(itemRow)
    itemRow.getElementsByClassName('remove-btn')[0].addEventListener('click',removeTasks)
}