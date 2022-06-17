function addItem() {
    //console.log('TODO:...');
    let newItem = document.getElementById('newItemText').value
    let newRow = document.createElement("li");

    newRow.appendChild(document.createTextNode(newItem))
    document.getElementById('items').appendChild(newRow)

    document.getElementById('newItemText').value = ''
}