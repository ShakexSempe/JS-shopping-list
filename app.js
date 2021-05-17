// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');

const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');

const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');


// edit option
//varaibles
let editElement;
let editFlag = false;
let editID = '';
// end of varaibles

// ****** EVENT LISTENERS **********
// ****** FUNCTIONS **********
// add items()
addItem = (e) => {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    if(value && !editFlag){
        console.log('add item to the list')
    }
    else if(value !=='' && editFlag === true) {
        console.log('editing');
    }
    else{
        displayAlert('please enter value', 'danger');
    }
}
// end of add items()

// display alert() when empty string is entered by user
displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(()=>{
        alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
    }, 1500);
}
//end of display alert


// submit form
    form.addEventListener('submit', addItem);
// end of submit form 

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

