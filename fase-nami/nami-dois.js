function escolhaNami2() {

    var escolhaNami2 = ""

    while (true) {
        escolhaNami2 = prompt("1 - Corre e tenta voltar a porta gigante de volta para a Ilha. \n 2 - Espera a coruja chegar perto.")

        if (escolhaNami2 == 1) {

            window.location.href = "./nami_tres_GO.html"


        } else if (escolhaNami2 == 2) {

            window.location.href = "./nami_tres.html"

        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}