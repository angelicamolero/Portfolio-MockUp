let buttons = document.querySelectorAll("button.nav-btn");
let main = document.getElementById('main-container');
let mainElements;
let header;
let closeButtons = document.querySelectorAll(".close");

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        mainElements = document.querySelector(e.target.dataset.href);

        console.log(mainElements);
        header = document.querySelector('header');
        
        if (mainElements) {
            header.style.display = "none";
            main.classList.toggle('main-active');
            mainElements.classList.toggle('active');
            // mainElements.classList.toggle('timeout');
        } else {
            console.log('Main element not found with id: ', e.target.dataset.href);
            
        }
    });
});

closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', e => {
        e.preventDefault();
        main.classList.remove('main-active');
        mainElements.classList.remove('active');
        header.style.display = "flex";
        // mainElements.classList.remove('timeout');
    });
});

    1
