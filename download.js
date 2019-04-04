const list = document.querySelector('#book-list');
const form = document.querySelector('#add-download-form');
function render(doc){
    let li = document.createElement('li');
    let name= document.createElement('span');
    let author = document.createElement('span');
    let a = document.createElement('a');

    a.setAttribute('href', doc.data().url); 
    a.setAttribute('class', "download"); 
    li.setAttribute('class', "bookList")

    name.textContent = doc.data().name;
    author.textContent = doc.data().author;
    a.textContent = 'download';

    li.appendChild(name);
    li.appendChild(author);
    li.appendChild(a);
    list.appendChild(li); 
}
db.collection('books').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        render(doc);
    });
});

