// script.js

// Highlight current year automatically in footer or education section
document.addEventListener("DOMContentLoaded", () => {
  const yearCells = document.querySelectorAll("table td");
  yearCells.forEach(cell => {
    if (cell.textContent.trim().toLowerCase() === "pursuing") {
      cell.style.color = "#6c5ce7";
      cell.style.fontWeight = "600";
    }
  });

  // Add smooth scroll to sections
  const links = document.querySelectorAll("header a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Show alert with contact info
  const contact = document.querySelector(".contact");
  contact.addEventListener("click", () => {
    alert("📞 Phone: 9573219389\n📧 Email: rohithaj63@gmail.com");
  });

  // Dark mode toggle button
  const btn = document.createElement("button");
  btn.textContent = "🌙 Toggle Dark Mode";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "8px 12px";
  btn.style.borderRadius = "8px";
  btn.style.border = "none";
  btn.style.background = "#6c5ce7";
  btn.style.color = "white";
  btn.style.cursor = "pointer";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

// Optional dark mode styles
const style = document.createElement("style");
style.textContent = `
  body.dark {
    background: #1e1e2f;
    color: #f4f4f9;
  }
  body.dark .container {
    background: #2b2b3c;
    color: #f4f4f9;
  }
  body.dark h2 {
    border-color: rgba(255,255,255,0.2);
  }
  body.dark table, 
  body.dark th, 
  body.dark td {
    border-color: rgba(255,255,255,0.2);
  }
`;
document.head.appendChild(style);
