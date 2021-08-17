function escolhaNico1() {

    var escolhaNico1 = ""

    while (true) {
        escolhaNico1 = prompt("1-Abre a porta e entra.\n 2-Desiste e volta a explorar a ilha.")

        if (escolhaNico1 == 1) {

            window.location.href = "./nico_dois.html"


        } else if (escolhaNico1 == 2) {

            window.location.href = "./nico_dois_GO.html"

        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}