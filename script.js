/* =================================
   FALLING LOVE
================================= */

const fallingLove =
    document.getElementById("fallingLove");

const loveSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "🌸",
    "🌷",
    "✨",
    "♡"
];


function createFallingLove() {

    const love =
        document.createElement("div");

    love.classList.add("falling-love");

    love.innerText =
        loveSymbols[
            Math.floor(
                Math.random() *
                loveSymbols.length
            )
        ];

    love.style.left =
        Math.random() * 100 + "vw";

    love.style.setProperty(
        "--move",
        (Math.random() * 200 - 100) + "px"
    );

    love.style.fontSize =
        (12 + Math.random() * 20) + "px";

    love.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    fallingLove.appendChild(love);

    setTimeout(function () {
        love.remove();
    }, 9000);
}


/* Start falling love */

for (let i = 0; i < 25; i++) {

    setTimeout(
        createFallingLove,
        i * 180
    );

}


setInterval(
    createFallingLove,
    450
);



/* =================================
   OPEN SURPRISE
================================= */

const mainGift =
    document.getElementById("mainGift");

const mainContent =
    document.getElementById("mainContent");


mainGift.addEventListener("click", function () {

    mainContent.classList.remove("hidden");

    setTimeout(function () {

        mainContent.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

});



/* =================================
   BIRTHDAY WISH CARD
================================= */

const wishCard =
    document.getElementById("wishCard");

const wishSection =
    document.getElementById("wishSection");


wishCard.addEventListener("click", function () {

    wishSection.scrollIntoView({
        behavior: "smooth"
    });

});



/* =================================
   CALENDAR
================================= */

const calendarDays =
    document.getElementById("calendarDays");


const firstDay =
    new Date(2026, 8, 1).getDay();


const totalDays = 30;


/* Empty spaces */

for (let i = 0; i < firstDay; i++) {

    const empty =
        document.createElement("div");

    calendarDays.appendChild(empty);

}


/* Days */

for (let day = 1; day <= totalDays; day++) {

    const dayElement =
        document.createElement("div");

    dayElement.classList.add("day");

    dayElement.innerText = day;


    /* Birthday */

    if (day === 1) {
        dayElement.classList.add("birthday");
    }


    calendarDays.appendChild(dayElement);

}



/* =================================
   CALENDAR GIFT
================================= */

const calendarGift =
    document.getElementById("calendarGift");

const calendarArea =
    document.getElementById("calendarArea");


calendarGift.addEventListener("click", function () {

    calendarArea.scrollIntoView({
        behavior: "smooth"
    });

});



/* =================================
   PHOTO LIGHTBOX
================================= */

const photoCards =
    document.querySelectorAll(".photo-card");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


photoCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const image =
            card.querySelector("img");

        lightboxImage.src =
            image.src;

        lightbox.classList.add("active");

    });

});


closeLightbox.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


/* ESC key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});