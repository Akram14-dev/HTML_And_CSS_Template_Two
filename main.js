// scrollHeight  >> Entire content
// clientHeight >> Only Visible Content

let element = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", scrollHandler);
function scrollHandler() {
  let scrollTop = document.documentElement.scrollTop;
  element.style.width = `${(scrollTop / height) * 100}%`;
}
