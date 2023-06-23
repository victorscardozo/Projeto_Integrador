
function checarArquivo(input) {

    const lixeira = document.getElementById('lixeira');
  
    if (input.files.length > 0) {
      lixeira.style.display = 'inline-block';

    } else {
      lixeira.style.display = 'none';
    }
  }
  


function apagarArquivo() {

    const arquivo = document.getElementById('arquivo');

    arquivo.value = ''; // Limpa a seleção de arquivos


    const lixeira = document.getElementById('lixeira');

    lixeira.style.display = 'none'; // Esconde o ícone da lixeira

  }
  



function enviar() {

    const arquivo = document.getElementById('arquivo');
    const lixeira = document.getElementById('lixeira');


    if (arquivo.files.value = 1){

    arquivo.value = ''; // Limpa a seleção de arquivos
    lixeira.style.display = 'none'; // Esconde o ícone da lixeira


    alert('Seu arquivo foi enviado com sucesso! Retornaremos em breve.');
}   


else{
    alert('Você precisa adicionar um arquivo para enviá-lo.');
  }
    


}