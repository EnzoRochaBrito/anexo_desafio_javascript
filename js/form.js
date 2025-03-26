
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome      = nome;
        this.sobrenome = sobrenome;
        this.email     = email;
        this.cpf       = cpf;
        this.telefone  = telefone;
        this.contato   = contato;
    }
}

function Post(form) {
    let data = new contato(form.elements.namedItem("nome").value,
                form.elements.namedItem("sobrenome").value, 
                form.elements.namedItem("email").value, 
                form.elements.namedItem("cpf").value, 
                form.elements.namedItem("telefone").value, 
                form.elements.namedItem("contato").value);

    if (data.contato == 1){
        alert("Selecione um meio de contato");
        return;
    }

    if (VerificarCpf(data.cpf)){
        alert('cpf valido');
    } else {
        alert('cpf invalido')
    }

    Enviar(data);
    
}

function Enviar(pessoa) {
    
    var nome = pessoa.nome;
    
    if (nome != "") {
        document.location = 'index.html';
        alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    }
}

function VerificarCpf(cpf, vezes = 0, digits = []){


    console.log('inicio f')
    console.log(cpf)
    console.log(vezes)
    console.log(digits)
    
    let soma   = 0;
    
    if (cpf.length != 11){
        return false;
    }
    
    // adiciona os dígitos do cpf em um array
    for (let i = 0; i < cpf.length-2; i++){
        try {
            digits.push(parseInt(cpf[i]))
        } catch (error) {
            return false;
        }
    }
    console.log('meio f')
    console.log(digits)
    
    // multiplica cada número da lista e faz a soma
    digits.forEach((element, id) => {
        soma += (element * (10+vezes-id));
    });
    
    // resto da divisão
    let resto = soma % 11;
    
    // compara com o dígito verificador
    if (resto < 2){
        console.log(resto)
        console.log(cpf[9+vezes] + "resto")
        console.log(digits)
        if (parseInt(cpf[9+vezes]) != 0){
            return false;
        } else{
            digits.push(0);
        }
    } else {
        console.log(resto)
        console.log(cpf[9+vezes])
        console.log((11 - resto ) + ' resto')
        if (parseInt(cpf[9+vezes] != (11-resto))){
            return false;
        }else{
            digits.push(11-resto);
        }
    }
    
    if (vezes = 1){
        console.log('fim f')
        console.log(digits)
        return true;
    }
    
    VerificarCpf(cpf, 1, digits)
    
}