const progress = document.getElementById("progress");

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;
  progress.style.width = `${ratio * 100}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
