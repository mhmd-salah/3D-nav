// hello mohamed salah

let container = document.querySelector(".page-container")
let pages  = document.querySelectorAll(".page")
let toggleBtn = document.querySelector(".toggle-btn")
let ul = document.querySelector(".nav-list")
let overlay = document.querySelector(".overlay") as HTMLElement
let links = document.querySelectorAll(".link")

let pageIndex = 0;

toggleBtn?.addEventListener("click", (e) => {
    toggleBtn!.classList.toggle("active")
    container?.classList.toggle("active")
    ul?.classList.toggle("show")
});

links.forEach((link,i) => {
    link.addEventListener("click", () => {
        nextPage(i)
    })
});

function nextPage (index:number) {
    overlay!.style.animation = "slid 1s linear 1";

    setTimeout(() => {
        pages[pageIndex].classList.remove("active")
        pages[index].classList.add("active")
        pageIndex = index;
    }, 500)

    setTimeout(() => {
        overlay.style.animation = "";
    }, 1000)
    
}
