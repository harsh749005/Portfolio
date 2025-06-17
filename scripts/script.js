const text = document.querySelector('.text-circle p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElemwnts = document.querySelectorAll(".hidden");
hiddenElemwnts.forEach((el) => observer.observe(el));

function downloadFile() {
    window.open("pdf/ResumeHarshPatel.pdf");
}

window.addEventListener("mousemove", cursor);
var mouseCursor = document.querySelector(".cursor");
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

var right = document.querySelector(".mid-sub1-div2-heading2>span");
right.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow");
})
right.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-grow");
})


var circle = document.querySelector(".circle");
circle.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow");
})
circle.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-grow");
})
