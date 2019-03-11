//signup

const signup = document.querySelector('#signup-form'); // selects id - signup-form.
signup.addEventListener('submit', (e) => {// event handler submit, element signup.
    e.preventDefault();
    const email = signup['email'].value; // takes the value entered by user in the form through id - email and value is in to a const email.
    const psw = signup['psw'].value;  // takes the value entered by user in the form through id - psw and value is in to a const psw.
    auth.createUserWithEmailAndPassword(email, psw).then(cred => { // creates a new user.
        signup.reset(); // reset signup form after user is created. 
    });
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//after authentication
//similar to commlogin.js

auth.onAuthStateChanged(user => {// checks whether the user is logged in or logged out
    if (user){
        setupui(user);
    }
    else{
        setupui();
    }
})

//for showing content which is for logged in user
//similar to commlogin.js

const loggedOut = document.querySelectorAll('.login');
const loggedIn = document.querySelectorAll('.logout');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
        window.location = "booking.html"; // after account creation, user redirected to booking.html
    }
    else{
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
    }
}




