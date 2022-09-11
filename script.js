function separar() {
    var string = document.getElementById('string');  //input que recebe a string
    string = string.value;
    var txt = document.getElementById('txt');      //lista onde sera exibido os dados
    var array = string.split(",");                //transforma string em array, separando por ","
    if (array.length >1) {
    var texto =""                               //limpa a lista antes de exibir novamente
    for (let i = 0; i < array.length; i++) {   //loop que percorre o array listando cada valor em uma variavel
        texto += `<li>${array[i]}</li>`;       
    }
        txt.innerHTML = texto;            //exibe na lista       
    }
}