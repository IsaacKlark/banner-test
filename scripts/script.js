"use strict"

let interval = 1;
let showVideo = false;

function showBanners() {
  setTimeout(() => {
    if (document.documentElement.clientWidth > 800) {
      document.body.style.backgroundImage = "url('images/start2.jpg')";
    }

    document.querySelector(".cup").style.display = "none";
    document.querySelector(".footer__left").style.display = "none";
    document.querySelector(".footer").style.justifyContent = "flex-end";
    document.querySelector(".footer").style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector(".second-page").style.display = "flex";
  }, 2000);

  setTimeout(() => {
    document.body.style.backgroundImage = "none";
    document.querySelector(".footer__left").style.display = "flex";
    document.querySelector(".footer").style.justifyContent = "space-between";
    document.querySelector(".second-page").style.display = "none";
    document.querySelector(".banner").style.display = "flex";
    document.querySelector(".footer").style.backgroundColor = "white";
    let intervals = setInterval(() => {
      if (interval >= 13) {
        clearInterval(intervals);
      }

      document.querySelector(`.image${interval}`).style.display = "none";
      interval++;
    }, 400);

    intervals;
  }, 4000);

  const bannerCloser = document.querySelector(".banner__close");
  bannerCloser.addEventListener('click', () => {
    document.querySelector(".banner").style.display = "none";
    document.body.style.backgroundImage = "url('images/start.jpg')";
    document.querySelector(".last-page").style.display = "flex";
  });

  const openCloseVideo = document.querySelector(".banner__open-video");
  openCloseVideo.addEventListener('click', () => {
    if (showVideo) {
      document.querySelector(".image14").style.display = "block";
      document.querySelector(".banner__video").style.display = "none";
      showVideo = false;
    } else {
      document.querySelector(".image14").style.display = "none";
      document.querySelector(".banner__video").style.display = "block";

      showVideo = true;
    }
  })

  const video = document.querySelector(".banner__video");
  video.addEventListener("playing", () => {
    document.querySelector(".banner__close").style.opacity = "1";
  });
}

document.addEventListener("DOMContentLoaded", showBanners);