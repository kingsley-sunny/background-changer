const body = document.querySelector('body')
const btn = document.querySelector('.btn')
let arrayOfColors = ['yellow', 'blue', 'red', 'green', 'indigo', 'magenta', 'cyan']

btn.addEventListener('click', runEvent)

// MY OWN 
// function runEvent(e){
//     arrayOfColors.forEach(function(color){
//         // console.log(Math.floor(Math.random()*arrayOfColors.length))
//         let j = Math.floor(Math.random()*arrayOfColors.length)
//         console.log(arrayOfColors[j])
//         body.style.background  = arrayOfColors[j]
//     }) 
    
// }

// CORRECTION
function runEvent(e){
    random = Math.floor(Math.random()*arrayOfColors.length)
    body.style.background = arrayOfColors[random]
}



// HE WON
