// console.log('This is home js');

document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputMoneyById('add-money');
    const correctPin = getInputMoneyById('input-pin');

    // console.log('add money  with parameter',addMoney,correctPin);

    if(correctPin == '1234'){
        const balance = getTextFileValueById('account-balance');
        const newBalance = balance + addMoney ;

        document.getElementById('account-balance').innerText = newBalance;




    // add a transection section
    const p = document.createElement('p');
    p.innerText = `Added: ${addMoney} tk. New balance: ${newBalance}`

    document.getElementById('transection-container').appendChild(p);



    }
    else{
        alert('Fail try again');
    }
});

