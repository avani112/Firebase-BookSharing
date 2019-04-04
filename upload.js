const frm = document.querySelector('#upload-form');
var fileButton = document.getElementById("fileButton");
    fileButton.addEventListener('change', function(e){
        e.preventDefault();
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('books/' + file.name);
        var task = storageRef.put(file);
        task.on('state_changed', 
            function progress(snapshot){
                var per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = per;
                snapshot.ref.getDownloadURL().then(function(url) {
                    console.log('File available at', url);
                    frm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        db.collection('books').doc(frm.name.value).set({
                            name: frm.name.value,
                            publisher: frm.publisher.value,
                            author: frm.author.value,
                            category: frm.category.value,
                            filename: file.name,
                            url: url
                        });
                        alert("uploading successful");
                        frm.reset();
                    }); 
                });
            }
        );
     }); 
    
        
