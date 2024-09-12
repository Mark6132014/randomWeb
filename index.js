var websites = [
    "https://puginarug.com/",
    "https://sliding.toys/mystic-square/8-puzzle/daily/",
    "https://alwaysjudgeabookbyitscover.com/",
    "https://checkbox.toys/scale/",
    "https://clicking.toys/flip-grid/neat-nine/3-holes/",
    "https://longdogechallenge.com/",
    "https://memory.toys/classic/easy/",
    "https://binarypiano.com/",
    "https://paint.toys/",
    "https://mondrianandme.com/",
    "https://floatingqrcode.com/",
    "https://onesquareminesweeper.com/",
    "https://weirdorconfusing.com/",
    "https://cursoreffects.com/",
    "http://www.staggeringbeauty.com/",
    "https://cant-not-tweet-this.com/",
    "http://corndog.io/",
    "https://jacksonpollock.org/",
    "http://endless.horse/",
    "https://thatsthefinger.com/",
    "https://eelslap.com/",
    "http://www.republiquedesmangues.fr/",
    "https://heeeeeeeey.com/",
    "https://hooooooooo.com/",
    "https://sliding.toys/klotski/easy-street/",
    "https://drawing.garden/",
    "https://smashthewalls.com/",
    "https://paint.toys/calligram/"
];
document.querySelector("#randomWebsite").addEventListener("click", () => {
    let randomWebsite = window.open(websites[Math.floor(Math.random()*websites.length)], "blank");
    randomWebsite.focus();
    randomWebsite.addEventListener("open", () => {
        randomWebsite.focus();
        setTimeout(() => {
            randomWebsite.open(websites[Math.floor(Math.random()*websites.length)]);
        }, 2000);
    });
});
window.addEventListener("scroll", () => {
    if (window.scrollY >= 140) {
        document.querySelector("#randomWebsite").style.width = "98%";
        document.querySelector("#randomWebsite").style.position = "fixed";
        document.querySelector("#randomWebsite").style.top = "8px";
        document.querySelector("#randomWebsite").style.left = "0";
    } else {
        document.querySelector("#randomWebsite").style.width = "400px";
        document.querySelector("#randomWebsite").style.position = "relative";
        document.querySelector("#randomWebsite").style.top = "";
        document.querySelector("#randomWebsite").style.left = "";
    }
});
document.querySelector("#likeTheWebsite").addEventListener("click", () => {
    document.querySelector("#likeTheWebsite").style.background = "lightgrey";
    document.querySelector("#likeTheWebsite").style.cursor = "not-allowed";
    document.querySelector("#likeTheWebsite").style.color = "black";
    document.querySelector("#likeTheWebsite").innerHTML = "Liked Website";
});
document.querySelector("#copyShare").addEventListener("click", () => {
    document.querySelector("#copyShare").style.background = "lightgrey";
    document.querySelector("#copyShare").style.cursor = "not-allowed";
    document.querySelector("#copyShare").style.color = "black";
    document.querySelector("#copyShare").innerHTML = "Copied link to share";
    navigator.clipboard.writeText(location.href);
    setTimeout(() => {
        document.querySelector("#copyShare").style.background = "rgb(32, 54, 161)";
        document.querySelector("#copyShare").style.cursor = "pointer";
        document.querySelector("#copyShare").style.color = "white";
        document.querySelector("#copyShare").innerHTML = "Share";
    }, 5000);
});
