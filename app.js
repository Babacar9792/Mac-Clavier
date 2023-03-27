const contenue = document.querySelectorAll(".contenue")
const ecran = document.querySelector(".ecran")
// console.log(contenue)

contenue.forEach(touc => {
    touc.addEventListener("click", ()=> {
        let val = ""
        console.log(touc.innerText)
        val = val + touc.innerText
        let spane = document.createElement("p");
   
        spane.innerHTML =`  <span>${val}</span>`
            ecran.appendChild(spane)
    });
    
});