function toggle() {
    //console.log('TODO:...');
    let command = document.getElementsByClassName("button")[0]
    let text = document.getElementById('extra');

    if (command.textContent == 'More') {
        command.textContent = 'Less'
        text.style.display = 'block'
    } else {
        command.textContent = 'More'
        text.style.display = 'none'
    }
}