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
            </div>`;
            // event listeners for buttons
            const deleteBtn = element.querySelector('.delete-btn');
            const editBtn = element.querySelector('.edit-btn');
            deleteBtn.addEventListener('click' , deleteItem);
            editBtn.addEventListener('click', editItem);
            // end of event listeners for buttons
            

        //append child
        list.appendChild(element);
        //display alert 
        displayAlert('item added to list', 'success');
        //show container 
        container.classList.add('show-container');

        //add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();
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
// end of display alert

// remove alert
setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
}, 1500);
}
// end of remove alert

// clear items
clearItems = () => {
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert("empty list", "danger");
    setBackToDefault();
    // localStorage.removeItem('list');
}
// end of clear items

// delete function
deleteItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove('.show-container');
    }
    displayAlert('item removed', "danger");
    setBackToDefault();
    //remove from local storage
    // removeFromLocalStorage(id);
}
// end of delete function
// edit function
editItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id; 
    submitBtn.textContent = '..edit';
}
// end of edit function

// set back to default
setBackToDefault = () => {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent= 'submit'
}
// end of set back to default



// ****** end of FUNCTIONS **********

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// end of submit form 
//clear items 
clearBtn.addEventListener('click', clearItems);


// ****** end of EVENT LISTENERS **********

// ****** LOCAL STORAGE **********
addToLocalStorage = (id, value) => {
    console.log('added to local storage');
}
removeFromLocalStorage = (id) => {
    
}
// ****** SETUP ITEMS **********

