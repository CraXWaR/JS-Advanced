function addItem() {
    //console.log('TODO:...');
    let newItemText = document.getElementById('newItemText')
    let newItemValue = document.getElementById('newItemValue')
    let selectMenu = document.getElementById('menu')

    let optionEl = document.createElement('option')
    optionEl.textContent = newItemText.value
    optionEl.value = newItemValue.value

    selectMenu.appendChild(optionEl)

    newItemText.value = ''
    newItemValue.value = ''
}