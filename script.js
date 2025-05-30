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

// Script for Navbar open/close
document.getElementById('menu-button').addEventListener('click', () => {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('open');
});
document.querySelectorAll('#nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-list').classList.remove('open');
    });
});

// Function for copy and show notification
function copyContacts(infoToCopy) {
    const notificationElement = document.getElementById('fixedNotification');
    navigator.clipboard.writeText(infoToCopy)
        .then(() => {
            notificationElement.style.display = 'block';
            setTimeout(() => notificationElement.style.display = 'none', 1000);
        })
        .catch(err => console.error('Error copying text: ', err));
}

document.getElementById('copyEmail').addEventListener('click', () => {
    copyContacts("danil99danilov@gmail.com");
});
document.getElementById('copyPhone').addEventListener('click', () => {
    copyContacts("+358 408558908");
});

// Slider for projects
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper   = document.querySelector('.slider-wrapper');
    const sliderCards     = document.querySelectorAll('.card');
    const cardContainer   = document.querySelector('.card-container');
    const prevArrow       = document.querySelector('.prev-arrow');
    const nextArrow       = document.querySelector('.next-arrow');
    const sliderDots      = document.querySelector('.slider-dots');
    let currentIndex = 0;

    function updateSlider() {
        const visibleWidth = cardContainer.clientWidth;
        sliderWrapper.style.transform = `translateX(-${currentIndex * visibleWidth}px)`;
        updateDots();
    }

    function updateDots() {
        sliderDots.innerHTML = '';
        sliderCards.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'dot' + (idx === currentIndex ? ' active' : '');
            dot.addEventListener('click', () => {
                currentIndex = idx;
                updateSlider();
            });
            sliderDots.appendChild(dot);
        });
    }

    prevArrow.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : sliderCards.length - 1;
        updateSlider();
    });
    nextArrow.addEventListener('click', () => {
        currentIndex = currentIndex < sliderCards.length - 1 ? currentIndex + 1 : 0;
        updateSlider();
    });

    updateSlider();
    window.addEventListener('resize', updateSlider);
});
