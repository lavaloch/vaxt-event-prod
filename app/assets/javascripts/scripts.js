let vernissageAnnounceElt = document.querySelector("#vernissage-announce");
let detailsExpositionElt = document.querySelector("#details-exposition");
//detailsExpositionElt.style.display = "none"
let detailsShowed = false
let backgroundSvgElt = document.querySelector("#background-points-svg");
//console.dir(backgroundSvgElt.attributes.transform.value)
console.dir(vernissageAnnounceElt.style.display)
console.dir(detailsExpositionElt.style.display)

window.setInterval(function(){
  if (detailsShowed == true) {
    detailsExpositionElt.style.display = "none"
    vernissageAnnounceElt.style.display = "block"
    console.log("#vernissage-anounce - display :" + vernissageAnnounceElt.style.display)
    console.log("#details-exposition - display :" + detailsExpositionElt.style.display)
    detailsShowed = false
  } else {
    detailsExpositionElt.style.display = "block"
    vernissageAnnounceElt.style.display = "none"
    console.log("#vernissage-anounce - display :" + vernissageAnnounceElt.style.display)
    console.log("#details-exposition - display :" + detailsExpositionElt.style.display)
    detailsShowed = true
  }
}, 3000);

