window.addEventListener('message', function(event) {
    console.log(event.data); // Message received from parent
    if (event.data == 'dark' ) { 
        document.body.classList.add('bb-dark-theme');
    } else {
        document.body.classList.remove('bb-dark-theme');
    }
    
});
