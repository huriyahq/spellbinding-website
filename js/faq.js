/*const button = document.getElementById("MLogo");
const pText = document.getElementsByClassName("faqtext");
button.addEventListener("mousedown", () => {
    pText.style.display = "block"
    })
*/    
      
const buttons = document.querySelectorAll('#MLogo')
//console.log(buttons);
buttons.forEach(button => {
    console.log(button);
    button.addEventListener("mousedown", () => {
console.log(button.nextElementSibling.nextElementSibling.style.display);
if (button.nextElementSibling.nextElementSibling.clasList="notActive") {
        button.nextElementSibling.nextElementSibling.classList.toggle("active");
        button.nextElementSibling.nextElementSibling.classList.toggle("notActive")
     } 
     else if (button.nextElementSibling.nextElementSibling.classList="active"){
        console.log(button.nextElementSibling.nextElementSibling.style.display);
        button.nextElementSibling.nextElementSibling.classList.toggle("active")
        button.nextElementSibling.nextElementSibling.classList.toggle("notActive")
    }
    },true)
})




