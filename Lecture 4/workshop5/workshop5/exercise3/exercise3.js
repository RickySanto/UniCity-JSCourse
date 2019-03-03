// Variables used by script.
// We need references to the textarea, the button and the div to place the results in
var userInput = document.getElementById('user-input'),
    saveButton = document.getElementById('btn'),
    resultEl = document.getElementById('saved-text');

// Helper function to help keep code clean...
// All it does is make a button element, which we then add to each of the p 
// elements we add to the page
function makeMasterDeleteButton() {
    var btn = document.createElement('a');
    btn.textContent = 'X';
    btn.classList.add('item-delete'); // give button the class "item-delete"
    btn.setAttribute('href', '#');
    return btn;
};

function makeMasterModifyButton() {
    var editBtn = document.createElement('a');
    editBtn.setAttribute('href', '#');
    editBtn.innerHTML = '<i class="material-icons item-modify" style="font-size:14px">border_color</i>';
    editBtn.classList.add('item-modify');  // give button the class "item-modify"
    return editBtn;
};

//Function that generate the form to update the text field of elements

function generateModifyForm(target) {
    var form = document.createElement("form");
    var input = document.createElement("input");
    var button = document.createElement("button");
    input.type = "text";
    button.textContent = "Change";
    form.appendChild(input);
    form.appendChild(button);
    form.action = "#";  
    button.addEventListener('click', function(){
        target.textContent = input.value;
        itemDeleteButton = makeMasterDeleteButton();
        itemModifyButton = makeMasterModifyButton();       
        target.insertAdjacentElement('beforeend', itemDeleteButton);
        target.insertAdjacentElement('beforeend', itemModifyButton);
        this.parentElement.remove();
    });
    return form;
}


// Make sure we have valid elements to work with
if (userInput !== null && saveButton !== null && resultEl !== null) {

    // Listen for clicks on form button
    saveButton.addEventListener('click', function (event) {

        var newNode, // Element we will create
            itemDeleteButton, // Delete button for element
            itemModifyButton, // Modify button for element
            submitted = userInput.value // Text from form field

        // Check if user entered something
        if (submitted !== '') {

            // Make a p element and add the submitted text to it
            newNode = document.createElement('p');
            newNode.textContent = submitted;

            // Make a delete button element and append it to p element
            itemDeleteButton = makeMasterDeleteButton();
            itemModifyButton = makeMasterModifyButton();
            
            newNode.insertAdjacentElement('beforeend', itemDeleteButton);
            newNode.insertAdjacentElement('beforeend', itemModifyButton);

            // add the p element to the page
            resultEl.appendChild(newNode);
                console.log(submitted);
            var addEvent = new Event ('Added',  {
                detail: {
                    "message": "value",
                    "value": submitted
                }           
            });

            document.dispatchEvent(addEvent);

            // Erase user's text from the textarea
            userInput.value = '';
        }

        //add event handler


        // Stop the browser's default behaviour. By default, when a "button" within a "form"
        // element is clicked, the form gets submitted, resulting in a page reload (which we don't want)
        event.preventDefault();
    });

    // Add event listener for item deletions here...
    resultEl.addEventListener('click', function (event){
        var modifyForm;
        if (event.target.classList.contains('item-delete')){
            event.preventDefault();
            resultEl.removeChild(event.target.parentNode);
            //create custom event                
            var removeEvent = new Event ('Deleted');
            document.dispatchEvent(removeEvent);

        };
        
        if (event.target.classList.contains('item-modify')){           
            event.preventDefault();
            if (event.target.parentElement.parentElement.children.length == 2){
                modifyForm = new generateModifyForm(event.target.parentNode.parentNode);
                event.target.parentElement.parentElement.appendChild(modifyForm);
            }

        };
    });

    document.addEventListener(
        'Added',
        function (event) {
            event.preventDefault();
            console.log(event.detail);
        }
    );
    
    document.addEventListener(
        'Deleted',
        function (event) {
            event.preventDefault();
            console.log("Element Removed");
        }
    );

};

