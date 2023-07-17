window.addEventListener('message', function(event) {
    if (event.data.status == 'dark' ) { 
        document.body.classList.add('bb-dark-theme');
    } else {
        document.body.classList.remove('bb-dark-theme');
    }
    
});
