 document.getElementById('btn-add-name').addEventListener('click' , function(){
    const nameField = document.getElementById('name-field')
     const nameValue = nameField.value 
     localStorage.setItem('name', nameValue) } ) 

document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-field')
    const ageValue = ageField.value 
    localStorage.setItem('age', ageValue)
})

document.getElementById('btn-remove').addEventListener('click', function(){
    localStorage.removeItem('age')
})
document.getElementById('btn-clear').addEventListener('click', function(){
    localStorage.clear('age')
})
// function setLocalStorage(key, value){
//     alert(localStorage.setItem(key, value))

// }
// function setLocalStorage(key){
//     alert(localStorage.getItem(key))

// }