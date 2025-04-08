
// 🍔 Sidebar toggle
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

// auto update year

//Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();