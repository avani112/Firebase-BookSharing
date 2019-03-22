// function download(){
//     var fileName = window.AppInventor.getWebViewString();
//     var storage = firebase.storage();
//     var pathReference = storage.ref(fileName);
//     pathReference.getDownloadURL().then(function(url) {
//         window.AppInventor.setWebViewString(url);
//     });
// }

const list = document.querySelector('#book-list');
const frm = document.querySelector('#download-form');

function render(doc){
    let li = document.createElement('li');
    let name= document.createElement('span');
    let category = document.createElement('span');
    let div = document.createElement('div');

    li.setAttribute('data-id' , doc.id);
    name.textContent = doc.data().name;
    category.textContent = doc.data().category;
    div.textContent = 'download';

    li.appendChild(name);
    li.appendChild(category);
    li.appendChild(div);
    list.appendChild(li);

    frm.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('books').where('category','==','#category').where('name','==','#name').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                render(doc);
            }) 
        });
    })
   
}


//https://firebasestorage.googleapis.com/v0/b/booksharing-93751.appspot.com/o/best.jpeg?alt=media&token=04fc7708-64c3-44fd-9401-c5d719367748