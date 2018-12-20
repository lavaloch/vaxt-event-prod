let blocElt = document.querySelector("#line-line");
console.dir(blocElt)
let windowSize = window.innerWidth
let backgroundElt = document.querySelector("#background-points-svg");
const cent = 100
const quatreVingtSix = 86.7177

window.addEventListener("resize", () => {
  setWidthOfSvgs()

})

window.addEventListener("load", () => {
  setWidthOfSvgs()
})

let setWidthOfSvgs = () => {
  console.log("resizing")
  blocElt.style.width = windowSize + "px";
  console.log("Bloc " + blocElt.style.width + "px")
  backgroundElt.style.width = windowSize + "px";
  backgroundElt.style.height = windowSize * quatreVingtSix / cent + "px";
  console.log("background height " + backgroundElt.scrollHeight);
  console.log("Background " + backgroundElt.style.width + "px")
  console.dir(backgroundElt)
}
