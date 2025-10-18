const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.getElementById('close-btn');
const lightboxImage = document.getElementById('lightbox-image');


galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    // Set the lightbox image source to the clicked image
    lightboxImage.src = this.src.replace("-thumbnail", "");
    lightboxImage.alt = this.alt;
    
    // Display the lightbox by setting display to flex
    lightbox.style.display = 'flex';
  });
  });

closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
  
}); 

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
  }
});