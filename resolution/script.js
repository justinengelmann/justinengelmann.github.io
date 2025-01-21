document.addEventListener("DOMContentLoaded", () => {
  const imageSelect = document.getElementById("image-select");
  const resolutionSelect = document.getElementById("resolution-select");
  const downscaleSelect = document.getElementById("downscale-select");
  const upscaleSelect = document.getElementById("upscale-select");
  const outputImage = document.getElementById("output-image");
  const imageCaption = document.getElementById("image-caption");

  function updateImage() {
    const image = imageSelect.value;
    const resolution = resolutionSelect.value;
    const downscale = downscaleSelect.value;

    // Update image source
    outputImage.src = `images/${image}/${resolution}_${downscale}.png`;

    // Update caption
    imageCaption.textContent = `${image.replace(/([A-Z])/g, ' $1')} | ${resolution}px | ${downscale} Downscale`;
  }

  [imageSelect, resolutionSelect, downscaleSelect, upscaleSelect].forEach(el => {
    el.addEventListener("change", updateImage);
  });

  // Initialize with default
  updateImage();
});
