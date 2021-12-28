// 시작점, 목표지점 (엘리먼트) 인자로 넣으면,
// 상위요소를 연속적으로 탐색하여 boolean반환
export const SearchOnTheWayUp = (startEl, targetEl) => {
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
