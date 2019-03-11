//for showing content which is for logged in user
// function similar to that in commlogin.js for showing items ot logged in user

const loggedOut = document.querySelectorAll('.logout');
const loggedIn = document.querySelectorAll('.login');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
        window.location = "booking.html"; // after logging in, the user is redirected to booking.html page
    }
    else{
        loggedOut.forEach(item => item.styledisplay = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
    }
}

// for logging in user

const login = document.querySelector('#login-form'); // id- login-form is selected.
login.addEventListener('submit',(e) => { // event handler submit is attached to element login.
    e.preventDefault(); //stops the default action of an element from happening.
    const email = login['email'].value; // takes the value entered by user in the form through id - email and value is in to a const email.
    const psw = login['psw'].value; // takes the value entered by user in the form through id - psw and value is in to a const psw.

    auth.signInWithEmailAndPassword(email, psw).then(cred => { // if the emailid and password is correct, user is logged in.
        login.reset(); // login form is reset after logging in
    });
});

// for logging out
// function similar to that in commindex.js

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//after authentication
// function similar to that in commindex.js

auth.onAuthStateChanged(user => {
    if (user){
        setupui(user);
    }
    else{
        setupui();
    }
})

