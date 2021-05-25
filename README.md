# JS-shopping-list
Vanilla Javascript tutorial project #12 presented by John Smilga


### function
- displayAlert() set up alert messages for items
- Takes 2 arguements: 1) Text = the display message and 2) action = color(danger or success)
- Text placed as the alert variables TextContent property's value.
- Action added via template string '`alert-${action(ie. arguement)}` and added to alert's  class list.

- setTimeout() to remove the alert-action from alert class list after set interval.

- if(value(is true) && editFlad === false) = add the item to the list 
- Create the element {document.createElement('article');} = the article element in the html.
- Add the class of grocery-item { classList.add('grocery-item');}
- Dynamicaly add data-set property ('data-id) and set the value to the id variable (attr.value = id). 
- Add attribute to the element via setAttributeNode();
- Template string used to add this created element to the html via innerHTML.
- Article has already being set so only the contents WiTHIN thr article and not the article itself needs to be added via template string.
- Add element to the list variable via list.appendChild();
- displayAlert() text = item added, action = success.
- show container clas added to the method to add a visibile property to the list which by default is set to visibility:hidden in the css.

## functions 
### setBackToDefault 
- called multiple times to set back to the initial setup including after each item is added (empty submit area for user text input)
- clear out value = empty string (added item value removed before user can input new value(item));
- edit flag set to false, editID = '', submitBtn.textContent= 'submit' ; {ie. initial values}

### clearItems
- called to clear all grocery items
- items variable selects all the items with class name grocery-items. 
- if(theres more than 0 items in the list) {iterate over those items with a forEach(item){remove child (ie remove Element variable which was dynamicaly created in addItem())}}
- after if() we hide container by removing .show-container class from container variable classlist.
- set up alert message that we cleared the list: displayAlert(empty list)
- setBackToDefault();

## delete and edit buttons 
- we only have access to the delete and edit button in the addItems() if statement where they are created dynamically. Therefore event listeners must be placed within the addItems(). 
- attempts to target edit and delete buttons outside the addItems() will fail as the buttons = null outide the function when the app.js initially loads.
- buttons are targeted using the elements (not document) via element.querySelector();
- deleteItem and editItem global functions are called in the buttons event listeners (btn.addeventlistener(click, (){}));


### deleteItem()
- event object passed as parameter in order to access the parent container (.grocery-item) through which we can remove a specific item via removeChild() from the already accessible grocery-list element;
variable element = tagert current event object (the button) -> then the buttons parent element (btn container) -> then the groecery item which is two levels up from current target.
- remove element varaible from list (list.removeChild());
- if the items in the list = 0 then we remove the .show-container from container as there are no elements to display. 
- displayAlert(alert message to show item has been removed);
- setBackToDefault();

### editItem()
- access grocery item same way as deleteItem(): 
    with 'element' variable.
- apply edit option values to items ( ie. editElement, editID, editID)
- 1: editElement = button being clicked on, then the parent element of that button(= .btn-container), then the sibling of the btn-container which is the p.title"item". P = the value we want to access. (editElement is the name of the item entered by user)
-grocery value = the editElement inner html (ie. name of the item);
- editFlag set to true as we are editing;
- editID = the elements unique value which is the dataset attribute
- change the value in the submit button to 'edit';

- handle editItem() when submitting form:
    2nd condition of addItem if stament = if value is true and edit flag is false. therefore: 
    -editElement(e.currentTarget... ).innerHTML = value(grocery.value)
    -displayAlert();
    -editLocalStorage = editID and the value ;
    -setBackToDefault();

### removeFromLocalStorage
- 