// let numWork = 1
// console.log("test")
// let reveal = () =>{
//     let revealSelector = document.querySelectorAll('.revealSelector') 
    
//     let revealSelectorRight = document.getElementsByClassName('revealSelectorRight') 
//     console.log(revealSelectorRight)
//     for( let i =0; i< revealSelector.length; i++){

//         let winHeight = window.innerHeight
//         let revealTop = revealSelector[i].getBoundingClientRect().top
//         let revealPoint = 150;

//         if (revealTop < winHeight - revealPoint){
//             console.log(numWork)
//             numWork++
//             revealSelector[i].classList.add('active')
//         } 
//         console.log(revealSelector[i].textContent)
//         for (let j=0; j< revealSelectorRight.length; j++){

//             if(revealSelectorRight[i].innerText.includes("year")){
//                 console.log("test")
//                 revealSelectorRight[i].classList.add('activeRight')
//             }
//         }
//     }
// }
// window.addEventListener("scroll", reveal)
