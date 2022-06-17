function validate() {
    //console.log('TODO:...');
    const regex = /^\w*\@(\w*\.\w+)$/gm;
    let mail = document.getElementById('email')
    mail.addEventListener('change', ifClicked)

    function ifClicked() {
        regex.test(mail.value)
        ? mail.classList.remove('error')
        : mail.classList.add('error')
    }
}