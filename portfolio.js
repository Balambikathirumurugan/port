// Add hover effect for service boxes
document.addEventListener("DOMContentLoaded", function () {
    let serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            serviceBoxes.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });
});