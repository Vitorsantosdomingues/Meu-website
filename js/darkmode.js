const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const linkedin = document.querySelector("div#linkedin")
const behance = document.querySelector("div#behance")
const github = document.querySelector("div#github")
const instagram = document.querySelector("div#instagram")
const logoMenu = document.querySelector("div#logoMenu")
const logoHome = document.querySelector("div#logoHome")

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    secondtittle: getStyle(html, "--secondtittle"),
    maintittle: getStyle(html, "--maintittle"),
    bgcolor: getStyle(html, "--bgcolor"),
    linkcolor: getStyle(html, "--linkcolor"),
    linkhover: getStyle(html, "--linkhover"),
    linkhoverincontainer: getStyle(html, "--linkhoverincontainer"), 
    containerlinkhover: getStyle(html, "--containerlinkhover"),
    textcolornopanel: getStyle(html, "--textcolornopanel"),
    textcolorwithpanel: getStyle(html, "--textcolorwithpanel")
}

const darkMode = {
    secondtittle: "#e5e5e5",
    maintittle: "#f77f00",
    bgcolor: "#001122",
    linkcolor: "#e5e5e5",
    linkhover: "#e5e5e5",
    linkhoverincontainer: "#001122",
    containerlinkhover: "#e5e5e5",
    textcolornopanel: "#e5e5e5",
    textcolorwithpanel: "#001122"
}

const transformkey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformkey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
    
    if(target.checked){ //darkmode
        github.classList.add('dark')
        instagram.classList.add('dark')
        behance.classList.add('dark')
        linkedin.classList.add('dark')
        logoMenu.classList.add('dark')
        logoHome.classList.add('dark')
    } else {
        github.classList.remove('dark')
        instagram.classList.remove('dark')
        behance.classList.remove('dark')
        linkedin.classList.remove('dark')
        logoMenu.classList.remove('dark')
        logoHome.classList.remove('dark')
    }
})