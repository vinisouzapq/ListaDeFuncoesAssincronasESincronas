function carregadoSucesso() {

    document.getElementById('paragrafo').innerHTML = "Carregado com Sucesso"

}

function exibirImagem() {
    var img = document.createElement("img");
    img.src = "https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724";
    document.getElementById('paragrafo').appendChild(img);
    setTimeout(carregadoSucesso, 500);

}
