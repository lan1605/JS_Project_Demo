const items = document.querySelectorAll(".item"),
  sortableList = document.querySelector(".sortable-list");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = sortableList.querySelector(".dragging");
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  let nextSibling = siblings.find((siblings) => {
    return e.clientY <= siblings.offsetTop + siblings.offsetHeight / 2;
  });

  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener("dragover", initSortableList);
