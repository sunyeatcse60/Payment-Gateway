// console.log('login javascript');


// // step:1 set addEventListener
// document.getElementById('btn'),addEventListener('click', function(event){

//     // step:2 preventDefault add (handle loading)
//     event.preventDefault();  // vejal for beginner
//     console.log('login button clicked');

//     // step 3: get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = this.document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);


// });


document.getElementById('btn'),addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber == '015' && pinNumber == '1234'){
        console.log('login Successfully');
        window.location.href = "./home.html"

    }
    else{
        alert('Wrong Phone or pin number');
    }
})