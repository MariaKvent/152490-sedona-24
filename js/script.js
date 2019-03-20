var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var arrive = form.querySelector("[name=arrive]");
var departure = form.querySelector("[name=departure]");
var adults = form.querySelector("[name=adults]");
var kids = form.querySelector("[name=kids]");


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
