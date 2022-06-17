function encodeAndDecodeMessages() {
    //console.log('TODO...')
    let textArea = document.querySelectorAll('textarea')
    let buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', encode)
    buttons[1].addEventListener('click', decode)

    function encode(e) {
        let encoded = ''
        let input = textArea[0].value;
        for (let index = 0; index < input.length; index++) {
            encoded += String.fromCharCode(input[index].charCodeAt(0) + 1)
        }
        textArea[1].value = encoded;
        textArea[0].value = ''
    }
    function decode(e) {
        let decoded = ''
        let input = textArea[1].value;
        for (let index = 0; index < input.length; index++) {
            decoded += String.fromCharCode(input[index].charCodeAt(0) - 1)
        }
        textArea[1].value = decoded;
    }
}