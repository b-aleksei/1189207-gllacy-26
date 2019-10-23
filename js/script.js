let link = document.querySelector('.feedback-open');
let popup = document.querySelector('.feedback');
let section_form = document.querySelector('.feedback__body');
let close = popup.querySelector('.feedback__close');
let form = popup.querySelector(".feedback__form");
let login = popup.querySelector("[name=username]");
let email = popup.querySelector("[name=my-email]");
let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-block");
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-block");
    section_form.classList.remove("form-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        section_form.classList.remove("form-error");
        // noinspection SillyAssignmentJS
        section_form.offsetWidth = section_form.offsetWidth;
        section_form.classList.add("form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});
