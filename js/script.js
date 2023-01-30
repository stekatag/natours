"use strict";

/**
 * Background video fade animation:
 * Play the video and set a timeout to fade it out when the video has played.
 * @param e - the video element
 */
const playVideo = function (e) {
  e.play();
  e.classList.remove('bg-video__content--fading');

  setTimeout(() => {
    e.classList.add('bg-video__content--fading');
  }, (e.duration / e.playbackRate - 1) * 1000)
}

/* Closing the mobile navigation when a link is clicked. */
const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const navCheckbox = document.getElementById("navi-toggle");
    navCheckbox.checked = false;
  })
});