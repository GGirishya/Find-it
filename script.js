// Remove span children.
let spans= document.querySelectorAll(".box span");
console.log(spans);
for(let i=0; i<spans.length; i++){
  spans[i].remove();
}
// Create an image element.
let image = document.createElement("img");
image.setAttribute("src","http://placekitten.com/200/200");
// Get a random box.
let randomBox = document.querySelector("#box-1");
// Make the new image element a child of the box.
randomBox.appendChild(image);
