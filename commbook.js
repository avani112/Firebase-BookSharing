//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => { // eventlistener - click, element - logout
    e.preventDefault();
    auth.signOut();
});


//after authentication
//setupui according to the state

auth.onAuthStateChanged(user => {
    if (user){
        setupui(user);
    }
    else{
        setupui();
    }
})

//for showing content which is for logged in user
//similar to that in commsignup.js

const loggedOut = document.querySelectorAll('.login');
const loggedIn = document.querySelectorAll('.logout');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
    }
    else{
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
        window.location = "index.html"; // after loggin out, user is returned to index.html page and all the default tabs are shown on it
    }
}
