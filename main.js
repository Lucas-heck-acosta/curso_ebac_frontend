const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroA = document.getElementById('nA').value
    const numeroB = document.getElementById('nB').value
    const containerRsultado = document.querySelector('.resultado')

    containerRsultado.style.display = 'block'

    if(numeroA > numeroB)
    {
        containerRsultado.innerHTML = `Número A <b>(${numeroA})</b> maior que número B <b>(${numeroB})</b>`
        containerRsultado.style.backgroundColor = 'green'
    }
    else if(numeroA < numeroB)
    {
        containerRsultado.innerHTML = `Número B <b>(${numeroB})</b> maior que número A <b>(${numeroA})</b>`
        containerRsultado.style.backgroundColor = 'blue'
    }
    else
    {
        containerRsultado.innerHTML = "Valores iguais"
        containerRsultado.style.backgroundColor = 'yellow'

    }

})