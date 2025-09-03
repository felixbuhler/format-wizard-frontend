export function copyOnClick(el: HTMLElement) {
  el.addEventListener("click", async () => {
    const text = el.getAttribute("data-copy");
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      el.classList.add("copied");
      el.textContent = `${text} ✓`; // Feedback

      setTimeout(() => {
        el.textContent = text + " mm"; // zurücksetzen
        el.classList.remove("copied");
      }, 1500);
    } catch (err) {
      console.error("Kopieren fehlgeschlagen:", err);
    }
  });
}
