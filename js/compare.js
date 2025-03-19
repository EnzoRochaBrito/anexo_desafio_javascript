// array de carros
let carArr = [];

// array que deleta o carro a depender da sua posição no array "carArr"
// Exemplo: carro na posição 0 do array foi desselecionado
// Então vai ser chamado o delete_car[0], que vai dar carArr.shift()

const delete_car = [
    function(){
        carArr.shift();
    },
    function(){
        carArr.pop();
    }];

const checkboxes = document.querySelectorAll('.checkbox');
const botaoComparar = document.querySelector('.botao_comparar');


class Car {
   
    // construtor 
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome            = nome;
       this.preco           = preco;
       this.alturaCacamba   = alturaCacamba;
       this.alturaVeiculo   = alturaVeiculo;
       this.alturaSolo      = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor           = motor;
       this.potencia        = potencia;
       this.volumeCacamba   = volumeCacamba;
       this.roda            = roda;
       this.image           = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

// adiciona o carro na lista para comparar 
function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       

        // verifica se há espaco disponivel no array quando o checkbox for pressionado
        if(el.checked && carArr.length < 2){

            carArr.push(carClass);

        } else {

            id = GetCarArrPosition(carArr ,carClass);
            if (id < 0){
                // pass
            } else {
                delete_car[id]();
            }
        }

    } else {
        throw "You need set a Car Class";
    }
    if (carArr.length == 2){
        botaoComparar.classList.remove('comparar_bloqueado');
        checkboxes.forEach(check => {
            if (!check.checked){
                check.disabled = true;
            }
        });
    } else {
        botaoComparar.classList.add('comparar_bloqueado');
        checkboxes.forEach(check => {
            if (check.disabled){
                check.disabled = false;
            }
        });
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for (let i = 0 ; i < carArr.length; i++){
        let _car = carArr[i];

        document.querySelector(`#compare_image_${i}`).innerHTML = `<img src="${_car.image}">`;
        document.querySelector(`#compare_modelo_${i}`).innerHTML = _car.nome;
        document.querySelector(`#compare_alturacacamba_${i}`).innerHTML = _car.alturaCacamba;
        document.querySelector(`#compare_alturaveiculo_${i}`).innerHTML = _car.alturaVeiculo;
        document.querySelector(`#compare_alturasolo_${i}`).innerHTML = _car.alturaSolo;
        document.querySelector(`#compare_capacidadecarga_${i}`).innerHTML = _car.capacidadeCarga;
        document.querySelector(`#compare_motor_${i}`).innerHTML = _car.motor;
        document.querySelector(`#compare_potencia_${i}`).innerHTML = _car.potencia;
        document.querySelector(`#compare_volumecacamba_${i}`).innerHTML = _car.volumeCacamba;
        document.querySelector(`#compare_roda_${i}`).innerHTML = _car.roda;
        document.querySelector(`#compare_preco_${i}`).innerHTML = _car.preco;
    } 
    // nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image
}

