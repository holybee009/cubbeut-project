const letStart = document.querySelector(".starting");
const servicing = document.querySelector(".services");
const main = document.querySelector("main");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const sign = document.querySelector(".sign-up");
// letStart.addEventListener("click", function () {
//   main.scrollIntoView({ behavior: "smooth", block: "start" });clear
// });
const addForm = function () {
  modal.style.visibility = "visible";
  form.style.visibility = "visible";
};
letStart.addEventListener("click", addForm);
modal.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  form.style.visibility = "hidden";
});
sign.addEventListener("click", addForm);
