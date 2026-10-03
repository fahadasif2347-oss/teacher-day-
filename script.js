// /* =========================================================
//    HAPPY BIRTHDAY WEBSITE
//    JAVASCRIPT
// ========================================================= */


// /* =========================================================
//    CUSTOMIZE HERE
// ========================================================= */
// function unlockWebsite() {

//     if (passwordInput.value === "12345") {

//         // Website open
//         showScreen("dateScreen");

//         // 🎵 Music starts after user's click
//         playMusic();

//     } else {

//         alert("Wrong Password!");

//     }
// }

// const CONFIG = {

//     // 🔐 Change your password here
//     password: "2026",

//     // 👤 Change brother's name here
//     name: "Yahya Bhai ",

//     // 🎂 Birthday date
//     birthday: "08-09-2026",

//     // 💌 Main birthday message
//     message: `
//         Today is not just another day.
//         It is the day the world became a little
//         more special because you were born.

//         I wish you endless happiness, beautiful
//         memories, success in everything you do,
//         and countless reasons to smile.

//         May this new year of your life bring
//         you everything your heart wishes for.
//     `,

//     // 🖼️ Your photos
//     photos: [
//         "images/imagesbrother1.jpg",
//         "images/pic 2.jpg",
//         "images/pic 3.jpg"
//     ]

// };


// /* =========================================================
//    GET ELEMENTS
// ========================================================= */

// const passwordScreen =
//     document.getElementById("passwordScreen");

// const dateScreen =
//     document.getElementById("dateScreen");

// const cakeScreen =
//     document.getElementById("cakeScreen");

// const letterScreen =
//     document.getElementById("letterScreen");

// const messageScreen =
//     document.getElementById("messageScreen");

// const finalScreen =
//     document.getElementById("finalScreen");

// const passwordInput =
//     document.getElementById("passwordInput");

// const passwordError =
//     document.getElementById("passwordError");

// const unlockBtn =
//     document.getElementById("unlockBtn");

// const togglePassword =
//     document.getElementById("togglePassword");

// const continueDateBtn =
//     document.getElementById("continueDateBtn");

// const cakeBtn =
//     document.getElementById("cakeBtn");

// const envelope =
//     document.getElementById("envelope");

// const openLetterBtn =
//     document.getElementById("openLetterBtn");

// const letterHint =
//     document.getElementById("letterHint");

// const sendMessageBtn =
//     document.getElementById("sendMessageBtn");

// const displayName =
//     document.getElementById("displayName");

// const finalName =
//     document.getElementById("finalName");

// const replayBtn =
//     document.getElementById("replayBtn");

// const mainPhoto =
//     document.getElementById("mainPhoto");

// const photoDots =
//     document.querySelectorAll(".photo-dot");

// const birthdayMusic =
//     document.getElementById("birthdayMusic");

// const musicBtn =
//     document.getElementById("musicBtn");

// const musicStatus =
//     document.getElementById("musicStatus");


// /* =========================================================
//    SET USER DATA
// ========================================================= */

// displayName.textContent = CONFIG.name;
// finalName.textContent = CONFIG.name;


// /* =========================================================
//    SCREEN SWITCH FUNCTION
// ========================================================= */

// function showScreen(screen) {

//     const screens = document.querySelectorAll(".screen");

//     screens.forEach(item => {
//         item.classList.remove("active");
//     });

//     setTimeout(() => {
//         screen.classList.add("active");
//     }, 100);

// }


// /* =========================================================
//    PASSWORD
// ========================================================= */

// unlockBtn.addEventListener("click", checkPassword);

// passwordInput.addEventListener("keydown", function(event) {

//     if (event.key === "Enter") {
//         checkPassword();
//     }

// });


// function checkPassword() {

//     const enteredPassword =
//         passwordInput.value.trim();

//     if (enteredPassword === CONFIG.password) {

//         passwordError.style.display = "none";

//         createConfetti(50);

//         setTimeout(() => {

//             showScreen(dateScreen);

//         }, 700);

//         playMusic();

//     } else {

//         passwordError.style.display = "block";

//         passwordInput.classList.add("shake");

//         setTimeout(() => {
//             passwordInput.classList.remove("shake");
//         }, 500);

//     }

// }


// /* =========================================================
//    SHOW / HIDE PASSWORD
// ========================================================= */

// togglePassword.addEventListener("click", function() {

//     if (passwordInput.type === "password") {

//         passwordInput.type = "text";

//         togglePassword.textContent = "🙈";

//     } else {

//         passwordInput.type = "password";

//         togglePassword.textContent = "👁";

