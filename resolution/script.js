document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function () {
        const group = this.dataset.group;

        // Remove 'active' class from all buttons in the same group
        document.querySelectorAll(`.option-button[data-group="${group}"]`).forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Update the image based on the selection
        updateImage();
    });
});

function updateImage() {
    const selectedImage = document.querySelector('.option-button[data-group="image"].active').dataset.value;
    const selectedResolution = document.querySelector('.option-button[data-group="resolution"].active').dataset.value;

    const outputImage = document.getElementById('output-image');
    const imageCaption = document.getElementById('image-caption');

    // Update the image source and caption
    outputImage.src = `resolution/images/${selectedImage}_processed/${selectedImage}_${selectedResolution}_antialias_antialias.png`;
    imageCaption.textContent = `${selectedImage.replace(/_/g, ' ')} | ${selectedResolution}px | Bilinear Downscale | Bilinear Upscale`;
}

// Initialize the default image
updateImage();
