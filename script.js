if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
} else {
  body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});