//     }

// });


// /* =========================================================
//    DATE SCREEN
// ========================================================= */

// continueDateBtn.addEventListener("click", function() {

//     createConfetti(30);

//     showScreen(cakeScreen);

// });


// /* =========================================================
//    CAKE
// ========================================================= */

// cakeBtn.addEventListener("click", function() {

//     const flame =
//         document.querySelector(".flame");

//     flame.style.animation = "none";

//     flame.style.opacity = "0";

//     flame.style.transform =
//         "translateY(-30px) scale(0)";

//     cakeBtn.textContent =
//         "Wish Made! ✨";

//     createConfetti(100);

//     setTimeout(() => {

//         showScreen(letterScreen);

//     }, 1600);

// });


// /* =========================================================
//    ENVELOPE
// ========================================================= */

// envelope.addEventListener("click", openEnvelope);

// function openEnvelope() {

//     if (envelope.classList.contains("open")) {
//         return;
//     }

//     envelope.classList.add("open");

//     letterHint.textContent =
//         "Your message is waiting ❤️";

//     setTimeout(() => {

//         openLetterBtn.classList.remove("hidden");

//     }, 900);

// }


// openLetterBtn.addEventListener("click", function() {

//     showScreen(messageScreen);

//     createHearts();

// });


// /* =========================================================
//    SEND MESSAGE
// ========================================================= */

// sendMessageBtn.addEventListener("click", function() {

//     createConfetti(150);

//     createHearts();

//     showScreen(finalScreen);

// });


// /* =========================================================
//    REPLAY
// ========================================================= */

// replayBtn.addEventListener("click", function() {

//     resetWebsite();

// });


// function resetWebsite() {

//     passwordInput.value = "";

//     passwordError.style.display = "none";

//     envelope.classList.remove("open");

//     openLetterBtn.classList.add("hidden");

//     letterHint.textContent =
//         "Click the letter to open it";

//     const flame =
//         document.querySelector(".flame");

//     flame.style.opacity = "1";

//     flame.style.transform =
//         "rotate(-45deg)";

//     flame.style.animation =
//         "flame 0.6s infinite alternate";

//     cakeBtn.textContent =
//         "Blow The Candle 🕯️";

//     showScreen(passwordScreen);

// }


// /* =========================================================
//    MUSIC
// ========================================================= */

// let musicPlaying = false;


// musicBtn.addEventListener("click", function() {

//     if (musicPlaying) {

//         pauseMusic();

//     } else {

//         playMusic();

//     }

// });


// function playMusic() {

//     birthdayMusic
//         .play()
//         .then(() => {

//             musicPlaying = true;

//             musicBtn.textContent = "🔊";

//             musicStatus.textContent =
//                 "Music playing";

//         })
//         .catch(() => {

//             musicStatus.textContent =
//                 "Click 🎵 to play";

//         });

// }

// function pauseMusic() {

//     birthdayMusic.pause();

//     musicPlaying = false;

//     musicBtn.textContent = "🎵";

//     musicStatus.textContent =
//         "Music paused";

// }
// const musicBtn = document.getElementById("musicBtn");
// const birthdayMusic = document.getElementById("birthdayMusic");
// const musicStatus = document.getElementById("musicStatus");

// let musicPlaying = false;


// // ================= PLAY MUSIC =================

// function playMusic() {

//     birthdayMusic.volume = 0.5;

//     birthdayMusic.play()
//         .then(() => {

//             musicPlaying = true;

//             musicBtn.textContent = "🔊";
//             musicStatus.textContent = "Music playing";

//         })
//         .catch((error) => {

//             console.log("Music autoplay blocked:", error);

//             musicStatus.textContent = "Click 🎵 to play";

//         });
// }


// // ================= PAUSE MUSIC =================

// function pauseMusic() {

//     birthdayMusic.pause();

//     musicPlaying = false;

//     musicBtn.textContent = "🎵";
//     musicStatus.textContent = "Music paused";
// }


// // ================= MUSIC BUTTON =================

// musicBtn.addEventListener("click", function () {

//     if (musicPlaying) {

//         pauseMusic();

//     } else {

//         playMusic();

//     }

// });
// /* =========================================================
//    PHOTO SLIDER
// ========================================================= */

// let currentPhoto = 0;


// photoDots.forEach(dot => {

//     dot.addEventListener("click", function() {

//         const index =
//             Number(this.dataset.index);

//         changePhoto(index);

//     });

// });


// function changePhoto(index) {

//     if (!CONFIG.photos[index]) {
//         return;
//     }

//     currentPhoto = index;

