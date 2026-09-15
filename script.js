document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(data.get("subject") || "Website enquiry - Axel Nikea LLP");
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone") || "Not provided"}

Message:
${data.get("message")}`
  );
  window.location.href = `mailto:sanney@axelnikea.com?subject=${subject}&body=${body}`;
});
