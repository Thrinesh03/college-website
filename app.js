// ========== Scroll to Top Button ==========
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    ? "block"
    : "none";
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========== Modal Handling ==========
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("customModal");

if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// ========== Dark Mode Toggle ==========
const darkToggle = document.getElementById("darkModeToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ========== Tooltip Initialization ==========
const tooltips = document.querySelectorAll(".tooltip-custom");

tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseover", () => {
    const tip = tooltip.querySelector(".tooltip-text");
    if (tip) tip.style.visibility = "visible";
  });

  tooltip.addEventListener("mouseout", () => {
    const tip = tooltip.querySelector(".tooltip-text");
    if (tip) tip.style.visibility = "hidden";
  });
});

// ========== Loader Example (optional timeout) ==========
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000); // Adjust time as needed
  }
});