//     mainPhoto.style.opacity = "0";

//     setTimeout(() => {

//         mainPhoto.src =
//             CONFIG.photos[index];

//         mainPhoto.style.opacity = "1";

//     }, 250);

//     photoDots.forEach(dot => {

//         dot.classList.remove("active");

//     });

//     photoDots[index].classList.add("active");

// }


// /* =========================================================
//    AUTO PHOTO SLIDER
// ========================================================= */

// setInterval(() => {

//     currentPhoto++;

//     if (currentPhoto >= CONFIG.photos.length) {
//         currentPhoto = 0;
//     }

//     changePhoto(currentPhoto);

// }, 5000);


// /* =========================================================
//    FLOATING HEARTS
// ========================================================= */

// function createHearts() {

//     const container =
//         document.getElementById("hearts");

//     const symbols = [
//         "❤️",
//         "💕",
//         "💖",
//         "💗",
//         "✨",
//         "💞"
//     ];

//     for (let i = 0; i < 25; i++) {

//         const heart =
//             document.createElement("div");

//         heart.classList.add("heart");

//         heart.textContent =
//             symbols[
//                 Math.floor(
//                     Math.random() * symbols.length
//                 )
//             ];

//         heart.style.left =
//             Math.random() * 100 + "vw";

//         heart.style.fontSize =
//             12 + Math.random() * 25 + "px";

//         heart.style.animationDuration =
//             5 + Math.random() * 6 + "s";

//         heart.style.animationDelay =
//             Math.random() * 3 + "s";

//         container.appendChild(heart);

//         setTimeout(() => {

//             heart.remove();

//         }, 12000);

//     }

// }


// /* =========================================================
//    CONFETTI
// ========================================================= */

// function createConfetti(amount = 80) {

//     const container =
//         document.getElementById("confetti");

//     const symbols = [
//         "🎉",
//         "✨",
//         "❤️",
//         "🎊",
//         "💕",
//         "⭐"
//     ];

//     for (let i = 0; i < amount; i++) {

//         const piece =
//             document.createElement("div");

//         piece.classList.add(
//             "confetti-piece"
//         );

//         piece.textContent =
//             symbols[
//                 Math.floor(
//                     Math.random() * symbols.length
//                 )
//             ];

//         piece.style.left =
//             Math.random() * 100 + "vw";

//         piece.style.fontSize =
//             10 + Math.random() * 18 + "px";

//         piece.style.animationDuration =
//             2 + Math.random() * 4 + "s";

//         piece.style.animationDelay =
//             Math.random() * 2 + "s";

//         container.appendChild(piece);

//         setTimeout(() => {

//             piece.remove();

//         }, 7000);

//     }

// }


// /* =========================================================
//    INITIAL EFFECTS
// ========================================================= */

// setTimeout(() => {

//     createHearts();

// }, 1500);


// /* =========================================================
//    PRELOAD PHOTOS
// ========================================================= */

// CONFIG.photos.forEach(photo => {

//     const img =
//         new Image();

//     img.src = photo;

// });


/* =========================================================
   HAPPY BIRTHDAY WEBSITE
   JAVASCRIPT
========================================================= */


/* =========================================================
   CUSTOMIZE HERE
========================================================= */

const CONFIG = {

    // 🔐 Website password
    password: "2026",

    // 👤 Brother's name
    name: "Sir Nauman Riaz",

    // 🎂 Birthday date
    birthday: "5-10-2026",

    // 💌 Main birthday message
    message: `
        Today is not just another day.
        It is the day the world became a little
        more special because you were born.

        I wish you endless happiness, beautiful
        memories, success in everything you do,
        and countless reasons to smile.

        May this new year of your life bring
        you everything your heart wishes for.
    `,

    // 🖼️ Your photos
    photos: [
        "images/imagesbrother1.jpg",
        "images/pic 2.jpg",
        "images/pic 3.jpg"
    ]

};


/* =========================================================
   GET ELEMENTS
========================================================= */

const passwordScreen =
    document.getElementById("passwordScreen");

const dateScreen =
    document.getElementById("dateScreen");

const cakeScreen =
    document.getElementById("cakeScreen");

const letterScreen =
    document.getElementById("letterScreen");

const messageScreen =
    document.getElementById("messageScreen");

const finalScreen =
    document.getElementById("finalScreen");

const passwordInput =
    document.getElementById("passwordInput");

const passwordError =
    document.getElementById("passwordError");

const unlockBtn =
    document.getElementById("unlockBtn");

const togglePassword =
    document.getElementById("togglePassword");

