let showSkillsBtn = document.getElementById("showSkillsBtn");
if (showSkillsBtn) {
    showSkillsBtn.addEventListener("click", function () {
        let skillsSection = document.getElementById("skills");
        skillsSection.style.display = "block";
    });
}

let menuBtn = document.getElementById("menuBtn");
let navigation = document.getElementById("navigation");
if (menuBtn && navigation) {
    menuBtn.addEventListener("click", function () {
        navigation.classList.toggle("show");
    });
}
