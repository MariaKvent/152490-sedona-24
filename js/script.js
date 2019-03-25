var window = document.querySelector(".container");
var mappic = document.querySelector(".map-pic");
var map = document.querySelector(".map-hidden");
var iframe = document.querySelector(".map-hidden");
var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var arrive = form.querySelector("[name=arrive]");
var departure = form.querySelector("[name=departure]");
var adults = form.querySelector("[name=adults]");
var kids = form.querySelector("[name=kids]");

window.addEventListener("load", function (evt) {
  evt.preventDefault();
  form.classList.add("form-hidden");
  mappic.classList.add("map-pic-hidden");
  map.classList.remove("map-hidden");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
  form.classList.remove("form-error");
  arrive.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrive.value || !departure.value || !adults.value || !kids.value) {
  evt.preventDefault();
  form.classList.remove("form-error");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("form-error");
  }
});
