const contenue = document.querySelectorAll(".contenue");
const ecran = document.querySelector(".ecran");
// console.log(contenue)
const key_p = document.querySelector("#key_p");
document.addEventListener('keypress', (e) => {
    console.log(e);
    if(e.key==':'){
        console.log("ok");
    }
    beussiClavierbi(e.key);
})

contenue.forEach(touc => {
    touc.addEventListener("click", () => {
        let val = ""
        console.log(touc.innerText)
        val = val + touc.innerText
        let spane = document.createElement("p");
        spane.innerHTML = `  <span>${val}</span>`
        ecran.appendChild(spane)
    });

});

function beussiClavierbi(key) {

    const button = document.querySelector('#key_' + key);
    ecran.textContent += key;
    if (button) {
        button.classList.add('takk');
        setTimeout(() => {
            button.classList.remove('takk');
        }, 200);
    }
}
