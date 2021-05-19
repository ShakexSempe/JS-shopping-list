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

