window.addEventListener('message', function(event) {
    if (event.data.status == 'light' ) { 
        document.body.classList.remove('bb-dark-theme');
    } else {
        document.body.classList.add('bb-dark-theme');
    }
    
});
