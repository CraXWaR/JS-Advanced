function lockedProfile() {
    //console.log('TODO...')
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle))

    function toggle(e) {
        const profile = e.target.parentElement
        const active = profile.querySelector('input[type="radio"][value="unlock"]').checked

        if (active) {
            let div = profile.querySelector('div')

            if (e.target.textContent == 'Show more') {
                div.style.display = 'block'
                e.target.textContent = 'Hide it'
            } else {
                div.style.display = ''
                e.target.textContent = 'Show more'
            }
        }
    }
}