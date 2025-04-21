const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

const closeBtn = document.createElement("div");
closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "X";
navLinks.appendChild(closeBtn);

hamburger.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  event.stopPropagation();
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

// Click ngoài menu cũng đóng
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  }
});

navLinks.addEventListener("click", (event) => {
  event.stopPropagation();
});
// Ẩn nav khi chuyển sang PC
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");

    // RESET transform nếu bị kẹt ở chế độ mobile
    navLinks.style.transform = "";
    navLinks.style.opacity = "";
    navLinks.style.pointerEvents = "";
  }
});




// Animation cho services
function showTab(tabId) {
    
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}



// Animation cho service-process 
const stepBoxes = document.querySelectorAll('.step-box');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
}, { threshold: 0.1 });

stepBoxes.forEach(box => {
    box.style.animationPlayState = 'paused';
    observer.observe(box);
});





