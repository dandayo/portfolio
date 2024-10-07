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


//Script for Navbar
document.getElementById('menu-button').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    
    if (navList.classList.contains('open')) {
        navList.classList.remove('open'); 
    } else {
        navList.classList.add('open'); 
    }
});