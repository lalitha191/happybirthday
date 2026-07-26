const giftBtn = document.getElementById("giftButton");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const music = document.getElementById("bgmusic");

const memoryBtn = document.getElementById("memoryBtn");
const memoryBook = document.getElementById("memoryBook");
const nextBtn = document.getElementById("nextPage");
const gallery = document.getElementById("gallery");
const pages = document.querySelectorAll(".book-page");

const letterBtn = document.getElementById("letterBtn");
const letterSection = document.getElementById("letterSection");

// Surprise elements
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseSection = document.getElementById("surpriseSection");
const restartBtn = document.getElementById("restartBtn");

let current = 0;

// Open Gift Box & Transition
giftBtn.onclick = () => {
    music.volume = 0.5;
    music.play().catch(err => console.log("Audio playback error:", err));

    welcome.style.animation = "fadeOut 0.9s forwards";

    setTimeout(() => {
        welcome.style.display = "none";
        main.style.display = "flex";
    }, 900);
};

// Toggle Memory Book
memoryBtn.onclick = () => {
    memoryBook.style.display = "block";
    memoryBtn.style.display = "none";
};

// Cycle through book pages
nextBtn.onclick = () => {
    pages[current].classList.remove("active");
    current++;

    if (current >= pages.length) {
        nextBtn.style.display = "none";
        gallery.style.display = "block";
    } else {
        pages[current].classList.add("active");
    }
};

// Open Letter Section
letterBtn.onclick = () => {
    gallery.style.display = "none";
    letterSection.style.display = "block";
};

// Open Surprise Section
surpriseBtn.onclick = () => {
    letterSection.style.display = "none";
    surpriseSection.style.display = "block";

    // Trigger Confetti Blast!
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
};

// Replay button
restartBtn.onclick = () => {
    location.reload();
};
