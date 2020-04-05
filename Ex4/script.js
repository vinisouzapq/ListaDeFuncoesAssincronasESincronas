window.onload = function  escrevaNumeros() {
    let ini = this.prompt("Digite um número para começar a contagem: ");
    let fin = this.prompt("Digite um número para terminar a contagem: ");
    setInterval(() => {
        if (ini <= fin) {
            let x = ini;
            const select = this.document.querySelector("body");
            const done = this.document.createElement("p");
            done.innerHTML = x;
            select.appendChild(done);
            this.console.log(ini);
        }
        ++ini;

    }, 1000)


}