const continueDateBtn =
    document.getElementById("continueDateBtn");

const cakeBtn =
    document.getElementById("cakeBtn");

const envelope =
    document.getElementById("envelope");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const letterHint =
    document.getElementById("letterHint");

const sendMessageBtn =
    document.getElementById("sendMessageBtn");

const displayName =
    document.getElementById("displayName");

const finalName =
    document.getElementById("finalName");

const replayBtn =
    document.getElementById("replayBtn");

const mainPhoto =
    document.getElementById("mainPhoto");

const photoDots =
    document.querySelectorAll(".photo-dot");


/* =========================================================
   MUSIC ELEMENTS
========================================================= */

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");

const musicStatus =
    document.getElementById("musicStatus");

let musicPlaying = false;


/* =========================================================
   SET USER DATA
========================================================= */

if (displayName) {
    displayName.textContent = CONFIG.name;
}

if (finalName) {
    finalName.textContent = CONFIG.name;
}


/* =========================================================
   SCREEN SWITCH FUNCTION
========================================================= */

function showScreen(screen) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(item => {
        item.classList.remove("active");
    });

    setTimeout(() => {
        screen.classList.add("active");
    }, 100);

}


/* =========================================================
   PASSWORD
========================================================= */

if (unlockBtn) {
    unlockBtn.addEventListener("click", checkPassword);
}

if (passwordInput) {

    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                checkPassword();
            }

        }
    );

}


function checkPassword() {

    const enteredPassword =
        passwordInput.value.trim();


    if (enteredPassword === CONFIG.password) {

        passwordError.style.display = "none";

        createConfetti(50);


        /* =========================================
           🎵 START MUSIC AUTOMATICALLY
           User has clicked Unlock, so browser
           allows the music to start.
        ========================================= */

        playMusic();


        setTimeout(() => {

            showScreen(dateScreen);

        }, 700);


    } else {

        passwordError.style.display = "block";

        passwordInput.classList.add("shake");

        setTimeout(() => {

            passwordInput.classList.remove("shake");

        }, 500);

    }

}


/* =========================================================
   SHOW / HIDE PASSWORD
========================================================= */

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.textContent = "🙈";

            } else {

                passwordInput.type = "password";

                togglePassword.textContent = "👁";

            }

        }
    );

}


/* =========================================================
   DATE SCREEN
========================================================= */

if (continueDateBtn) {

    continueDateBtn.addEventListener(
        "click",
        function () {

            createConfetti(30);

            showScreen(cakeScreen);

        }
    );

}


/* =========================================================
   CAKE
========================================================= */

if (cakeBtn) {

    cakeBtn.addEventListener(
        "click",
        function () {

            const flame =
                document.querySelector(".flame");


            if (flame) {

                flame.style.animation = "none";

                flame.style.opacity = "0";

                flame.style.transform =
                    "translateY(-30px) scale(0)";

            }


            cakeBtn.textContent =
                "Wish Made! ✨";


            createConfetti(100);


            setTimeout(() => {

                showScreen(letterScreen);

            }, 1600);

        }
    );

}


/* =========================================================
   ENVELOPE
========================================================= */

if (envelope) {

    envelope.addEventListener(
        "click",
        openEnvelope
    );

}


function openEnvelope() {

    if (envelope.classList.contains("open")) {
        return;
    }


    envelope.classList.add("open");


    letterHint.textContent =
        "Your message is waiting ❤️";


    setTimeout(() => {

        openLetterBtn.classList.remove("hidden");

    }, 900);

}


/* =========================================================
   OPEN LETTER
========================================================= */

if (openLetterBtn) {

    openLetterBtn.addEventListener(
        "click",
        function () {

            showScreen(messageScreen);

            createHearts();

        }
    );

}


/* =========================================================
   SEND MESSAGE
========================================================= */

if (sendMessageBtn) {

    sendMessageBtn.addEventListener(
        "click",
        function () {

            createConfetti(150);

            createHearts();

            showScreen(finalScreen);

        }
    );

}


/* =========================================================
   REPLAY
========================================================= */

if (replayBtn) {

    replayBtn.addEventListener(
        "click",
        function () {

            resetWebsite();

        }
    );

}


