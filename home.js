// console.log('home page');


document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-money').value;
    console.log(addMoney);

    const correctPin = document.getElementById('input-pin').value;
    console.log(correctPin); 

    if(correctPin == '1234'){
        console.log('Successfully add the money');


        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoneyNumber + balanceNumber ;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;
  
    }
    else{
        alert('Wrong pin number!! Try again later');
    }

});