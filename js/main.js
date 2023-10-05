$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        invalidHandler: function(evento, validador)
        {
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
            if (camposIncorretos > 0)
            {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
