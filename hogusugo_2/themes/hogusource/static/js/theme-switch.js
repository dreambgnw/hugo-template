document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;

  // On page load, check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark-theme");
  } else {
    html.classList.remove("dark-theme");
  }

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark-theme");
    // Save the new preference
    if (html.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
