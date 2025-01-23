// console.log('Cashout file');


document.getElementById('btn-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out').value;
    console.log(cashOut);

    const validPin = document.getElementById('cashout-pin').value;
    console.log(validPin);

    if(validPin == '1234'){
        console.log('Successfully Cash out');

        const currentBalance = document.getElementById('account-balance').innerText;
        console.log(currentBalance);

        const cashOutBalance = parseFloat(cashOut);
        const cashOutCurrent = parseFloat(currentBalance);

        const newBalanceBeforCashOut = cashOutBalance - cashOutCurrent ;
        console.log(newBalanceBeforCashOut);

        document.getElementById('account-balance').innerText = newBalanceBeforCashOut;
    }
    else{
        alert('Incorrect Pin number!!');
    }
})