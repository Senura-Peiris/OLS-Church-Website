// ===========================
// Language Switch
// ===========================
const titleElement = document.getElementById('church-title');
const englishText = `Our Lady Of Sorrows<br/>Church Ja-Ela`;
const sinhalaText = `වික්ෂෝප දේවමාතා දෙව්මැදුර <br/>ජාඇල`;
let isEnglish = true;

setInterval(() => {
  isEnglish = !isEnglish;
  if (titleElement) {
    titleElement.innerHTML = isEnglish ? englishText : sinhalaText;
  }
}, 6000);

// ===========================
// User Details Toggle
// ===========================
const userIcon = document.getElementById('userIcon');
if (userIcon) {
  userIcon.addEventListener('click', () => {
    userIcon.classList.toggle('show');
  });
}

// ===========================
// Music Toggle
// ===========================
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');

window.addEventListener('DOMContentLoaded', () => {
  const savedMusicState = localStorage.getItem('musicSwitch');
  const shouldPlay = savedMusicState === 'on';

  if (musicToggle) musicToggle.checked = shouldPlay;

  if (shouldPlay && backgroundMusic) {
    backgroundMusic.play().catch(() => {
      if (musicToggle) {
        musicToggle.checked = false;
        localStorage.setItem('musicSwitch', 'off');
      }

      document.body.addEventListener('click', () => {
        backgroundMusic.play().then(() => {
          if (musicToggle) musicToggle.checked = true;
          localStorage.setItem('musicSwitch', 'on');
        }).catch(() => {
          if (musicToggle) musicToggle.checked = false;
          localStorage.setItem('musicSwitch', 'off');
        });
      }, { once: true });
    });
  } else if (backgroundMusic) {
    backgroundMusic.pause();
  }
});

if (musicToggle) {
  musicToggle.addEventListener('change', () => {
    if (musicToggle.checked) {
      backgroundMusic.play().then(() => {
        localStorage.setItem('musicSwitch', 'on');
      }).catch(() => {
        musicToggle.checked = false;
        localStorage.setItem('musicSwitch', 'off');
      });
    } else {
      backgroundMusic.pause();
      localStorage.setItem('musicSwitch', 'off');
    }
  });
}

// ===========================
// Image Slider (Hero)
// ===========================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 6000);
}

// ===========================
// Priest Section Image Swap
// ===========================
const smallImages = document.querySelectorAll('.small-img');
const bigImage = document.querySelector('.priest-large-img');

if (smallImages.length > 0 && bigImage) {
  smallImages.forEach(img => {
    img.addEventListener('click', () => {
      smallImages.forEach(i => i.classList.remove('active'));
      img.classList.add('active');
      bigImage.src = img.dataset.large;
      bigImage.alt = img.alt;
    });
  });
}

// ===========================
// Special Moments Auto Slider
// ===========================
const mainMomentImage = document.getElementById('mainMomentImage');
const momentThumbnails = document.querySelectorAll('.thumb');
let currentMomentIndex = 0;

function showMoment(index) {
  momentThumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
  if (mainMomentImage && momentThumbnails[index]) {
    mainMomentImage.src = momentThumbnails[index].src;
    currentMomentIndex = index;
  }
}

if (momentThumbnails.length > 0) {
  momentThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      showMoment(index);
    });
  });

  setInterval(() => {
    const next = (currentMomentIndex + 1) % momentThumbnails.length;
    showMoment(next);
  }, 4000); // Every 4 seconds
}
