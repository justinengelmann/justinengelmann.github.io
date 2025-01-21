document.addEventListener('DOMContentLoaded', () => {
  const imageInputs = document.querySelectorAll('input[name="image"]');
  const resolutionInputs = document.querySelectorAll('input[name="resolution"]');
  const downscaleInputs = document.querySelectorAll('input[name="downscale"]');
  const upscaleInputs = document.querySelectorAll('input[name="upscale"]');
  const outputImage = document.getElementById('output-image');
  const imageCaption = document.getElementById('image-caption');

  function updateImage() {
    const image = document.querySelector('input[name="image"]:checked').value;
    const resolution = document.querySelector('input[name="resolution"]:checked').value;
    const downscale = document.querySelector('input[name="downscale"]:checked').value;
    const upscale = document.querySelector('input[name="upscale"]:checked').value;

    outputImage.src = `resolution/images/${image}_processed/${resolution}_${downscale}_${upscale}.png`;
    imageCaption.textContent = `${image.replace(/_/g, ' ')} | ${resolution}px | ${downscale} Downscale | ${upscale} Upscale`;
  }

  [imageInputs, resolutionInputs, downscaleInputs, upscaleInputs].forEach(group => {
    group.forEach(input => input.addEventListener('change', updateImage));
  });

  // Set default image
  updateImage();
});
