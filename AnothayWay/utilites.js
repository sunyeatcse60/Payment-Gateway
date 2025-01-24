// console.log('This is utilites js');


function getInputMoneyById (id){

    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
};


function getTextFileValueById (id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
};