

/* ===========================================
   🎮 Filter Tabs (Article / Works)
=========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-button, .tab");
  const cards = document.querySelectorAll(".content-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // アクティブ状態の切替
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.category?.toLowerCase() || "all";

      cards.forEach(card => {
        const category = card.dataset.category?.toLowerCase() || "";

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          card.classList.add("fade-in");
          card.classList.remove("fade-out");
        } else {
          card.classList.remove("fade-out");
          setTimeout(() => (card.style.display = "none"), 250);
        }
      });
    });
  });
});

/* ===========================================
   🧩 コードブロック コピー機能
=========================================== */
function copyCode(button) {
  const codeBlock = button.closest(".code-block");
  if (!codeBlock) return;

  const code = codeBlock.querySelector("pre").innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "✓ Copied!";
    button.style.color = "var(--accent-blue)";
    setTimeout(() => {
      button.innerText = "📋";
      button.style.color = "";
    }, 1500);
  }).catch(err => {
    console.error("コピー失敗:", err);
  });
}


