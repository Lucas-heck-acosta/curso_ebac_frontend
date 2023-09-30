const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroA = parseInt(document.getElementById('nA').value);
    const numeroB = parseInt(document.getElementById('nB').value);
    const containerResultado = document.querySelector('.resultado');

    containerResultado.style.display = 'block';

    if (numeroA > numeroB)
    {
        containerResultado.innerHTML = `Número A <b>(${numeroA})</b> é maior que número B <b>(${numeroB})</b>`;
        containerResultado.style.backgroundColor = 'green';
    }
    else if (numeroA < numeroB)
    {
        containerResultado.innerHTML = `Número B <b>(${numeroB})</b> é maior que número A <b>(${numeroA})</b>`;
        containerResultado.style.backgroundColor = 'blue';
    }
    else
    {
        containerResultado.innerHTML = "Valores iguais";
        containerResultado.style.backgroundColor = 'yellow';
    }

})