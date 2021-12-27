export const SearchOnTheWayUp = (startEl, targetEl) => {
  console.log("startEl", startEl, "targetEl", targetEl);
  let currentEl = startEl;

  while (startEl !== targetEl) {
    console.log(currentEl);
    if (currentEl.tagName === "HTML") {
      return false;
    }
    currentEl = currentEl.parentElement;
  }
  return true;
};
