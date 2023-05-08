const btn = document.getElementById('btn');
var email = document.getElementById("email");
var password = document.getElementById("password");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    var email_value = document.getElementById("one").value;
    var length = email_value.length;
    var pass_value = document.getElementById('two').value;
    var pass = pass_value.length;

    if(email_length < 6) {

        email.classList.add("active");
    
    }

    else if(pass<8){
        password.classList.add("active");

    }

})



