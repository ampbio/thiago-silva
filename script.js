(function () {
  'use strict';

  function openModal() {
    var overlay = document.getElementById('modalOverlay');
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var overlay = document.getElementById('modalOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  var openBtn = document.getElementById('openModalBtn');
  if (openBtn) { openBtn.addEventListener('click', openModal); }

  var closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) { closeBtn.addEventListener('click', closeModal); }

  var overlayEl = document.getElementById('modalOverlay');
  if (overlayEl) {
    overlayEl.addEventListener('click', function (e) {
      if (e.target === overlayEl) { closeModal(); }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeModal(); }
  });

  var marqueeBox = document.getElementById('marqueeBox');
  var marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeBox && marqueeTrack) {
    marqueeBox.addEventListener('click', function () {
      marqueeTrack.classList.toggle('paused');
    });
  }

  // fallback visual for gallery photos that aren't uploaded yet
  var mqImages = document.querySelectorAll('.mq-item img');
  mqImages.forEach(function (img) {
    img.addEventListener('error', function () {
      img.parentElement.classList.add('empty');
    });
  });
})();
