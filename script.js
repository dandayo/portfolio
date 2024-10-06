// Script for count seconds
const startDate = new Date('2020-08-08T00:00:00');

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