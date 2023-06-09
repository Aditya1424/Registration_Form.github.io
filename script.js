const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const salary = document.getElementById('salary');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');


function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




form.addEventListener('submit', function (e){
    e.preventDefault();
    if(username.value === ''){
        showError(username, 'Username is required');
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    }
    else if(!isValidEmail(email.value)){
        showError(email, 'Email is invalid')
    }
    else{
        showSuccess(email);
    }

    if( age.value=== ''){
        showError(age, 'User age is required');
    }
    else{
        showSuccess(age);
    }

    if( salary.value=== ''){
        showError(salary, 'User salary is required');
    }
    else{
        showSuccess(salary);
    }

    if(password.value === ''){
        showError(password, 'Password is required')
    }
    else if(password.value.length <8){
        showError(password, 'Password contains atleast 8 character');
    }
    else{
        showSuccess(password);
    }

    if(confirm_password.value === ''){
        showError(confirm_password, 'Confirm Password is required')
    }
    else if(confirm_password.value.length != password.value.length ){
        showError(confirm_password, 'Password mismatch');
    }
    else{
        showSuccess(confirm_password);
    }
   
    
});

