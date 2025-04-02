
const chainCar  = document.querySelector('.forms .car-wrapper .chain-car')
const normalCar = document.querySelector('.forms .car-wrapper .car')

//class contato

class contato {
    constructor(nome, email, telefone, contato, mensagem){
        this.nome      = nome;
        this.email     = email;
        this.telefone  = telefone;
        this.contato   = contato;
        this.mensagem  = mensagem;
    }

    dados(){
        return {
            "nome" : this.nome,
            "email" : this.email,
            "telefone" : this.telefone,
            "contato" : this.contato,
            "mensagem" : this.mensagem,
        }
    }
}

function Post(form) {
    let data = new contato(form.elements.namedItem("nome").value,
                form.elements.namedItem("email").value,
                form.elements.namedItem("telefone").value, 
                form.elements.namedItem("contato").value,
                form.elements.namedItem("mensagem").value);


    Enviar(data);
    
}

function Enviar(pessoa) {

    var nome = pessoa.nome;
    console.table(pessoa.dados())
    
    if (nome != "") {
        document.location = 'index.html';
        alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    }
}

function carEnter(){
    setTimeout(()=>{
        chainCar.style.opacity = 0;
        chainCar.style.display = 'none';
        normalCar.style.display = 'inline-block';
    } ,1500)
}