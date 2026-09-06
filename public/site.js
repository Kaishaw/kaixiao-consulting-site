const progress = document.getElementById("progress");
const themeKey = "kaixiao-site-theme";
const themes = ["lemon", "chatfolio"];

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;
  if (progress) {
    progress.style.width = `${ratio * 100}%`;
  }
}

function getSavedTheme() {
  const saved = window.localStorage.getItem(themeKey);
  return themes.includes(saved) ? saved : "lemon";
}

function applyTheme(theme) {
  const nextTheme = themes.includes(theme) ? theme : "lemon";
  document.documentElement.dataset.theme = nextTheme;
  window.localStorage.setItem(themeKey, nextTheme);
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const isActive = button.dataset.themeChoice === nextTheme;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function buildThemeSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "theme-switcher";
  switcher.setAttribute("aria-label", "Theme switcher");

  const options = [
    { id: "lemon", label: "Lemon" },
    { id: "chatfolio", label: "Dark" },
  ];

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option.label;
    button.dataset.themeChoice = option.id;
    button.addEventListener("click", () => applyTheme(option.id));
    switcher.appendChild(button);
  });

  document.body.appendChild(switcher);
  applyTheme(getSavedTheme());
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
buildThemeSwitcher();
