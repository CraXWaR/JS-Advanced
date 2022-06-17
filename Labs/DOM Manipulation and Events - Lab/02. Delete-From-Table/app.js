function deleteByEmail() {
    //console.log('TODO:...');
    let emailToDel =  document.getElementsByName('email')[0].value
    let tableRows  = document.querySelectorAll('#customers tr td:nth-child(2)')

    for (const td of tableRows) {
        if (td.textContent == emailToDel) {
            let row = td.parentNode;
            row.parentNode.removeChild(row)
            document.getElementById('result').textContent = 'Deleted.'
            return;
        }
        document.getElementById('result').textContent = 'Not found.'
    }
}