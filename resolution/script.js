const IMAGE_CONFIG = {
    'FundusImage_1': {
        name: 'Colour fundus image',
        description: 'A macular-centred colour fundus image from the iChallenge GAMMA dataset.',
        maxResolution: 1024
    },
    'OCT_bscan_1': {
        name: 'OCT B-scan',
        description: 'A OCT B-scan without pathology from the Choroidalyzer Github repo.',
        maxResolution: 768
    }
};

function updateResolutionOptions(imageKey) {
    const maxRes = IMAGE_CONFIG[imageKey].maxResolution;
    const resolutions = [32, 64, 128, 256, 512, 768, 1024].filter(res => res <= maxRes);

    const container = document.querySelector('.resolution-options');
    container.innerHTML = resolutions
        .map(res => `<button class="option-button${res === maxRes ? ' active' : ''}" 
            data-group="resolution" data-value="${res}">${res}px</button>`)
        .join('');

    // Re-attach event listeners to new resolution buttons
    container.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

function updateImage() {
    const selectedImage = document.querySelector('.option-button[data-group="image"].active').dataset.value;
    const selectedResolution = document.querySelector('.option-button[data-group="resolution"].active').dataset.value;
    const downscale = document.querySelector('.option-button[data-group="downscale"].active').dataset.value;
    const upscale = document.querySelector('.option-button[data-group="upscale"].active').dataset.value;

    const outputImage = document.getElementById('output-image');
    const imageCaption = document.getElementById('image-caption');
    const imageDescription = document.getElementById('image-description');

    outputImage.src = `resolution/images/${selectedImage}_processed/${selectedImage}_${selectedResolution}_${downscale}_${upscale}.png`;
    imageCaption.textContent = `${selectedImage.replace(/_/g, ' ')} | ${selectedResolution}px | Downscale: ${downscale} | Upscale: ${upscale}`;
    imageDescription.textContent = IMAGE_CONFIG[selectedImage].description;
}

function handleButtonClick() {
    const group = this.dataset.group;
    document.querySelectorAll(`.option-button[data-group="${group}"]`)
        .forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    updateImage();
}

// Initial setup
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

document.querySelectorAll('.option-button[data-group="image"]').forEach(button => {
    button.addEventListener('click', function() {
        updateResolutionOptions(this.dataset.value);
    });
});

document.querySelector('#advanced-button').addEventListener('click', function() {
    const advancedSection = document.getElementById('advanced-controls');
    const isHidden = advancedSection.style.display === 'none';
    advancedSection.style.display = isHidden ? 'block' : 'none';
    this.textContent = `Advanced ${isHidden ? '▼' : '▶'}`;
});

// Initialize the UI
updateResolutionOptions('FundusImage_1');
updateImage();