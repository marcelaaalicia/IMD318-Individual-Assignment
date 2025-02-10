function toggleMenu() {
  const menu = document.querySelector(".hamburger_menu_links");
  const icon = document.querySelector(".hamburger_menu_icon");
  const link = document.querySelector("li");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  link.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello there, I'm";
  const speed = 150; // Typing speed in milliseconds
  let index = 0;
  const typewriterElement = document.getElementById("typewriter");

  function typeWriter() {
      if (index < text.length) {
          typewriterElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, speed);
      } else {
          typewriterElement.classList.remove("border-right");
      }
  }

  typeWriter();
});

function updateDateTime() {
  const dateTimeElement = document.getElementById('date-time');
  const now = new Date();
  const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
  };
  dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();
