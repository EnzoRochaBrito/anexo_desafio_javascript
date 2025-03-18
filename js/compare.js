// array de carros
let carArr = [];

// array que deleta o carro a depender da sua posição no array "carArr"
// Exemplo: carro na posição 0 do array foi desselecionado
// Então vai ser chamado o delete_car[0], que vai dar carArr.shift()

const delete_car = [
    function(){
        carArr.shift()
    },
    function(){
        carArr.pop()
    }];

let checkboxes = document.querySelectorAll('.checkbox')


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

            if (carArr.length == 2){
                for (let i = 0; i < checkboxes.length; i++){
                    // AJEITAR AQ
                }
            }

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
    console.log(carArr)
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
    
}

