// toggling light/dark button for webpage theme

const toggleBtn = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
    const body = document.body;
    const isDark = body.classList.toggle("dark-theme");

    if (isDark) {
        body.classList.remove("bright-theme");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        body.classList.add("bright-theme");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    localStorage.setItem("theme", isDark ? "dark" : "bright");
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme") || "bright";
    document.body.classList.add(`${saved}-theme`);

    // Adjust icon on load
    const icon = document.getElementById("theme-icon");
    if (saved === "dark") {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});
