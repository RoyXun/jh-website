function featureHover() {
  const features = document.querySelectorAll("#features > li");

  features.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      features.forEach((li) => {
        li.classList[li === item ? "add" : "remove"]("active");
      });
    });
  });
}

const toTopBtn = document.getElementById("toTop");
const SCROLL_THRESHOLD = 600;

function toggleToTopBtnClass() {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop >= SCROLL_THRESHOLD) {
    toTopBtn.classList.remove("hidden");
  } else {
    toTopBtn.classList.add("hidden");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  featureHover();
  window.addEventListener("scroll", toggleToTopBtnClass);
  toggleToTopBtnClass();
});
