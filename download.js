const list = document.querySelector('#book-list');
const form = document.querySelector('#download-form');
var bookRef = db.collection("books").doc();



function render(doc){
    let li = document.createElement('li');
    let name= document.createElement('span');
    let category = document.createElement('span');
    let a = document.createElement('a');
    a.setAttribute('href', doc.data().url);  
    name.textContent = doc.data().name;
    category.textContent = doc.data().category;
    a.textContent = 'download';

    li.appendChild(name);
    li.appendChild(category);
    li.appendChild(a);
    list.appendChild(li); 
}

db.collection('books').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        render(doc);
    });
});

