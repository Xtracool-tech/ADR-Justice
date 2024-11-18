

function toggleMenu(icon) {
    icon.classList.toggle('open');
    document.querySelector('.nav-items').classList.toggle('show');
}


function showServiceText(serviceId) {
    // Hide all service text elements
    document.querySelectorAll('.service-text').forEach(text => {
        text.classList.remove('active');
    });
    
    // Show the selected service text
    const selectedServiceText = document.getElementById(serviceId);
    if (selectedServiceText) {
        selectedServiceText.classList.add('active');
    }
}

// Make the WhatsApp button draggable
const whatsappBtn = document.getElementById("whatsapp-btn");

let isDragging = false;
let offsetX, offsetY;

function startDrag(e) {
  isDragging = true;
  const rect = whatsappBtn.getBoundingClientRect();
  
  // Determine offset for mouse or touch
  if (e.type === "mousedown") {
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  } else if (e.type === "touchstart") {
    offsetX = e.touches[0].clientX - rect.left;
    offsetY = e.touches[0].clientY - rect.top;
  }

  whatsappBtn.style.cursor = "grabbing"; // Change cursor to grabbing
}

function performDrag(e) {
  if (!isDragging) return;

  let clientX, clientY;

  // Get coordinates for mouse or touch
  if (e.type === "mousemove") {
    clientX = e.clientX;
    clientY = e.clientY;
  } else if (e.type === "touchmove") {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  }

  // Update button position
  whatsappBtn.style.left = `${clientX - offsetX}px`;
  whatsappBtn.style.top = `${clientY - offsetY}px`;
  whatsappBtn.style.right = "auto"; // Remove fixed right offset
  whatsappBtn.style.bottom = "auto"; // Remove fixed bottom offset
}

function endDrag() {
  isDragging = false;
  whatsappBtn.style.cursor = "grab"; // Reset cursor
}

// Mouse events
whatsappBtn.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", performDrag);
document.addEventListener("mouseup", endDrag);

// Touch events
whatsappBtn.addEventListener("touchstart", startDrag);
document.addEventListener("touchmove", performDrag);
document.addEventListener("touchend", endDrag);