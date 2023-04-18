let numWork = 1
let reveal = () =>{
    let revealSelector = document.querySelectorAll('.revealSelector') 
    
    for( let i =0; i< revealSelector.length; i++){
        
        let winHeight = window.innerHeight
        let revealTop = revealSelector[i].getBoundingClientRect().top
        let revealPoint = 150;
        
        if (revealTop < winHeight - revealPoint){
            console.log(numWork)
            revealSelector[i].classList.add('active')
        } 
        console.log(revealSelector[i].textContent)
    }
}

window.addEventListener("scroll", reveal)
