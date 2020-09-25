const form = document.querySelector('#form')
const itemList = document.querySelector('.list-group')
const addButton = document.querySelector('.add-btn')
const filter = document.querySelector('#search')

//Form Submit & add Event
form.addEventListener('submit', addItem)
function addItem(event){
    event.preventDefault()

    //Get input value
    const newInput =  document.querySelector('#add-new-item')

    //Create New li Element
    const li = document.createElement('li')
    //Add Class
    li.className = 'list-item'
    //Add textNode from Input Value
    li.appendChild(document.createTextNode(newInput.value))
    //Add Createrd New Item
    itemList.appendChild(li)
    

    const btn = document.createElement('button')
    btn.className = 'delete-btn'
    btn.appendChild(document.createTextNode('delete'))
    li.appendChild(btn)

    //Revome previous input value after add items
    newInput.value = ''
}

//Delete Event
itemList.addEventListener('click', deleteItem)

function deleteItem(e){
    if(e.target.classList.contains('delete-btn')){
        if(confirm('Are You Sure??')){
            const li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

//Search Item on the list
filter.addEventListener('keyup', filterItem)

function filterItem(e){
    //Convert to LowerCase
    const text = e.target.value.toLowerCase()
    //Seach li item
    const items = document.querySelectorAll('li')
    //Convet to an Array
    Array.from(items).forEach(item => {
        const itemName = item.firstChild.textContent
        if(itemName.toLocaleLowerCase().indexOf(text)  !=  -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}
