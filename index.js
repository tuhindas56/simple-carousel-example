const prevBtn = document.querySelector(".btn-left")
const nextBtn = document.querySelector(".btn-right")
const slideBtns = Array.from(document.querySelectorAll("button[data-slideBtn]"))
const slides = document.querySelectorAll("img[data-slide]").length
let currentSlide = 0

prevBtn.addEventListener("click", () => switchSlide(-1))
nextBtn.addEventListener("click", () => switchSlide(1))

function toggleSlideVisibility(currentSlide) {
  const slide = document.querySelector(`img[data-slide="${currentSlide}"]`)
  slide.hidden = !slide.hidden
}

function currentSlideEvaluation(button) {
  currentSlide = button === -1 ? --currentSlide : ++currentSlide
  currentSlide =
    currentSlide > slides - 1
      ? 0
      : currentSlide < slides - slides
      ? 4
      : currentSlide
}

function switchSlide(button) {
  toggleSlideVisibility(currentSlide)
  currentSlideBtnHighlight(currentSlide)
  currentSlideEvaluation(button)
  toggleSlideVisibility(currentSlide)
  currentSlideBtnHighlight(currentSlide)
}

for (let button of slideBtns) {
  button.addEventListener("click", () => {
    if (currentSlide === +button.dataset.slidebtn) return
    toggleSlideVisibility(currentSlide)
    currentSlideBtnHighlight(currentSlide)
    currentSlide = +button.dataset.slidebtn
    toggleSlideVisibility(currentSlide)
    currentSlideBtnHighlight(currentSlide)
  })
}

function currentSlideBtnHighlight(currentSlide) {
  document
    .querySelector(`button[data-slidebtn="${currentSlide}"]`)
    .classList.toggle("fa-circle-dot")
  document
    .querySelector(`button[data-slidebtn="${currentSlide}"]`)
    .classList.toggle("fa-circle")
}

setInterval(() => switchSlide(1), 5000)
