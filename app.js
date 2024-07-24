const quotesText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
SoundBtn = document.querySelector(".sound");
CopyBtn = document.querySelector(".copy");
FaceBookBtn = document.querySelector(".facebook");

function getQuote() {
    quoteBtn.innerText = "Loading...";
console.log("clicked");

fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result);
    quotesText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quotesBtn.classList.remove("loading...");
});
}

SoundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quotesText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

CopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quotesText.innerText);
});

FaceBookBtn.addEventListener("click", () => {
    let url = `https://www.facebook.com/sharer/sharer.php?u=${quotesText.innerText}`;
    window.open(url, "_blank");
});

quoteBtn.addEventListener("click", getQuote);