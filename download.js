const list = document.querySelector('#book-list');
function render(doc){
    let tr = document.createElement('tr');
    let name= document.createElement('td');
    let author = document.createElement('td');
    let category = document.createElement('td');
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.setAttribute('href', doc.data().url); 
    a.setAttribute('class', "download"); 

    name.textContent = doc.data().name;
    author.textContent = doc.data().author;
    category.textContent = doc.data().category;
    a.textContent = 'download';

    tr.appendChild(name);
    tr.appendChild(author);
    tr.appendChild(category);
    tr.appendChild(td);
    td.appendChild(a);
    list.appendChild(tr); 
}
db.collection('books').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        render(doc);
    });
});

