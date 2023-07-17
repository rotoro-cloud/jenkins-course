window.addEventListener('message', function(event) {
    console.log(event.data); // Message received from parent
    if (event.data.status == 'dark' ) { 
        document.body.classList.add('bb-dark-theme');
        console.log("set dark")
        console.log(document.body.style)
    } else {
        document.body.classList.remove('bb-dark-theme');
        console.log("set ligth")
        console.log(document.body.style)
    }
    
});
