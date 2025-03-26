// Script for count seconds
const startDate = new Date('2019-08-08T00:00:00');

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateSeconds() {
    
    const currentDate = new Date();

    const timeDifference = currentDate - startDate;

    const secondsDifference = Math.floor(timeDifference / 1000);

    const formattedSeconds = formatNumberWithCommas(secondsDifference);

    document.getElementById('seconds').textContent = formattedSeconds;
}

updateSeconds();
setInterval(updateSeconds, 1000);


//Script for Navbar open
document.getElementById('menu-button').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    
    if (navList.classList.contains('open')) {
        navList.classList.remove('open'); 
    } else {
        navList.classList.add('open'); 
    }
});


// Script for Navbar close
var navLinks = document.querySelectorAll('#nav-list li a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var navList = document.getElementById('nav-list');
        navList.classList.remove('open'); 
    });
});


// Function for copy and show notification

function copyContacts(infoToCopy) {
    const notificationElement = document.getElementById('fixedNotification');
    navigator.clipboard.writeText(infoToCopy).then(() => {
        notificationElement.style.display = 'block';

        setTimeout(() => {
            notificationElement.style.display = 'none';
        }, 1000);
    }).catch(err => {
        console.error('Error! ', err);
    });
}

//Copy E-mail
document.getElementById('copyEmail').addEventListener('click', function() {
    const emailText = "danil99danilov@gmail.com";
    copyContacts(emailText);
});

// Copy Phone Number
document.getElementById('copyPhone').addEventListener('click', function() {
    const phoneText = "+358 408558908";
    copyContacts(phoneText);
});



//Animation for cards