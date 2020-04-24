let knowLine = document.getElementById("know_more");
let button = document.getElementById("check");
let flag = 0;
button.onclick = clickCheck;

// function clickCheck() {
//     knowLine.style.display = 'none';
// }
function clickCheck() {
  flag = flag + 1;
  if (flag % 2 !== 0) {
    knowLine.style.display = "none";
  } else {
    knowLine.style.display = "block";
  }
}
