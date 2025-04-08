//obter o valor dos campos
const cepInput = document.querySelector('#cep');

//atribuir as funções nos botões
const btnPesquisarCEP = document.querySelector('#btnPesquisar');

const btnLimpar = document.querySelector('#btnLimpar');

console.log(cepInput);

cepInput.addEventListener('keypress', (event) => {
    const keyCode = event.keyCode;
    console.log(keyCode);

    //verifica se a tecla pressionada não é um numero
    if (keyCode < 48 || keyCode > 57){
        //se nao for um numero, cancela a entrada e exibe uma mensagem
        event.preventDefault();
        alert("Digite apenas numeros.")
    }
});
  
const obterDadosApi = async (cep) => {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    console.log(apiUrl);
    const response = await fetch (apiUrl);
    console.log(response);

    const data = await response.json();
    console.log(data);
     if (data.erro){
         alert("O CEP digitado está invalido");
         return;
    }

    atribuirCampos(data);
};

btnPesquisarCEP.addEventListener('click', (e) =>{
    e.preventDefault();

    if (cepInput.value.length < 8 || cepInput.value.length > 8){
       alert('Por favor, digite um CEP válido com 8 digitos.');
        document.querySelector('#cep').value = '';
        return; 
    }
    
    obterDadosApi(cepInput.value);
});

const atribuirCampos = (data) =>{
    const rua = document.querySelector('#rua');
    const complemento = document.querySelector('#complemento');
    const bairro = document.querySelector('#bairro');
    const cidade = document.querySelector('#cidade');
    const estado = document.querySelector('#estado');

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

btnLimpar.addEventListener('click', () =>{
    const cepInput = document.querySelector('#cep').value = '';
    const rua = document.querySelector('#rua').value = '';
    const complemento = document.querySelector('#complemento').value = '';
    const bairro = document.querySelector('#bairro').value = '';
    const cidade = document.querySelector('#cidade').value = '';
    const estado = document.querySelector('#estado').value = '';
})