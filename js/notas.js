/* DOM */
const n1 = document.querySelector("#uni1")
const n2 = document.querySelector("#uni2")
const n3 = document.querySelector("#uni3")

const btn = document.querySelector("#calcular")

const media = document.querySelector("#media")
const resultado = document.querySelector("#resultado")


/* Evento */
btn.addEventListener('click', calcular)

/* Funcão */
function calcular() {
    
    let mediaFinal =(Number(n1.value) + Number(n2.value) + Number(n3.value)) / 3

    media.textContent = "Sua média final foi de: " + mediaFinal.toFixed(1)

    if(mediaFinal >= 7) {
        media.style.color = 'blue'
        resultado.textContent = "Voçê foi Aprovado!!"
    } else {
        media.style.color = 'red'
        resultado.textContent = "Voçê está na Recuperação!!"
        
    }    

}