async function recipe() {
    let response = await fetch('receitas.json').then(Response => {
        return Response.json();
    }).then(data => {
        let receitas = document.getElementById('receita');
        for (var info of data.results) {
            let x = document.createElement('li');
            x.appendChild(document.createTextNode(info.title + " <br>"));
            x.appendChild(document.createTextNode("Ingredientes " + info.ingredients + "  "));
            x.appendChild(document.createTextNode(info.href));
            let imagem = document.createElement("img");
            imagem.src = info.thumbnail;
            receitas.appendChild(x);
            receitas.appendChild(imagem);
        }
    }).catch(error => console.error(error))
}
window.onload = recipe()
