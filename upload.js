const frm = document.querySelector('#upload-form');

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('books').add({
        name: frm.name.value,
        publisher: frm.publisher.value,
        author: frm.author.value,
        category: frm.category.value
    });
});
    var fileButton = document.getElementById("fileButton");
    fileButton.addEventListener('change', function(e){
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('books/' + file.name);
        var task = storageRef.put(file);
        task.on('state_changed', 
            function progress(snapshot){
                var per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = per;
            },
            function complete(){
                alert("your book is uploaded successfully");
            }
        );

    });  
    frm.reset();