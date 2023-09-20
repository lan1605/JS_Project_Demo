const btnShow = document.querySelector(".btn-show"),
  bottomSheet = document.querySelector(".bottom-sheet"),
  sheetOverlay = document.querySelector(".sheet-overlay"),
  bottomSheetContent = document.querySelector(".content"),
  dragIcon = document.querySelector(".drag-icon");

let isDragging = false,
  startY,
  startHeight;

const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  btnShow.classList.remove("click");
  bottomSheetContent.classList.add("active");
};
const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
  btnShow.classList.add("click");
  bottomSheetContent.classList.remove("active");
};

function updateSheetHeight(height) {
  bottomSheetContent.style.height = `${height}vh`;
  bottomSheetContent.classList.toggle("fullscreen", height === 100);
}
function dragging(e) {
  if (!isDragging) return;
  const delta = startY - (e.pageY || e.touches?.[0].pageY),
    newHetght = startHeight + (delta / window.innerHeight) * 100;
  bottomSheetContent.style.height = `${e.pageY}vh`;
  updateSheetHeight(newHetght);
}

function dragStart(e) {
  isDragging = true;
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(bottomSheetContent.style.height);
  bottomSheet.classList.add("dragging");
}
function dragStop() {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(bottomSheetContent.style.height);
  sheetHeight < 25
    ? hideBottomSheet()
    : sheetHeight > 75
    ? updateSheetHeight(100)
    : updateSheetHeight(50);
}
btnShow.addEventListener("click", showBottomSheet);
sheetOverlay.addEventListener("click", hideBottomSheet);
document.addEventListener("mousemove", dragging);
dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
document.addEventListener("touchmove", dragging);
dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchend", dragStop);
