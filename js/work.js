
 let bar = document.querySelector(".bar")
 let bar1 = document.querySelector(".bar1")
 let bar2 = document.querySelector(".bar2")
 let bar3= document.querySelector(".bar3")
 console.log("test")
 let switched = false

let hamburger = () =>{
    if (switched === false){

        bar1.style.transform= "translateY(5px) rotate(45deg)"
        bar1.style.transition = ".4s all"
        
        bar3.style.transition = ".4s all"
        bar3.style.transform= "translateY(-5px) rotate(-45deg)"
        
        bar2.style.opacity = 0;
        switched = true;
    }else{
        bar1.style.transform= "rotate(0deg)"
        bar1.style.transition = ".4s all"
        
        bar3.style.transition = ".4s all"
        bar3.style.transform= "rotate(0deg)"
        
        bar2.style.opacity = 1;
        bar2.style.transition =".4s all" 

        switched = false;
    }



}
 bar.addEventListener("click", hamburger)