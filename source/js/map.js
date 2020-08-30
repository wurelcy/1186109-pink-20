var mapImg = document.querySelector(".map__image");
var mapIframe = document.querySelector(".map__iframe");

mapImg.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapImg.classList.remove("map__image--show");
  mapIframe.classList.add("map__iframe--show");
});
