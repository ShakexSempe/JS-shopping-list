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
    
    if (value && !editFlag) {
        const element = document.createElement('article');
        // add class to new item for display
        element.classList.add('grocery-item');
        // add id
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`
            //append child
            list.appendChild(element);
            //display alert 
            displayAlert('item added to list', 'success');
            //show container 
            container.classList.add('show-container');
        console.log(element);
        console.log('add item to the list')
    } else if (value !== '' && editFlag === true) {
        console.log('editing');
    } else {
        displayAlert('please enter value', 'danger');
    }
}
// end of add items()

// display alert() for whatever value is entered or left empty by user
displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}
//end of display alert


// submit form
    form.addEventListener('submit', addItem);
// end of submit form 

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

