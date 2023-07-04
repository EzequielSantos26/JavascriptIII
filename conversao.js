// Converte uma string para um número inteiro
function convertToInt(string) {
    // Sua implementação aqui
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(string))
        return Number(string);            
}
console.log(convertToInt('42'));
console.log(typeof convertToInt('42'));

// Converte um número inteiro para uma string
function convertToString(number) {
    // Sua implementação aqui 
    return string = number +''
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    // Sua implementação aqui
    return Boolean (value)
}


module.exports = { convertToInt, convertToString, convertToBoolean };