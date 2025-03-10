document.addEventListener("DOMContentLoaded", function () {
    const text = ["Web Developer", "UI/UX Designer", "Software Engineer"];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");

    function type() {
        if (charIndex < text[index].length) {
            typingElement.innerHTML += text[index][charIndex];
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.innerHTML = text[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            index = (index + 1) % text.length;
            setTimeout(type, 500);
        }
    }

    type();
});