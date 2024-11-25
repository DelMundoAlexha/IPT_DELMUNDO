
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        
        const lightboxes = document.querySelectorAll(".lightbox:target");
        lightboxes.forEach(lightbox => {
            window.location.hash = "";
        });
    }
});

const images = document.querySelectorAll(".image-gallery img");
images.forEach((img) => {
    img.addEventListener("click", () => {
        console.log(`User clicked on ${img.alt}`);
    });
});
