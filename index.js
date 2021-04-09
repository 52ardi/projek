function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var lightHead = document.getElementById("body").className === "header";
  console.log(lightHead);
  if (lightHead) {
    document.getElementById("medsos").className = "header-dark-mode";
  } else if (!lightHead) {
    document.getElementById("container").className = "medsos";
  }
}
