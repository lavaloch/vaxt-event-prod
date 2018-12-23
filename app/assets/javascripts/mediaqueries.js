let blocElt = document.querySelector("#line-line");
// console.dir(blocElt)
let windowSize = window.innerWidth
let backgroundElt = document.querySelector("#background-points-svg");
const cent = 100
const quatreVingtSix = 86.7177
const quatreCentQuaranteSix = 446
const deuxCentQuatreVingt = 280

let mapElt = document.querySelector(".map-button");
let shadowMapElt = document.querySelector(".shadow-map");
let wrapperElt = document.querySelector(".wrapper");
console.dir(mapElt)

let backgroundMobile1 = document.querySelector(".image-bg-mobile")
let textWorkshopElt = document.querySelector("#text-workshop")
let blocEnSAvoirPlusElt = document.querySelector(".bloc-en-savoir-plus")


window.addEventListener("resize", () => {
  setWidthOfSvgs()
})

window.addEventListener("load", () => {
  setWidthOfSvgs()
  // console.dir(backgroundElt)
  // backgroundElt.viewBox.animVal.height = 719;
  // backgroundElt.viewBox.animVal.width = 719;
  // backgroundElt.viewBox.animVal.x = 311.75;
  // backgroundElt.viewBox.animVal.y = 311.75;
})

let setWidthOfSvgs = () => {
  // console.log("resizing")
  blocElt.style.width = windowSize + "px";
  // console.log("Bloc " + blocElt.style.width + "px")
  backgroundElt.style.width = windowSize + "px";
  backgroundElt.style.height = windowSize * quatreVingtSix / cent + "px";
  console.log(windowSize, mapElt)
  console.dir(backgroundMobile1)
  console.dir(backgroundMobile1)
  if (windowSize < 900) {
    backgroundMobile1.style.width = windowSize +"px";
    backgroundMobile1.style.height = windowSize +"px";
    wrapperElt.style.width = "100%"
    wrapperElt.style.paddingTop = "0px"
    mapElt.style.width = windowSize + "px"
    mapElt.style.height = windowSize * deuxCentQuatreVingt / quatreCentQuaranteSix +"px";
  }
  if (windowSize < 500) {
    console.dir(blocEnSAvoirPlusElt)
    blocEnSAvoirPlusElt.style.width= windowSize + "px"
  }
  if (windowSize < 400) {
    console.log(textWorkshopElt)
    textWorkshopElt.style.width = "250px"
    textWorkshopElt.style.height = "57.8px"
  }
  // console.log("background height " + backgroundElt.scrollHeight);
  // console.log("Background " + backgroundElt.style.width + "px")
  // console.dir(backgroundElt)
}
//
// Initial viewBox:  311.75 311.75 719 100
// Zoom X2:          25 25 50 50
// Zoom X4:          37.5 37.5 25 25
