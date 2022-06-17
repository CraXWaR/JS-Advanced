function focused() {
    //console.log('TODO:...');
    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFocus)
            i.addEventListener('blur', onBlurred)
        })
    
    function onFocus(ev) {
        ev.target.parentElement.className = 'focused'
    }
    function onBlurred(ev) {
        ev.target.parentElement.className = ''
    }
}