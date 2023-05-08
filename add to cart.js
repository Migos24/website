const btn = document.getElementById('btn');
var email = document.getElementById("email");
var password = document.getElementById("password");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    var email_value = document.getElementById("one").value;
    var length = email_value.length;
    if(length < 6) {

        email.classList.add("active");
        
    }

})