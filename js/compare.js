// array de carros
let carArr   = [];
let carOrder = {};

const checkboxes    = document.querySelectorAll('.checkbox');
const botaoComparar = document.querySelector('.botao_comparar');

checkboxes.forEach((box, id) => {
    box.value = id;
})

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
            carOrder[carClass.nome] = el.value

        } else {
            // remove o carro da lista
            id = GetCarArrPosition(carArr ,carClass);
            carArr.splice(id, 1);
            delete carOrder[carClass.nome]
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

    // Organiza a lista para deixar os carros em ordem
    if (carOrder[carArr[0].nome] > carOrder[carArr[1].nome]){
        let temp = carArr[0];
        carArr.splice(0,1);
        carArr.push(temp);
    }


    for (let i = 0 ; i < carArr.length; i++){
        
        let car  = carArr[i];
        
        document.querySelector("#compare_image_" + i).innerHTML = `<img src="${car.image}">`;
        document.querySelector("#compare_modelo_" + i).innerHTML = car.nome;
        document.querySelector("#compare_alturacacamba_" + i).innerHTML = car.alturaCacamba;
        document.querySelector("#compare_alturaveiculo_" + i).innerHTML = car.alturaVeiculo;
        document.querySelector("#compare_alturasolo_" + i).innerHTML = car.alturaSolo;
        document.querySelector("#compare_capacidadecarga_" + i).innerHTML = car.capacidadeCarga;
        document.querySelector("#compare_motor_" + i).innerHTML = car.motor;
        document.querySelector("#compare_potencia_" + i).innerHTML = car.potencia;
        document.querySelector("#compare_volumecacamba_" + i).innerHTML = car.volumeCacamba;
        document.querySelector("#compare_roda_" + i).innerHTML = car.roda;
        document.querySelector("#compare_preco_" + i).innerHTML = car.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    } 
    // nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image
}

