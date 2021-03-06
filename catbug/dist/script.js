'use strict';

(function () {
  const layout = document.querySelector('#layout');
  const catbugWrapper = document.querySelector('.catbug-wrapper');
  const catbug = document.querySelector('.catbug');

  if (!layout || !catbugWrapper || !catbug) return;

  let coordsMouse = {
    left: 0,
    top: 0 };


  function moveCatbug(event) {
    if (event.pageX < coordsMouse.left) {
      catbug.classList.add('left');
    } else if (event.pageX > coordsMouse.left) {
      catbug.classList.remove('left');
    }

    coordsMouse = {
      left: event.pageX,
      top: event.pageY };


    catbugWrapper.style.left = `${coordsMouse.left}px`;
    catbugWrapper.style.top = `${coordsMouse.top}px`;
  }

  function moveToStartPosCatbug(event) {
    catbugWrapper.style.left = `50%`;
    catbugWrapper.style.top = `50%`;
  }

  layout.addEventListener('mousemove', moveCatbug);
  layout.addEventListener('mouseout', moveToStartPosCatbug);
})();
