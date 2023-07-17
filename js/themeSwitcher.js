window.addEventListener('message', function(event) {
    console.log(event.data); // Message received from parent
    if (event.data.status == 'dark' ) { 
        document.body.classList.add('bb-dark-theme');
        document.body.style.backgroundImage = "dark";
    } else {
        document.body.classList.remove('bb-dark-theme');
        document.body.style.backgroundImage = "white";
    }
    
});
