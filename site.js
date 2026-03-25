const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const yearNode = document.querySelector("[data-year]");
const shaderFrame = document.querySelector(".hero-shader-frame");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (shaderFrame) {
  shaderFrame.addEventListener("load", () => {
    const target = shaderFrame.contentWindow;

    if (!target) {
      return;
    }

    target.postMessage({ type: "param", name: "FOLD_SPEED", value: 0.14 }, "*");
    target.postMessage({ type: "param", name: "LAYER_COUNT", value: 22 }, "*");
  });
}
