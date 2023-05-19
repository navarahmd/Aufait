const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar-sec nav'),
    toggle = body.querySelector(".sidebar-sec .toggle"),
    modeText = body.querySelector(".sidebar-sec .mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

