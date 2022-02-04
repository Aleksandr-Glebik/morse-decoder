const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newArr = expr.split('')
    // console.log('newArr', newArr);
    let newArrForSymbol = []
    for (let i = 0; i < newArr.length / 10; i++) {
        newArrForSymbol.push(newArr.slice(i * 10, (i + 1) * 10))
    }
    // console.log('newArrForSymbol', newArrForSymbol);
    let arrTenOrEleven = []
    newArrForSymbol.forEach((elem) => {
        let ind = elem.indexOf('1')
        arrTenOrEleven.push(elem.slice(ind))
    })
    // console.log("arrTenOrEleven", arrTenOrEleven);

    let itemArrSymbol = []
    arrTenOrEleven.forEach((item) => {
        let arrSymbol = []
        for (let i = 0; i < item.length;i++) {
            if (item[i] + item[i + 1] === '10') {
                arrSymbol.push('.')
            } else if (item[i] + item[i + 1] === '11' && i % 2 === 0) {
                arrSymbol.push('-')
            } else if (item[i] === '*') {
                arrSymbol.push(' ')
            }
        }
        // console.log('arrSymbol last', arrSymbol);
        itemArrSymbol.push(arrSymbol)
    })
    // console.log('itemArrSymbol', itemArrSymbol);
    let result = []
    itemArrSymbol.forEach((elem) => {
        let sumRow = ''
        for (let i = 0; i < elem.length; i++) {
            sumRow += elem[i]
        }
        // console.log('sumRow', sumRow);
        if (sumRow === ' ') {
            result.push(' ')
        } else {
            result.push(MORSE_TABLE[sumRow])
        }
        // console.log('result', result);
    })
    // console.log('result cancel', result);
    let sumStr = ''
    result.forEach((el) => {
        sumStr += el
    })
    console.log('sumStr', sumStr);
    return sumStr
}

module.exports = {
    decode
}