let blocElt = document.querySelector("#line-line");
// console.dir(blocElt)
let windowSize = window.innerWidth
let backgroundElt = document.querySelector("#background-points-svg");
const cent = 100
const quatreVingtSix = 86.7177

window.addEventListener("resize", () => {
  location.reload();

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
  // console.log("background height " + backgroundElt.scrollHeight);
  // console.log("Background " + backgroundElt.style.width + "px")
  // console.dir(backgroundElt)
}
//
// Initial viewBox:  311.75 311.75 719 100
// Zoom X2:          25 25 50 50
// Zoom X4:          37.5 37.5 25 25
