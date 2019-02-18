
var primaryNav = document.getElementById('primary-nav'),
buttonNode,
toggleButton;

buttonNode = document.createElement('span');
buttonNode.textContent = 'Show menu';
buttonNode.classList.add('menu-toggle');

toggleButton = primaryNav.insertAdjacentElement('afterbegin', buttonNode);

toggleButton.addEventListener('click', function () {
    // Toggle the button text
    if (toggleButton.textContent === 'Show menu') {
    toggleButton.textContent = 'Hide menu'
    } else {
    toggleButton.textContent = 'Show menu'
    }
});

