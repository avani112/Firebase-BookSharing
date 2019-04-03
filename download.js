const list = document.querySelector('#book-list');
const form = document.querySelector('#download-form');

function render(doc){
    let li = document.createElement('li');
    let name= document.createElement('span');
    let category = document.createElement('span');
    let url = document.createElement('a');
    var att = document.createAttribute("href");        
    // url.setAttributeNode(att);
    // att.value = doc.data().url;   
    // li.setAttribute('data-id' , doc.id);
    // name.textContent = doc.data().name;
    category.textContent = doc.data().category; 
    li.appendChild(name);
    li.appendChild(category);
    li.appendChild(url);
    list.appendChild(li);

   
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('books').where('category','==','#category').where('name','==','#name').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            render(doc);
        }) 
    });
    db.collection('books').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                render(change.doc);
        })
    });
});
form.reset();



var anchor = document.getElementById("myAnchor");  // Get the <a> element with id="myAnchor"
var att = document.createAttribute("href");        // Create a "href" attribute
att.value = "https://www.w3schools.com";            // Set the value of the href attribute
anchor.setAttributeNode(att);  
