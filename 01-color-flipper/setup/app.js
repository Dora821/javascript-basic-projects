const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color")
const button = document.getElementById("btn")
console.log('color', color)

button.addEventListener('click', function() {
  curColor = randomColor(colors);
  color.textContent = curColor;
  document.body.style.backgroundColor = curColor;
})

function randomColor(array){
 return array[Math.floor(Math.random() * array.length)]
}
