const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const linkedin = document.querySelector("div#linkedin");
const behance = document.querySelector("div#behance");
const github = document.querySelector("div#github");
const instagram = document.querySelector("div#instagram");
const logoMenu = document.querySelector("div#logoMenu");
const logoHome = document.querySelector("div#logoHome");
const gato = document.querySelector("div#gato")

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  secondtittle: getStyle(html, "--secondtittle"),
  maintittle: getStyle(html, "--maintittle"),
  bgcolor: getStyle(html, "--bgcolor"),
  linkcolorincontainer: getStyle(html, "--linkcolorincontainer"),
  linkcolor: getStyle(html, "--linkcolor"),
  linkhover: getStyle(html, "--linkhover"),
  linkhoverincontainer: getStyle(html, "--linkhoverincontainer"),
  containerlinkhover: getStyle(html, "--containerlinkhover"),
  textcolornopanel: getStyle(html, "--textcolornopanel"),
  textcolorwithpanel: getStyle(html, "--textcolorwithpanel"),
};

const darkMode = {
  secondtittle: "#e5e5e5",
  maintittle: "#f77f00",
  bgcolor: "#001122",
  linkcolor: "#e5e5e5",
  linkcolorincontainer: "#001122",
  linkhover: "#e5e5e5",
  linkhoverincontainer: "#001122",
  containerlinkhover: "#e5e5e5",
  textcolornopanel: "#e5e5e5",
  textcolorwithpanel: "#001122",
};

const transformkey = (key) => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) => html.style.setProperty(transformkey(key), colors[key]));
};

// Verificar a preferência do dark mode no carregamento da página
document.addEventListener("DOMContentLoaded", function () {
  var darkModeEnabled = localStorage.getItem("darkmode");
  if (darkModeEnabled === "true") {
    checkbox.checked = true;
    changeColors(darkMode);
    enableDarkMode();
  }
});

const enableDarkMode = () => {
  github.classList.add("dark");
  instagram.classList.add("dark");
  behance.classList.add("dark");
  linkedin.classList.add("dark");
  logoMenu.classList.add("dark");
  logoHome.classList.add("dark");
  gato.classList.add("dark")
};

const disableDarkMode = () => {
  github.classList.remove("dark");
  instagram.classList.remove("dark");
  behance.classList.remove("dark");
  linkedin.classList.remove("dark");
  logoMenu.classList.remove("dark");
  logoHome.classList.remove("dark");
  gato.classList.remove("dark")
};

checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    changeColors(darkMode);
    enableDarkMode();
    localStorage.setItem("darkmode", "true");
  } else {
    changeColors(initialColors);
    disableDarkMode();
    localStorage.setItem("darkmode", "false");
  }
});