function resetWebsite() {

    passwordInput.value = "";

    passwordError.style.display = "none";


    envelope.classList.remove("open");

    openLetterBtn.classList.add("hidden");


    letterHint.textContent =
        "Click the letter to open it";


    const flame =
        document.querySelector(".flame");


    if (flame) {

        flame.style.opacity = "1";

        flame.style.transform =
            "rotate(-45deg)";

        flame.style.animation =
            "flame 0.6s infinite alternate";

    }


    cakeBtn.textContent =
        "Blow The Candle 🕯️";


    /* Stop music on replay */

    if (birthdayMusic) {

        birthdayMusic.pause();

        birthdayMusic.currentTime = 0;

    }

    musicPlaying = false;

    if (musicBtn) {
        musicBtn.textContent = "🎵";
    }

    if (musicStatus) {
        musicStatus.textContent = "Click 🎵 to play";
    }


    showScreen(passwordScreen);

}


/* =========================================================
   🎵 MUSIC
========================================================= */


/*
   IMPORTANT:

   Your HTML must contain:

   <audio id="birthdayMusic" loop>
       <source src="music/birthday.mp3"
               type="audio/mpeg">
   </audio>

   Your project structure:

   Birthday/
   ├── index.html
   ├── style.css
   ├── script.js
   │
   └── music/
       └── birthday.mp3
*/


/* MUSIC BUTTON */

if (musicBtn) {

    musicBtn.addEventListener(
        "click",
        function () {

            if (musicPlaying) {

                pauseMusic();

            } else {

                playMusic();

            }

        }
    );

}


/* =========================================================
   PLAY MUSIC
========================================================= */

function playMusic() {

    if (!birthdayMusic) {

        console.error(
            "birthdayMusic audio element not found!"
        );

        return;

    }


    /*
       Volume:
       0.0 = mute
       0.5 = 50%
       1.0 = 100%
    */

    birthdayMusic.volume = 0.5;


    birthdayMusic
        .play()
        .then(() => {

            musicPlaying = true;


            if (musicBtn) {
                musicBtn.textContent = "🔊";
            }


            if (musicStatus) {
                musicStatus.textContent =
                    "Music playing";
            }

        })
        .catch((error) => {

            console.log(
                "Music autoplay blocked:",
                error
            );


            musicPlaying = false;


            if (musicBtn) {
                musicBtn.textContent = "🎵";
            }


            if (musicStatus) {

                musicStatus.textContent =
                    "Click 🎵 to play";

            }

        });

}


/* =========================================================
   PAUSE MUSIC
========================================================= */

function pauseMusic() {

    if (!birthdayMusic) {
        return;
    }


    birthdayMusic.pause();


    musicPlaying = false;


    if (musicBtn) {
        musicBtn.textContent = "🎵";
    }


    if (musicStatus) {

        musicStatus.textContent =
            "Music paused";

    }

}


/* =========================================================
   PHOTO SLIDER
========================================================= */

let currentPhoto = 0;


photoDots.forEach(dot => {

    dot.addEventListener(
        "click",
        function () {

            const index =
                Number(this.dataset.index);

            changePhoto(index);

        }
    );

});


function changePhoto(index) {

    if (!CONFIG.photos[index]) {
        return;
    }


    currentPhoto = index;


    mainPhoto.style.opacity = "0";


    setTimeout(() => {

        mainPhoto.src =
            CONFIG.photos[index];

        mainPhoto.style.opacity = "1";

    }, 250);


    photoDots.forEach(dot => {

        dot.classList.remove("active");

    });


    if (photoDots[index]) {

        photoDots[index].classList.add("active");

    }

}


/* =========================================================
   AUTO PHOTO SLIDER
========================================================= */

setInterval(() => {

    currentPhoto++;


    if (currentPhoto >= CONFIG.photos.length) {

        currentPhoto = 0;

    }


    changePhoto(currentPhoto);

}, 5000);


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHearts() {

    const container =
        document.getElementById("hearts");


    if (!container) {
        return;
    }


    const symbols = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "✨",
        "💞"

    ];


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            12 + Math.random() * 25 + "px";


        heart.style.animationDuration =
            5 + Math.random() * 6 + "s";


        heart.style.animationDelay =
            Math.random() * 3 + "s";


        container.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 12000);

    }

}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount = 80) {

    const container =
        document.getElementById("confetti");


    if (!container) {
        return;
    }


    const symbols = [

        "🎉",
        "✨",
        "❤️",
        "🎊",
        "💕",
        "⭐"

    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            10 + Math.random() * 18 + "px";


        piece.style.animationDuration =
            2 + Math.random() * 4 + "s";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


/* =========================================================
   INITIAL EFFECTS
========================================================= */

setTimeout(() => {

    createHearts();

}, 1500);


/* =========================================================
   PRELOAD PHOTOS
========================================================= */

CONFIG.photos.forEach(photo => {

    const img =
        new Image();

    img.src = photo;

});