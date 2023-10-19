const cores = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FFFF33', '#33FF33', '#FF33FF', '#3333FF', '#FF3366', '#6633FF'];


document.addEventListener('DOMContentLoaded', function(){
    const botao = document.getElementById('btnMudar');
    botao.addEventListener('click', function()
    {
        const cor = Math.floor(Math.random() * 10);

        document.body.style.backgroundColor = cores[cor];
    })
});