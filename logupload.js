//for showing content which is for logged in user
const loggedOut = document.querySelectorAll('.logout');
const loggedIn = document.querySelectorAll('.login');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
    }
    else{
        loggedOut.forEach(item => item.styledisplay = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
        window.location="index.html";
    }
}
auth.onAuthStateChanged(user => {
    if (user){
        setupui(user);
    }
    else{
        setupui();
    }
})

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});



