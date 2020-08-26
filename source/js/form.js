var popups = document.querySelectorAll(".pop-up");

var submit = document.querySelector(".contest-form__submit");
var successPopup = document.querySelector(".modal-success");
var failurePopup = document.querySelector(".modal-failure");
var successClose = document.querySelector(".modal-success__close-btn");
var failureClose = document.querySelector(".modal-failure__close-btn");
var name = document.getElementById("your-name");
var lastName = document.getElementById("your-last-name");
var email = document.getElementById("your-email");

submit.addEventListener("click", function (evt) {
  if (!name.value || !email.value || !lastName.value) {
    evt.preventDefault();
    failurePopup.classList.add("pop-up--show");
  }
  else {
    evt.preventDefault();
    successPopup.classList.add("pop-up--show");
  }
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("pop-up--show");
});

failureClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  failurePopup.classList.remove("pop-up--show");
});

/*Esc*/

popups.forEach(function(popup){
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("pop-up--show")) {
        evt.preventDefault();
        popup.classList.remove("pop-up--show");
      }
    }
  });
});
