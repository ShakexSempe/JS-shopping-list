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

//end of varaibles
// ****** EVENT LISTENERS **********
// ****** FUNCTIONS **********
addItem = (e) => {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    console.log(id);
}

// submit form
    form.addEventListener('submit', addItem);
// end of submit form 

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

