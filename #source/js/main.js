let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");