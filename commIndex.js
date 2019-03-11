//logout
const logout = document.querySelector('#logout'); // returns the first Element within the document that matches the specified selector (here, id-logout), or group of selectors.
logout.addEventListener('click', (e) => { // addEventListener() method attaches an event handler (click) to the specified element (here, logout). e is the object.
    e.preventDefault(); // stops the default action of an element from happening.
    auth.signOut(); // signout the user.
});


//after authentication
auth.onAuthStateChanged(user => { //checking the state of user that is logged in or logged out.
    if (user){ //if logged in, setupui function for the parameter user is called
        setupui(user);
    }
    else{ // else setupui without parameter is called
        setupui();
    }
})
//for showing content which is for logged in user
const loggedOut = document.querySelectorAll('.login');// returns the first Element within the document that matches the specified selector (here, class-logout), or group of selectors.
const loggedIn = document.querySelectorAll('.logout');//returns the first Element within the document that matches the specified selector (here, class-login), or group of selectors.

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'block'); //element is rendered as a block-level element. A block element fills the entire line, and nothing can be displayed on its left or right side.
        loggedIn.forEach(item => item.style.display = 'none'); //element will not be displayed
    }
    else{
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
    }
}
