let dialogueIndex = 0;

const mochi = document.getElementById("mochi");
const bean = document.getElementById("bean");

const revealMochi = document.getElementById("revealMochi");
const revealBean = document.getElementById("revealBean");

// ----------------------------
// Change Screens
// ----------------------------

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    document
        .getElementById(id)
        .classList.add("active");

}

// ----------------------------
// Loading
// ----------------------------

window.onload = () => {

    setTimeout(() => {

        showScreen("intro");

        loadDialogue();

    }, 2500);

};

// ----------------------------
// Dialogue
// ----------------------------

function loadDialogue(){

    const current = introDialogue[dialogueIndex];


    document.getElementById("speaker").textContent =
        current.speaker;


    document.getElementById("dialogue").textContent =
        current.text;


    highlightSpeaker(current.speaker);

}

document
    .getElementById("nextDialogue")
    .addEventListener("click", () => {

        dialogueIndex++;

        if (dialogueIndex < introDialogue.length) {

            loadDialogue();

        } else {

            showScreen("nameScreen");

        }

    });

function highlightSpeaker(speaker, cat1 = mochi, cat2 = bean){

    if(!cat1 || !cat2) return;


    if(speaker === "Mochi"){

        cat1.classList.add("cat-speaking");
        cat1.classList.remove("cat-not-speaking");

        cat2.classList.add("cat-not-speaking");
        cat2.classList.remove("cat-speaking");

    }


    if(speaker === "Bean"){

        cat2.classList.add("cat-speaking");
        cat2.classList.remove("cat-not-speaking");

        cat1.classList.add("cat-not-speaking");
        cat1.classList.remove("cat-speaking");

    }

}

function highlightRevealSpeaker(speaker){

    highlightSpeaker(
        speaker,
        revealMochi,
        revealBean
    );

}


// ----------------------------
// Name Validation
// ----------------------------

document
    .getElementById("verifyName")
    .addEventListener("click", verifyName);

function verifyName() {

    const input = document
        .getElementById("nameInput")
        .value
        .trim();

    const message = document.getElementById("validationMessage");

    if (input === "") {

        message.textContent =
            "Bean: ...You have to tell us something.";

        return;
    }

    if (input.toLowerCase() === "ashley") {

        message.textContent =
            "Bean: Just Ashley? That's suspicious... Surely you have a full name.";

        return;
    }

    if (input.toLowerCase() === "ashley kyle") {

        message.textContent =
            "Bean: Hmm... closer. I feel like you're still hiding something.";

        return;
    }

    if (input.toLowerCase() === "ashley kyle celoso") {

        showScreen("catReveal");

        startReveal();

        return;
    }

    message.textContent =
        "Bean: Hmm... that doesn't match the name our owner gave us.";
}

let revealIndex = 0;

function startReveal() {

    revealIndex = 0;

    loadReveal();

}

function loadReveal() {

    const current = revealDialogue[revealIndex];


    document.getElementById("revealSpeaker").textContent =
        current.speaker;


    document.getElementById("revealDialogue").textContent =
        current.text;


    highlightRevealSpeaker(current.speaker);

}

document
    .getElementById("continueGift")
    .addEventListener("click", () => {

        revealIndex++;

        if (revealIndex < revealDialogue.length) {

            loadReveal();

        } else {

            showScreen("musicScreen");
// ----------------------------
// Music Screen
// ----------------------------

const music = document.getElementById("backgroundMusic");

document
    .getElementById("playMusic")
    .addEventListener("click", () => {

        music.play();

        showScreen("letterOne");

typeWriter(
    "letterOneContent",
    letterOne,
    15,
    "toLetterTwo"
);

    });

document
    .getElementById("skipMusic")
    .addEventListener("click", () => {

        showScreen("letterOne");

typeWriter(
    "letterOneContent",
    letterOne,
    15,
    "toLetterTwo"
);

    });
// ----------------------------
// Letter Navigation
// ----------------------------

document
    .getElementById("toLetterTwo")
    .addEventListener("click", () => {

        showScreen("letterTwo");

typeWriter(
    "letterTwoContent",
    letterTwo,
    15,
    "finishGift"
);

    });

document
    .getElementById("finishGift")
    .addEventListener("click", () => {

        showScreen("ending");

        confetti();

    });

function confetti(){

    for(let i = 0; i < 80; i++){


        const piece =
        document.createElement("div");


        piece.textContent =
        ["🎉","💜","🌸","✨"]
        [Math.floor(Math.random()*4)];


        piece.style.position="fixed";

        piece.style.left =
        Math.random()*100+"vw";


        piece.style.top =
        "-20px";


        piece.style.fontSize =
        "20px";


        piece.style.animation =
        "confettiFall 3s linear";


        document.body.appendChild(piece);



        setTimeout(()=>{

            piece.remove();

        },3000);


    }

}

// ----------------------------
// Restart
// ----------------------------

document
    .getElementById("restart")
    .addEventListener("click", () => {

        location.reload();

    });

        }

    });

// ----------------------------
// Fast Typewriter
// ----------------------------

function typeWriter(elementId, text, speed = 15, buttonId = null) {

    const element = document.getElementById(elementId);

    const button = buttonId
        ? document.getElementById(buttonId)
        : null;


    element.textContent = "";

    if(button){

        button.style.display = "none";

    }


    let index = 0;


    const timer = setInterval(() => {


        element.textContent += text.charAt(index);

        index++;


        if(index >= text.length){


            clearInterval(timer);


            if(button){

                button.style.display = "inline-block";

            }

        }


    }, speed);

}

// ----------------------------
// Floating Decorations
// ----------------------------

function createFloatingItem(type){

    const container = document.getElementById(type);

    const item = document.createElement("div");


    if(type === "floating-hearts"){

        item.textContent = "💜";

    }
    else {

        item.textContent = "🌸";

    }


    item.style.position = "absolute";

    item.style.left =
        Math.random() * 100 + "%";


    item.style.bottom = "-20px";


    item.style.fontSize =
        (Math.random() * 20 + 15) + "px";


    item.style.animation =
        "floatUp 5s linear";


    container.appendChild(item);


    setTimeout(() => {

        item.remove();

    },5000);

}


setInterval(() => {

    createFloatingItem("floating-hearts");

},1200);


setInterval(() => {

    createFloatingItem("floating-flowers");

},1800);