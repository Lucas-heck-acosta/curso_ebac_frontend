function Veiculo(marca, modelo, anoFab, km, preco) {
    let _marca = marca;
    let _modelo = modelo;
    let _anoFab = anoFab;
    let _km = km;
    let _preco = preco;

    this.setMarca = function(marca)
    {
        _marca = marca;
    }
    this.getMarca = function()
    {
        return _marca;
    }

    this.setModelo = function(modelo)
    {
        _modelo = modelo
    }
    this.getModelo = function()
    {
        return _modelo;
    }

    this.setAnoFab = function(anoFab)
    {
        _anoFab = anoFab
    }
    this.getAnoFab = function()
    {
        return _anoFab;
    }

    this.setKm = function(km)
    {
        _km = km
    }
    this.getKm = function()
    {
        return _km;
    }

    this.setPreco = function(preco)
    {
        _preco = preco
    }
    this.getPreco = function()
    {
        return _preco;
    }

    this.acelerar = function(){
        console.log('vruum');
    }
}

function Carro(marca, modelo, anoFab, km, preco, carroceria) {
    let _carroceria = carroceria;
    this.abrirPorta = function() {
        console.log('Abrindo portas');
    }
    Veiculo.call(this, marca, modelo, anoFab, km, preco);
}
function Moto(marca, modelo, anoFab, km, preco, tipo) {
    let _tipo = tipo;
    this.descerCavalete = function() {
        console.log('Cavalete aberto');
    }
    Veiculo.call(this, marca, modelo, anoFab, km, preco);
}

const carro1 = new Carro('Honda', 'Civic', 2020, 33000, 100000, 'Sedan')
const carro2 = new Carro('Fiat', '500', 2015, 80000, 45000, 'Compacto')
const moto = new Moto('Honda', 'PCX', 2022, 4000, 18500, 'Scooter')

console.log(`${carro1.getMarca()} - ${carro1.getModelo()}`);
carro1.acelerar();
carro1.abrirPorta();

console.log(`${carro2.getMarca()} - ${carro2.getModelo()}`);
carro2.acelerar();

console.log(`${moto.getMarca()} - ${moto.getModelo()}`);
moto.acelerar();
moto.descerCavalete();

