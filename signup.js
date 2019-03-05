//signup

const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signup['email'].value;
    const psw = signup['psw'].value;
    auth.createUserWithEmailAndPassword(email, psw).then(cred => {
        console.log(cred.user);
        signup.reset();
    });
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//after authentication
auth.onAuthStateChanged(user => {
    if (user){
        setupui(user);
    }
    else{
        setupui();
    }
})
//for showing content which is for logged in user
const loggedOut = document.querySelectorAll('.login');
const loggedIn = document.querySelectorAll('.logout');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
        window.location = "booking.html";
    }
    else{
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
    }
}




