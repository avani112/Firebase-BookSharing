const bookList = document.querySelector('#book-list');
const form = document.querySelector('#add-book-form');

// create element & render cafe
function renderBook(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let bookname = document.createElement('span');
    let contact = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    bookname.textContent = doc.data().bookname;
    contact.textContent = doc.data().contact;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(bookname);
    li.appendChild(contact);
    li.appendChild(cross);

    bookList.appendChild(li);

    //deleting data 
    cross.addEventListener('click' ,(e) => {
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('data-id');
        db.collection('sellbooks').doc(id).delete();
    })
}


// getting data
//db.collection('cafes').orderBy('name').get().then(snapshot => {
 //   snapshot.docs.forEach(doc => {
 //       renderCafe(doc);
  //  });
//});

// saving data


form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('sellbooks').add({
        name: form.name.value,
        bookname: form.bookname.value,
        contact: form.contact.value
    });
    form.name.value='';
    form.bookname.value = '';
    form.contact.value = '';
});


//real-time listener
db.collection('sellbooks').orderBy('bookname').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(changes => {
     if(changes.type == 'added'){
        renderBook(changes.doc);
  }  
      else if (changes.type == 'removed'){
      let li = bookList.querySelector('[data-id=' + changes.doc.id +']');
      bookList.removeChild(li);
        }
    })

})
