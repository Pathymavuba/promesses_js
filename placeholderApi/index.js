const inputSearch = document.querySelector('input')
const list = document.querySelector('ol')
let usersList = []
var researchValue = ""


window.onload = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then(users=>{
    users.forEach(element => {
        usersList.push(element)
    });

    
    for (let index = 0; index < usersList.length; index++) {
        var li = document.createElement('li')
        li.innerHTML = `${usersList[index].name}`
        li.setAttribute('class','list-item')
        list.appendChild(li)
        
    }
})
.catch((err)=>console.log(err))

}


inputSearch.addEventListener('input',function(e){
    e.preventDefault()
    researchValue = e.target.value
    let newList = document.querySelectorAll('.list-item')
    
    if (!e.target.value !== ""){
        for (let index = 0; index < newList.length; index++) {
            if (!newList[index].innerHTML.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                list.removeChild(newList[index])
            }
        }
    }

    else window.location.reload()
   


})

