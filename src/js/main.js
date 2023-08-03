// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";


// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});



// Simple js method to provide drag scroll to symptoms container
// Can be replaced with better npm package
let pos = { top: 0, left: 0, x: 0, y: 0 };
const ele = document.getElementById('drag-scroll-container');


const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = (e.clientX || e.touches[0].clientX) - pos.x || 0;
  const dy = (e.clientY || e.touches[0].clientY) - pos.y || 0;

  // Scroll the element
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('touchmove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler);
  document.addEventListener('touchend', mouseUpHandler)

  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};

ele.onmousedown=ele.ontouchstart=function (e) {

  pos = {
      // The current scroll
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: (e.clientX || e.touches[0].clientX),
      y: (e.clientY || e.touches[0].clientY),
  };

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('touchmove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler);
  document.addEventListener('touchend', mouseUpHandler)

};